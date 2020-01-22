#!/usr/bin/env python
import argparse
import os

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

def main():
    # Accepts a project(+plan) identifier as argument
    parser = argparse.ArgumentParser()
    parser.add_argument("jobdescription_identifier", help="Job description identifier")
    args = parser.parse_args()
    jobdescription_identifier = args.jobdescription_identifier

    print("Fetching job description with identifier = " + jobdescription_identifier)

    print(os.environ)
    # print("Job description table = " + jobdescription_table())

if __name__ == "__main__":
    main()