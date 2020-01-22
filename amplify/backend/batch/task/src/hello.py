#!/usr/bin/env python
import argparse
from decimal import Decimal
import os
import time
from datetime import datetime

import boto3

def get_table(prefix):
    """Returns DynamoDB table which contains projects"""
    region_name = os.getenv('REGION')
    dynamodb = boto3.resource('dynamodb', region_name=region_name)
    table_name = prefix + os.getenv('API_NLESC_DYNAMODB_TABLE_SUFFIX')
    return dynamodb.Table(table_name)

def jobdescription_table():
    """Returns DynamoDB table which contains job descriptions"""
    return get_table('JobDescription')

def job_table():
    """Returns DynamoDB table which contains job descriptions"""
    return get_table('Job')

def fetch_jobdescription(jobdescription_identifier):
    """Fetch a jobdescription from the db by it's identifier"""
    table = jobdescription_table()
    response = table.get_item(Key={
        'id': jobdescription_identifier
    })
    return response['Item']

def fetch_job(job_id):
    """Fetch a job from the db by it's identifier"""
    table = job_table()
    response = table.get_item(Key={
        'id': job_id
    })
    return response['Item']

def update_progress(fraction, message):
    jobid =  os.getenv('AWS_BATCH_JOB_ID')
    print(f"{fraction}, {message}")
    key = {'id': jobid}
    job = fetch_job(jobid)
    status = job['status']
    status['progress']= Decimal(str(fraction))
    status['progressMessage'] =  message
    status['updatedAt'] = datetime.utcnow().isoformat()
    job_table().update_item(
        Key=key,
        UpdateExpression='SET #S = :s',
        ExpressionAttributeNames={"#S": "status"},
        ExpressionAttributeValues={":s": status},
    )

def set_result(output):
    jobid =  os.getenv('AWS_BATCH_JOB_ID')
    key = {'id': jobid}
    result = {
        'output': output
    }
    job_table().update_item(
        Key=key,
        UpdateExpression='SET #R = :r',
        ExpressionAttributeNames={"#R": "result"},
        ExpressionAttributeValues={":r": result},
    )

def main():
    # Accepts a project(+plan) identifier as argument
    parser = argparse.ArgumentParser()
    parser.add_argument("jobdescription_identifier", help="Job description identifier")
    args = parser.parse_args()
    jobdescription_identifier = args.jobdescription_identifier

    print("Fetching job description with identifier = " + jobdescription_identifier)
    desc = fetch_jobdescription(jobdescription_identifier)
    print(desc)

    update_progress(0.2, 'Just getting started')

    time.sleep(20)
    update_progress(0.5, 'Halvway')

    time.sleep(20)
    update_progress(0.99, 'Nearly there')

    set_result(f'Counted {desc["payload"]["count"]} times')
    print(os.environ)
    # print("Job description table = " + jobdescription_table())

if __name__ == "__main__":
    main()