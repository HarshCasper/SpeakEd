from flask import Flask
from flask_restful import Api, Resource
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app)

DEBUG = False


@app.route('/Login',methods=['GET','POST'])
def Login():
    return 'Login Page'


@app.route('/SignUp',methods=['GET','POST'])
def SignUp():
    return 'Sign Up Page'


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=DEBUG)
