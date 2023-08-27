from flask import Blueprint, jsonify, request
from app.models.post import Post
from flask_login import login_required, current_user
from app.models.db import db
from app.forms.post_form import PostForm

post_routes = Blueprint('posts', __name__, url_prefix='')

@post_routes.route('/curr')
@login_required
def get_current_posts():
    """
    Gets all posts of the current user
    """
    all_posts = Post.query.filter(Post.user_id ==current_user.id).all()
    new_posts = [post.to_dict() for post in all_posts]
    # print(" THIS IS ALL posts", new_posts)
    return new_posts
@post_routes.route('all')
def get_all_posts():
    """
    Gets all posts from community
    """
    all_posts_obj = Post.query.all()
    all_posts = [post.to_dict() for post in all_posts_obj]
    return all_posts

@post_routes.route("/<int:id>/post")
@login_required
def get_one_post(id):
    """
    Gets one posts of the current user
    """
    one_post = Post.query.get(id)
    return one_post.to_dict()

@post_routes.route('/new', methods=["POST"])
@login_required
def create_post():
    form = PostForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        new_post = Post(
            post_text = form.data["post_text"],
            user_id=current_user.id,
        )
        db.session.add(new_post)
        db.session.commit()
        return jsonify(new_post.to_dict())
    return form.errors
