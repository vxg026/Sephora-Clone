from flask import Blueprint, request
from app.models.review import Review
from app.models.product import Product
from app.models.cart_product import cart_products
from flask_login import login_required, current_user
from app.models import User
from app.models.db import db
from ..forms import ReviewForm
from ..forms import CartForm

product_routes = Blueprint('products', __name__, url_prefix="")

@product_routes.route('/all')
def get_all_products():
    """
    Gets all the products
    """
    all_products_obj = Product.query.all()
    all_products = [product.to_dict() for product in all_products_obj]
    return all_products

@product_routes.route('sunscreen')
def get_all_sunscreen_products():
    """
    Gets all the products that are sunscreens
    """
    sunscreen_products_obj = Product.query.filter(Product.category.ilike("sunscreen")).all()
    sunscreen_obj = [sunscreen.to_dict() for sunscreen in sunscreen_products_obj ]
    return sunscreen_obj

@product_routes.route('makeup')
def get_all_makeup_products():
    """
    Gets all the products that are makeup
    """
    makeup_products_obj = Product.query.filter(Product.category.ilike("makeup")).all()
    makeup_obj = [makeup.to_dict() for makeup in makeup_products_obj ]
    return makeup_obj

@product_routes.route('hair')
def get_all_hair_products():
    """
    Gets all the products that are hair
    """
    hair_products_obj = Product.query.filter(Product.category.ilike("hair")).all()
    hair_obj = [hair.to_dict() for hair in hair_products_obj]
    return hair_obj

