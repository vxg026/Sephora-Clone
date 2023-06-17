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
    if not product_obj:
        return "item not found"
    quantity = int(form.quantity.data)
    print("this is productob=======>", product_obj)
    if form.validate_on_submit():
        cart = Cart.query.filter_by(user_id=current_user.id).first()
        print('this is cart===>', cart)
        if not cart:
            cart = Cart(user_id=current_user.id)

        item_price = float(product_obj.price) * quantity

        cart.total_price =str(float(cart.total_price) + item_price)

        cart_product = db.session.query(cart_products).filter_by(cart_id=cart.id, product_id=product_obj.id).first()


        if not cart_product:
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

        print("cart total price===>", cart.total_price)
        # cart.products.append(product_obj)
        print("cart products===>", cart.products)
        db.session.commit()

        return {"message":"added to cart"}
    return form.errors

@product_routes.route('/<int:id>/cart', methods=["PUT"])
@login_required
def update_cart(id):
    """
    Make a put request to update the quantity of a product in the cart
    """

    form = CartForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    product_obj = Product.query.get(id)
    print("this is product obj!==>", product_obj)
    if not product_obj:
        return "Product is not in cart:()"
    quantity = int(form.quantity.data)

    cart = Cart.query.filter_by(user_id=current_user.id).first()

    print("this is cart==>", cart)
    if not cart:
        return "Please log in"
    if form.validate_on_submit():


        cart_product = db.session.query(cart_products).filter_by(cart_id=cart.id, product_id=product_obj.id).first()

        if not cart_product:
            db.session.execute(cart_products.insert().values(
                cart_id=cart.id,
                product_id=product_obj.id,
                quantity=quantity
                ))
        else:
            db.session.execute(cart_products.update().values(
                quantity=quantity
            ).where((cart_products.c.cart_id == cart.id) &
                    (cart_products.c.product_id ==product_obj.id
                    )))
        old_quantity = cart_product.quantity
        print('this is old quantity====>', old_quantity)
        item_price = float(product_obj.price) * quantity
        print('this is total price===>', item_price)
        item_price_difference = (quantity - old_quantity) * item_price
        print("thi sis the difference------>", item_price_difference)
        cart.total_price = str(float(cart.total_price) + item_price_difference)
        print("this is cart total price===>", cart.total_price)
        db.session.commit()

        return product_obj.to_dict()

    return form.errors

@product_routes.route('/delete/<int:id>', methods=["DELETE"])
@login_required
def remove_item(id):
    """
    remove item from cart
    """

    product_obj = Product.query.get(id)
    cart = Cart.query.filter_by(user_id=current_user.id).first()

    if not cart:
        return "No cart"

    cart_product = db.session.query(cart_products).filter_by(cart_id=cart.id, product_id=product_obj.id).first()

    if not cart_product:
        return "Item not found in cart"

    item_price = float(product_obj.price) * cart_product.quantity

    cart.products.remove(product_obj)
    cart.total_price = str(float(cart.total_price) - item_price)

    db.session.commit()

    return "Item successfully removed from cart"



@product_routes.route('/<int:id>/reviews', methods=["POST"])
@login_required
def create_review(id):
    """
    Post a review on product page
    """

    product_obj = Product.query.get(id)

    print("this is product_obj---------->", product_obj)

    print("this is userr---------->", current_user.id)
    form = ReviewForm()
    form["csrf_token"].data=request.cookies["csrf_token"]

    if form.validate_on_submit():
        user_new_review=Review(
            product_id = id,
            user_id=current_user.id,
            star_rating=form.data["star_rating"],
            review_text=form.data["review_text"],
            img1=form.data["img1"],
            img2=form.data["img2"],
            img3=form.data["img3"],
            img4=form.data["img4"],

            )
        db.session.add(user_new_review)
        db.session.commit()
        return user_new_review.to_dict()
    return form.errors
