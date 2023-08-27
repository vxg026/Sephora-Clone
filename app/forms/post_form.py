from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField, StringField
from wtforms.validators import DataRequired, Email, ValidationError, NumberRange, Length
from flask_wtf.file import FileField, FileAllowed, FileRequired
from ..api.AWS_helpers import ALLOWED_EXTENSIONS


class PostForm(FlaskForm):
    post_text= TextAreaField("Review", validators=[DataRequired(), Length(min=2, max=1500)])
