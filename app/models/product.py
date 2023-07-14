from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime
# from .models.cart_product import cart_products
from ..models.cart_product import cart_products
from .likes import likes

class Product(db.Model):
    __tablename__="products"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False)
    price=db.Column(db.String(50), nullable=False)
    description=db.Column(db.String(2000), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    image=db.Column(db.String, nullable=False)
    created_at= db.Column(db.DateTime(),default=datetime.now)

    reviews = db.relationship("Review", back_populates="product", cascade="all, delete")
    post_likes = db.relationship(
        "User",
        secondary=likes,
        back_populates="user_likes"
    )
    carts = db.relationship(
        "Cart",
        secondary=cart_products,
        back_populates="products"
    )
    def to_dict(self):
        return {
            'id': self.id,
            'name':self.name,
            'price':self.price,
            'description':self.description,
            'category':self.category,
            'image':self.image,
            'created_at':self.created_at,
        }
