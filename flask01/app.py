import os
from flask import Flask, jsonify, request
from flask_cors import CORS #comment this on deployment
import flask_sqlalchemy
from sqlalchemy import create_engine, text
#from rf01.flask01.model.models import Members
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity, \
    unset_jwt_cookies, jwt_required, JWTManager
import pymysql

# Initialize flask app for the example
app = Flask(__name__)
app.debug = True
app.config.from_pyfile('config.py')
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt = JWTManager(app)

database = create_engine(app.config['DB_URL'], encoding='utf-8')
app.database = database

@app.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
        return response
    except (RuntimeError, KeyError):
        return response

@app.route('/token', methods=["POST"])
def create_token():
    loginid = request.json.get("loginid", None)
    loginpw = request.json.get("loginpw", None)

    sql_test = "select login_id, login_pw from users where login_id = %s and login_pw = %s"
    try:
        result = app.database.execute(sql_test, (loginid, loginpw,)).first()
        if len(result) < 0:
            return {"msg": "Wrong ID or Password"}, 401
    except:
        return {"msg": "Wrong ID or Password"}, 401

    access_token = create_access_token(identity=loginid)
    response = {"access_token": access_token}
    return response

@app.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"msg": "logout successful"})
    unset_jwt_cookies(response)
    return response

@app.route("/UserDataRow", methods=["GET"])
@jwt_required()
def getUserDataRow():
    sql_test = "select * from users"
    try:
        result = app.database.execute(sql_test).fetchall()
        if len(result) < 0:
            return {"msg": "Wrong ID or Password"}, 401
    except:
        return {"msg": "Wrong ID or Password"}, 401
    data = [{
        'id': row['id'],
        'User_ID': row['login_id'],
        #'loginpw': row['login_id'],
        'User_Name': row['name'],
        'User_Email': row['email']
    } for row in result]
    return jsonify(data)

@app.route("/ivsmetainput", methods=["POST"])
def ivsmetainput():
    arn = request.json.get("arn", None)
    metainfo = eval(request.json.get("meta", None))
    print(arn + ", meta: " + metainfo["prot"] + "," + str(metainfo["playerID"]))
    sql_test = "insert user values (NULL, %s, %s, %s)"
    try:
        app.database.execute(sql_test, (str(arn),str(metainfo["prot"]), str(metainfo["playerID"])))
    except:
        return {"msg": "wrong data request"}, 500
    response = jsonify({"msg": "ivsmetainput successful"})
    return response

if __name__ == "__main__":
    app.run()
