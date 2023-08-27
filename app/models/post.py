from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Post(db.Model):
    __tablename__="posts"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer(), db.ForeignKey(add_prefix_for_prod("users.id")))
    post_text=db.Column(db.String(1500), nullable=False)
    created_at= db.Column(db.DateTime(),default=datetime.now)

    user = db.relationship("User", back_populates ="posts")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id':self.user_id,
            'post_text': self.post_text,
            'created_at':self.created_at,
        }
