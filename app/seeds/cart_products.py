
from sqlalchemy.sql import text
# from ..models.cart_products import db, Cart_Product,environment, SCHEMA
from ..models.cart_product import db, cart_products, environment, SCHEMA

def seed_cart_products():
    cart_product_list=[
        {
        "cart_id":1,
        "product_id":1,
        "quantity":1,
        },
       {
        "cart_id":2,
        "product_id":3,
        "quantity":2,
        },
        {
        "cart_id":2,
        "product_id":2,
        "quantity":1,
        },
        {
        "cart_id":3,
        "product_id":6,
        "quantity":1,
        }
    ]
# db.session.bulk_insert_mappings(cart_products, cart_product_list)
# db.session.commit()

    inserting = cart_products.insert().values(cart_product_list)
    db.session.execute(inserting)
    db.session.commit()
#     cart_product_list = [cart_products1, cart_products2, cart_products3, cart_products4]

#     for cart_product in cart_product_list:
#         db.session.add(cart_product)
#     db.session.commit()

# def undo_cart_products():
#     if environment == "production":
#         db.session.execute(f"TRUNCATE table {SCHEMA}.bookings RESTART IDENTITY CASCADE;")
#     else:
#         db.session.execute(text("DELETE FROM cart_products"))

#     db.session.commit()
def undo_cart_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.cart_products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM cart_products"))

    # db.session.commit()
    # db.session.query(cart_products).delete()
    # db.session.commit()
