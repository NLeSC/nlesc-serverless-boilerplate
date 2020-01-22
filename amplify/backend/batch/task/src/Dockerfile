FROM python:3-slim

WORKDIR /usr/src/app

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY hello.py .

RUN chmod +x hello.py

ENTRYPOINT ["/usr/src/app/hello.py"]
CMD []