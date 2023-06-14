from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime
# from . import cart_product
from ..models.cart_product import cart_products

class Cart(db.Model):
    __tablename__="carts"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer(), db.ForeignKey(add_prefix_for_prod("users.id")))
    total_price=db.Column(db.String(50), default=0)
    created_at= db.Column(db.DateTime(),default=datetime.now)

    user = db.relationship("User", back_populates ="carts")
    products = db.relationship(
        "Product",
         secondary=cart_products,
        back_populates="carts"
    )
    def to_dict(self):
        return {
            'id': self.id,
            'user_id':self.user_id,
            'total_price':self.total_price,
            'created_at':self.created_at,
        }
