from flask import Blueprint, jsonify, request
from app.models.review import Review
from flask_login import login_required, current_user
from app.models.db import db
from app.forms.review_form import ReviewForm
from .AWS_helpers import (
    upload_file_to_s3, get_unique_filename, remove_file_from_s3)

review_routes = Blueprint('reviews', __name__, url_prefix='')

@review_routes.route('/curr')
@login_required
def get_current_reviews():
    """
    Gets all reviews of the current user
    """
    all_review = Review.query.filter(Review.user_id == current_user.id).all()
    new_reviews = [review.to_dict() for review in all_review]
    # print(" THIS IS ALL REVIEWS", new_reviews)
    return new_reviews

@review_routes.route('/all')
def get_all_reviews():
    """
    Gets all Reviews
    """
    all_reviews_obj = Review.query.all()
    all_reviews = [review.to_dict() for review in all_reviews_obj]
    return all_reviews

@review_routes.route('/currentUser/<int:id>')
@login_required
def get_one_review(id):
    """
    Gets one reviews of the current user
    """

    one_review = Review.query.get(id)
    print("THISI IS ID IN GET ONE REVIEW", one_review.to_dict())
    return one_review.to_dict()
@review_routes.route('/edit/<int:id>', methods=["PUT"])
@login_required
def edit_review(id):
    """
    Current user is able to get review by review id and edit
    """
    print("this is the iddddddd~~~~~~~~~~~~~~", id)
    reviewObj = Review.query.get(id)
    print("thi sis review obj~~~~~~~~~~~~~~~", reviewObj)
    if not reviewObj:
        return {"message":"This review does not exist"}

    elif current_user.id == reviewObj.user_id:

    # review=reviewObj.to_dict()
        form = ReviewForm()
        form["csrf_token"].data=request.cookies["csrf_token"]
        image1 = form.data["img1"]
        if image1:
            image1.filename=get_unique_filename(image1.filename)
            upload=upload_file_to_s3(image1)
            if "url" not in upload:
                return {"errors":"could not update img"}
            url=upload["url"]
            reviewObj.review_text = form.data["review_text"]
            reviewObj.star_rating = form.data["star_rating"]
            reviewObj.img1 = url
            reviewObj.img2 = form.data["img2"]
            reviewObj.img3 = form.data["img3"]
            reviewObj.img4 = form.data["img4"]
        reviewObj.review_text = form.data["review_text"]
        reviewObj.star_rating = form.data["star_rating"]
        reviewObj.img1 = url
        reviewObj.img2 = form.data["img2"]
        reviewObj.img3 = form.data["img3"]
        reviewObj.img4 = form.data["img4"]

        db.session.commit()

        return reviewObj.to_dict()
    return {"message": "This review does not belong to you"}
@review_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
    """
    Current user is able to delete review by review id
    """
    selected_review = Review.query.get(id)
    if not selected_review:
        return {"message":"This review does not exist"}

    elif current_user.id == selected_review.user_id:
        if selected_review.img1:

            file_delete = remove_file_from_s3(selected_review.img1)
            if file_delete:
                db.session.delete(selected_review)
                db.session.commit()
                return {"reviewId": id}
        else:
            db.session.delete(selected_review)
            db.session.commit()
            return{"reviewId":id}
    return {"message": "This review does not belong to you"}
