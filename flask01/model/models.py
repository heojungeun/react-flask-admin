from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()


class Members(db.Model):
    """ table name : members
        table info 
    - id : index id 
    - name 
    - start: start datetime
    - end: end datetime """

    __tablename__ = 'members'

    id = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    name = db.Column(db.String(20, 'utf8mb4_unicode_ci'))
    email = db.Column(db.String(50, 'utf8mb4_unicode_ci'))
    phone = db.Column(db.String(20, 'utf8mb4_unicode_ci'))
    start = db.Column(db.DateTime, default=datetime.utcnow())
    end = db.Column(db.DateTime, default=datetime.utcnow())

    def __init__(self, name, email, phone, start, end):
        self.name = name
        self.email = email
        self.phone = phone
        self.start = start
        self.end = end