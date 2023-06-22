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

@product_routes.route('/sunscreen')
def get_all_sunscreen_products():
    """
    Gets all the products that are sunscreens
    """
    sunscreen_products_obj = Product.query.filter(Product.category.ilike("sunscreen")).all()
    sunscreen_obj = [sunscreen.to_dict() for sunscreen in sunscreen_products_obj ]
    return sunscreen_obj

@product_routes.route('/makeup')
def get_all_makeup_products():
    """
    Gets all the products that are makeup
    """
    makeup_products_obj = Product.query.filter(Product.category.ilike("makeup")).all()
    makeup_obj = [makeup.to_dict() for makeup in makeup_products_obj ]
    return makeup_obj

@product_routes.route('/hair')
def get_all_hair_products():
    """
    Gets all the products that are hair
    """
    hair_products_obj = Product.query.filter(Product.category.ilike("hair")).all()
    hair_obj = [hair.to_dict() for hair in hair_products_obj]
    return hair_obj

@product_routes.route('/fragrance')
def get_all_fragrance_products():
    """
    Gets all the products that are fragrance
    """
    fragrance_products_obj = Product.query.filter(Product.category.ilike("fragrance")).all()
    fragrance_obj = [fragrance.to_dict() for fragrance in fragrance_products_obj]
    return fragrance_obj

@product_routes.route('/skincare')
def get_all_skincare_products():
    """
    Gets all the products that are skincaare
    """
    skincare_products_obj = Product.query.filter(Product.category.ilike("skincare")).all()
    skincare_obj = [skincare.to_dict() for skincare in skincare_products_obj]
    return skincare_obj

@product_routes.route('/body')
def get_all_body_products():
    """
    Gets all the products that are skincaare
    """
    body_products_obj = Product.query.filter(Product.category.ilike("body")).all()
    body_obj = [body.to_dict() for body in body_products_obj]
    return body_obj


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
    curr_user_id = current_user.id
    print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",curr_user_id)
    # cart = Cart.query.filter_by(user_id=curr_user_id).first()


    # print("this is user_id===========", cart.user_id)
    cart = Cart.query.filter(Cart.user_id == curr_user_id).first()
    print("this is cart===========", cart)
    if cart is None:
        new_cart = Cart(user_id=curr_user_id)
        db.session.add(new_cart)
        db.session.commit()

        cart = Cart.query.filter(Cart.user_id == curr_user_id).first()
    if cart and cart is not None:

        #search for produt table and associated quanitity for join table.
        all_products = db.session.query(Product, cart_products.c.quantity)
        print(all_products, "<------all Products")
        # sqalchemy docs, sess.scalars(select(A).join(A.d)).all()
        #from a join b as b_1 Join d as d_1 On b_1.d_id=d_1.id
        # sess.scalars(
        #     select(A)
        #     .join(A.b)
        #     .where(B_viacd_subquery.some_b_column == "some b")
        #     .order_by(B_viacd_subquery.id)
        # ).all()
        joined_products = all_products.join(cart_products)

        products= joined_products.filter(cart_products.c.cart_id==cart.id).all()
        print("~~~~~~~~~~~~~~~~~", products)

        product_quantity_obj = []

        for product, quantity in products:
            print("`````````````````", products)
            product_obj= {
                "product": product.to_dict(),
                "quantity":quantity
            }
            product_quantity_obj.append(product_obj)
        print("==================================", (product_quantity_obj))
        return jsonify(product_quantity_obj)





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
    print("this is form-------------------->", form.quantity)

    quantity_create = int(form.quantity.data)
    # quantity_create=int((1,1))
    print("this is productob=======>", product_obj)


    if form.validate_on_submit():
        # method sqlalchemy.orm.Query.filter_by(**kwargs)
        # session.query(MyClass).filter_by(name = 'some name')
        cart = Cart.query.filter_by(user_id=current_user.id).first()
        print('this is cart===>', cart)
        if cart is None:
            cart = Cart(user_id=current_user.id)
            db.session.add(cart)
            (print("this is cartt.........=> cart"))
        cart_product = db.session.query(cart_products).filter_by(cart_id=cart.id, product_id=product_obj.id).first()


        print("this is cart product........", cart_product)
        #sqlalchemy docs:
# Session.execute() accepts any executable clause construct, such as select(), insert(), update(), delete(), and text(). Plain SQL strings can be passed as well, which in the case of Session.execute() only will be interpreted the same as if it were passed via a text() construct.

        if cart_product is None:
            db.session.execute(cart_products.insert().values(
                cart_id=cart.id,
                product_id=product_obj.id,
                quantity=quantity_create
                ))
        else:
            # ex. table.update().where(table.c.id==7).values(name='foo')
            db.session.execute(cart_products.update().where((cart_products.c.cart_id == cart.id) &
                    (cart_products.c.product_id ==product_obj.id
                    )).values(
                quantity=cart_product.quantity + quantity_create
            ))

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
            db.session.execute(cart_products.update().where((cart_products.c.cart_id == cart.id) &
                    (cart_products.c.product_id ==product_obj.id
                    )).values(
                quantity=quantity
            ))

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
    #method sqlalchemy.orm.Query.filter_by(**kwargs)¶
    cart = Cart.query.filter_by(user_id=current_user.id).first()

    if not cart:
        return "No cart"

    cart_product = db.session.query(cart_products).filter_by(cart_id=cart.id, product_id=product_obj.id).first()

    if not cart_product:
        return "Item not found in cart"

    cart.products.remove(product_obj)

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
