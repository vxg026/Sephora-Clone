from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Review(db.Model):
    __tablename__ = "reviews"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer(), db.ForeignKey(add_prefix_for_prod("products.id")))
    user_id = db.Column(db.Integer(), db.ForeignKey(add_prefix_for_prod("users.id")))
    star_rating = db.Column(db.Integer(), nullable=False)
    review_text = db.Column(db.String(500), nullable=False)
    images = db.Column(db.JSON)  # Use a JSON field to store a list of image URLs

    created_at = db.Column(db.DateTime(), default=datetime.now)

    user = db.relationship("User", back_populates="reviews")
    product = db.relationship("Product", back_populates="reviews")

    def to_dict(self):
        return {
            'id': self.id,
            'product_id': self.product_id,
            'user_id': self.user_id,
            'star_rating': self.star_rating,
            'review_text': self.review_text,
            'images': self.images if self.images else [],
            'created_at': self.created_at,
        }
