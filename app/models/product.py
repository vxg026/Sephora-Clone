from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime
# from .models.cart_product import cart_products
from ..models.cart_product import cart_products


class Product(db.Model):
    __tablename__="products"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False)
    price=db.Column(db.String(50), nullable=False)
    description=db.Column(db.String(2000), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    created_at= db.Column(db.DateTime(),default=datetime.now)

    reviews = db.relationship("Review", back_populates="product")

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
            'created_at':self.created_at,
        }
