from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError, NumberRange, Length


class CartForm(FlaskForm):
    quantity= SelectField("Quantity", choices=[(1,1),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10)], validators=[DataRequired()])

