from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

cart_products = db.Table(
    "cart_products",
    db.Model.metadata,
    db.Column(
        "product_id", db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), primary_key=True
    ),
    db.Column(
        "cart_id", db.Integer, db.ForeignKey(add_prefix_for_prod('carts.id')), primary_key=True
    ),
    db.Column("quantity", db.Integer, default=1)
)

if environment == "production":
    cart_products.schema = SCHEMA

# class Cart_Product(db.Model):
#     __tablename__ = "cart_products"

#     if environment == "production":
#         __table_args__ = {'schema': SCHEMA}

#     id = db.Column(db.Integer, primary_key=True)
#     cart_id = db.Column(db.Integer(), db.ForeignKey(add_prefix_for_prod("carts.id")), nullable = False)
#     product_id = db.Column(db.Integer(), db.ForeignKey(add_prefix_for_prod("products.id")), nullable=False)
#     quantity = db.Column(db.Integer(), default=1)
#     created_at= db.Column(db.DateTime(),default=datetime.now)



#     def to_dict(self):
#         return {
#             'id': self.id,
#             'cart_id': self.cart_id,
#             'product_id': self.product_id,
#             'quantity': self.quantity,
#             'created_at':self.created_at
#         }
