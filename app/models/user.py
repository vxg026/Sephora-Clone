from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .likes import likes

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable = False)
    last_name = db.Column(db.String(50), nullable = False)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    phone_number = db.Column(db.String(50), nullable = False, unique = True)
    hashed_password = db.Column(db.String(255), nullable=False)

    carts = db.relationship("Cart", back_populates="user")
    reviews = db.relationship("Review", back_populates="user")
    posts = db.relationship("Post", back_populates="user")

    user_likes = db.relationship(
        "Product",
        secondary=likes,
        back_populates="post_likes"
    )

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'username': self.username,
            'email': self.email,
            'likes': [product.to_dict() for product in self.user_likes],
            'phone_number': self.phone_number
        }
