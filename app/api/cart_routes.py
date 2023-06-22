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


