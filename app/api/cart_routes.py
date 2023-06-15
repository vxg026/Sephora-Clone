from flask import Blueprint, request
from app.models.review import Review
from app.models.product import Product
from app.models.cart_product import cart_products
from flask_login import login_required, current_user
from app.models import User
from app.models.db import db
from ..forms import ReviewForm
from ..forms import CartForm
from app.models.cart import Cart
cart_routes = Blueprint('carts', __name__, url_prefix="")

@cart_routes.route('/')
@login_required
def get_cart():
    """
    shows the user's cart
    """
    print(current_user.id)
    my_cart = Cart.query.filter_by(user_id=current_user.id).first()
    print("This is my cart===>", my_cart.to_dict())

    return [my_cart.to_dict()]

    # print(current_user.id)
    # my_cart = Cart.query.filter_by(user_id=current_user.id).first()
    # print("This is my cart===>", my_cart.to_dict())

    # if my_cart:
    #     cart_product_items = []
    #     columns = db.session.query(Product, cart_products.c.quantity) #selecting both columns
    #     selected_columns=columns.join(cart_products, Product.id == cart_products.c.product_id)
    #     matching_rows = selected_columns.filter(cart_products.c.cart_id == my_cart.id)
    #     product_quantity = matching_rows.all()


    #     print("this is queryyyy!!!!===>", product_quantity)
    #     for product, quantity in product_quantity:
    #         cart_product_items.append({
    #             'product': product.to_dict(),
    #             'quantity': quantity
    #     })

    #     my_cart_data = my_cart.to_dict()
    #     my_cart_data['products'] = cart_product_items
    #     return [my_cart_data]
    # else:
    #     return []
