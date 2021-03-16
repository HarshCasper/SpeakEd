from flask import Flask
from flask_restful import Api, Resource
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)

DEBUG = False


class TestRoute(Resource):
    '''This is a mock route used for structuring the application'''

    def get(self):
        return {"message": "Welcome to the API!"}, 200

    def post(self):
        return{"message": "Welcome to the post route"}, 200


api.add_resource(TestRoute, "/test")


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=DEBUG)
