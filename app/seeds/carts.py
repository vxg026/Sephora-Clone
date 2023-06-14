
from sqlalchemy.sql import text
from ..models.cart import db, Cart,environment, SCHEMA

def seed_carts():
    cart1= Cart(
        user_id=1,
        total_price="38.00"
    )
    cart2= Cart(
        user_id=2,
        total_price="112.00"
    )
    cart3= Cart(
        user_id=3,
        total_price="34.00"
    )



    cart_list = [cart1, cart2, cart3]

    for cart in cart_list:
        db.session.add(cart)
    db.session.commit()

def undo_carts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.carts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM carts"))

    db.session.commit()
