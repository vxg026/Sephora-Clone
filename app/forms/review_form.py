from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField, StringField
from wtforms.validators import DataRequired, Email, ValidationError, NumberRange, Length


class ReviewForm(FlaskForm):
    review_text= TextAreaField("Review", validators=[DataRequired(), Length(min=2, max=500)])
    star_rating= IntegerField("Star rating", validators=[DataRequired(), NumberRange(min=1, max=5)])
    img1=StringField("img1")
    img2=StringField("img2")
    img3=StringField("img3")
    img4=StringField("img4")
