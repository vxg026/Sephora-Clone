from app.models.review import db, Review, environment, SCHEMA
from sqlalchemy.sql import text

def seed_reviews():
    review1=Review(
        product_id=1,
        user_id=1,
        star_rating=1,
        review_text="This sunscreen made me break out.",
        img1="image.url",
        img2="image.url",
        img3="image.url",
        img4="image.url",
    )
    review2=Review(
        product_id=3,
        user_id=2,
        star_rating=4,
        review_text="Just recieved in! Love how it feels and looks! not greasy.",
        img1="image.url",
        img2="image.url",
        img3="image.url",
        img4="image.url",
    )
    review3=Review(
        product_id=4,
        user_id=2,
        star_rating=3,
        review_text="It's pretty but not for the price",
        img1="image.url",
        img2="image.url",
        img3="image.url",
        img4="image.url",
    )
    review_list = [review1, review2, review3]
    for review in review_list:
        db.session.add(review)
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
