from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField, StringField
from wtforms.validators import DataRequired, Email, ValidationError, NumberRange, Length
from flask_wtf.file import FileField, FileAllowed, FileRequired
from ..api.AWS_helpers import ALLOWED_EXTENSIONS

class ReviewForm(FlaskForm):
    review_text= TextAreaField("Review", validators=[DataRequired(), Length(min=2, max=500)])
    star_rating= IntegerField("Star rating", validators=[DataRequired(), NumberRange(min=1, max=5)])
    # img1=StringField("img1")
    img1=FileField("img1", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    img2=StringField("img2")
    img3=StringField("img3")
    img4=StringField("img4")
    # img2=FileField("img2", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    # img3=FileField("img3", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
    # img4=FileField("img4", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])
