from ..models.product import db, Product, environment, SCHEMA
from sqlalchemy.sql import text

def seed_products():
    product1= Product(
        name="Supergoop!",
        price="38.00",
        description="Suncscreen you cant's see.",
        category="sunscreen",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120070235643449384/Screenshot_2023-06-18_at_12.11.11_PM.png"
    )
    product2= Product(
        name="Dr.Jart+",
        price="44.00",
        description="Premium BB Tinted Moisturizer with Niacinamide and SPF 40",
        category="sunscreen",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120070235966419114/Screenshot_2023-06-18_at_12.13.10_PM.png"
    )
    product3= Product(
        name="CAY SKIN",
        price="34.00",
        description="Isle Glow Face Moisturizer SPF 45 with Sea Moss and Niacinamide",
        category="sunscreen",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120070236205482014/Screenshot_2023-06-18_at_12.13.49_PM.png"
    )
    product4=Product(
        name="Charlotte Tilbury Mini Glossy Pink Lip Gloss + Lip Liner Set",
        price="25.00",
        description=" An iconic, mini Lip Cheat Lip Liner and Collagen Lip Bath Gloss—the perfect pair for contoured, fuller-looking lips with a high-shine finish.",
        category="makeup",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120070236436172983/Screenshot_2023-06-18_at_12.14.28_PM.png"
    )
    product5=Product(
        name="MAKEUP BY MARIO Soft Pop Plumping Blush Veil",
        price="30.00",
        description=" A weightless cream blush that is made with hyaluronic acid to hydrate and plump skin with a sheer veil of color.",
        category="makeup",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120070236796878888/Screenshot_2023-06-18_at_12.14.56_PM.png"
    )

    product6=Product(
        name="Gisou Honey Infused Lip Oil",
        price="34.00",
        description=" A multitasking lip oil powered by Mirsalehi honey and hyaluronic acid to hydrate, condition, and highlight lips with a honey glow in one swipe.",
        category="makeup",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120070237061124157/Screenshot_2023-06-18_at_12.15.17_PM.png",
    )
    product7 = Product(
        name="dae Cactus Fruit 3-in-1 Styling Cream",
        price="28.00",
        description=" A three-in-one, multitasking styling cream infused with desert-derived extracts that adds polish and shine while hydrating botanicals moisturize and tame frizz for touchable, soft hair.​",
        category="hair",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120070237291806820/Screenshot_2023-06-18_at_12.15.43_PM.png",
    )
    product8 = Product(
        name="dae Agave Dry Heat Protection & Hold Styling Mist",
        price="28.00",
        description=" A styling mist for dry hair that provides heat protection and controls frizz for shiny, soft hair.",
        category="hair",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120070237577023528/Screenshot_2023-06-18_at_12.16.14_PM.png",
    )
    product_list = [product1, product2, product3, product4, product5, product6, product7, product8]

    for product in product_list:
        db.session.add(product)
    db.session.commit()

def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))

    db.session.commit()
