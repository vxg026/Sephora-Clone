from flask import Blueprint, request, jsonify
from app.models.review import Review
from app.models.product import Product
from app.models.cart_product import cart_products
from flask_login import login_required, current_user
from app.models import User
from app.models.db import db
from ..forms import ReviewForm
from ..forms import CartForm
from app.models.cart import Cart
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

@product_routes.route('/<int:id>')
def get_single_product(id):
    """
    Gets single product by id
    """
    single_product = Product.query.get(id)
    return single_product.to_dict()

@product_routes.route('/curr')
@login_required
def get_curr_product():
    user_id = current_user.id

    cart = Cart.query.filter_by(user_id=user_id).first()

    if cart:
        products = db.session.query(Product, cart_products.c.quantity).join(cart_products).filter(cart_products.c.cart_id == cart.id).all()
        product_data = [{
            'product': product.to_dict(),
            'quantity': quantity
        } for product, quantity in products]

        return jsonify(product_data)
    else:
        return "Cart not found"

@product_routes.route('/<int:id>/cart', methods=["POST"])
@login_required
def add_to_cart(id):
    """
    Make a post request to add to cart
    """
    form = CartForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    product_obj = Product.query.get(id)
    quantity = int(form.quantity.data)

    if form.validate_on_submit():
        cart = Cart.query.filter_by(user_id=current_user.id).first()
        print('this is cart===>', cart)
        if cart is None:
            cart = Cart(user_id=current_user.id)

        item_price = float(product_obj.price) * quantity

        cart.total_price =str(float(cart.total_price) + item_price)

        cart_product = db.session.query(cart_products).filter_by(cart_id=cart.id, product_id=product_obj.id).first()


        if cart_product is None:
            db.session.execute(cart_products.insert().values(
                cart_id=cart.id,
                product_id=product_obj.id,
                quantity=quantity
                ))
        else:
            db.session.execute(cart_products.update().values(
                quantity=cart_product.quantity + quantity
            ).where((cart_products.c.cart_id == cart.id) &
                    (cart_products.c.product_id ==product_obj.id
                    )))
        # cart_product = cart_products.insert().values(
        #     cart_id=cart.id,
        #     product_id = product_obj.id,
        #     quantity=quantity
        #     )


        print("cart total price===>", cart.total_price)
        # cart.products.append(product_obj)
        print("cart products===>", cart.products)
        db.session.commit()

        return "added to cart"
    return form.errors
