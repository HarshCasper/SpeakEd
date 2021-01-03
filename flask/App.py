from flask import Flask
from flask_restful import Api, Resource

app = Flask(_name_)
api = Api(app)

DEBUG = False


class sendData(Resource):
    def get(self):
        return{"status_code": "200", "text": "hello you are at root"}


class rcdData(Resource):
    def get(self):
        return{"status_code": "200", "msg": "you performed get at /rcd"}

    def post(self):
        return{"status_code": "200", "msg": "you are at /rcd"}


api.add_resource(sendData, "/")
api.add_resource(rcdData, "/rcd")


if _name_ == "_main_":
    app.run(debug=DEBUG)