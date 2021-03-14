# Setting up the server

To set up the dev environment follow the given steps

## Installing dependencies

`pip install -r requirements.txt`

## Launching the server

`python app.py`

This will start the server at localhost:5000

## Sample Requests

### Get request

`curl --location --request GET "localhost:5000/test"`

### Post request

`curl --location --request POST "localhost:5000/test"`

## DEBUG settings

To turn on debug mode set `DEBUG=true` in app.py.

When debug mode is turned on , the server auto reloads whenever new changes are saved and a debugger is provided for errors.This however should not be used in production due to security issues.For more information refer to the [flask documentation](https://flask.palletsprojects.com/en/1.1.x/quickstart/#debug-mode)
