from app.models.post import db, Post, environment, SCHEMA
from sqlalchemy.sql import text

def seed_posts():
    post1 = Post(
        post_text="this is the first blog post!!",
        user_id = 1
    )
    post2 = Post(
        post_text = "any recocmentations to good skin care?",
        user_id = 2
    )
    post_list = [post1, post2]
    for post in post_list:
        db.session.add(post)
    db.session.commit()

def undo_posts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM posts"))

    db.session.commit()
