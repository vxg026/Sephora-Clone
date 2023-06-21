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
    product9 = Product(
        name="Chloé Chloé Naturelle Eau de Parfum",
        price="118.00",
        description=" The hero ingredient of this eau de parfum is a handpicked and ethically sourced organic rose, which opens the perfume with an airy and feminine aura complemented by Moroccan neroli.",
        category="fragrance",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120964301260324975/Screenshot_2023-06-20_at_11.31.02_PM.png",
    )
    product10 = Product(
        name="Marc Jacobs Fragrances Daisy",
        price="128.00",
        description=" Charmingly simple with a signature quality, Daisy Marc Jacobs transports you to a place that’s optimistic, beautiful, and pure.",
        category="fragrance",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120964300983521320/Screenshot_2023-06-20_at_11.30.47_PM.png",
    )
    product11 = Product(
        name="Caudalie Vinoperfect Radiance Dark Spot Serum Vitamin C Alternative",
        price="82.00",
        description="A brightening serum that combats the look of dark spots caused by sun, acne, or pregnancy, visibly even skin tone, and helps improve skin’s glow.",
        category="skincare",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120966376505495583/Screenshot_2023-06-20_at_11.39.34_PM.png",
    )
    product12 = Product(
        name="Drunk Elephant B-Hydra™ Intensive Hydration Serum with Hyaluronic Acid",
        price="49.00",
        description=" A cool drink of water for thirsty skin, this hydrating serum visibly replenishes the complexion and improves the look of skin texture and tone.",
        category="skincare",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120966376794890324/Screenshot_2023-06-20_at_11.37.11_PM.png",
    )
    product13 = Product(
        name="Isle of Paradise Brilliantly Bright Body Moisturizer with Vitamin C & Niacinamide",
        price="26.00",
        description="A brightening body moisturizer infused with a blend of vitamin C, niacinamide, and hyaluronic acid to hydrate and visibly brighten dull, dry skin..",
        category="body",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120968499133698158/Screenshot_2023-06-20_at_11.46.59_PM.png",
    )
    product14 = Product(
        name="Isle of Paradise Confidently Clear Body Moisturizer with Lactic & Hyaluronic Acids",
        price="26.00",
        description="A clarifying body moisturizer infused with a blend of lactic, polyglutamic, mandelic, and hyaluronic acids to reduce the appearance of blemishes.",
        category="body",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120968499410501734/Screenshot_2023-06-20_at_11.46.22_PM.png",
    )
    product15= Product(
        name="Dr.Jart+ Every Sun Day!",
        price="40.00",
        description=" A weightless, matte, high-SPF physical sunscreen that looks and feels good on skin.",
        category="sunscreen",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120953636441296896/Screenshot_2023-06-20_at_10.46.28_PM.png"
    )
    product16= Product(
        name="innisfree Daily UV Defense Invisible Broad Spectrum SPF 36 Sunscreen",
        price="38.00",
        description=" A lightweight, daily Broad Spectrum SPF 36 sunscreen delivering invisible sun protection while hydrating and soothing skin - no white-cast, just glow!",
        category="sunscreen",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120953636831371264/Screenshot_2023-06-20_at_10.43.59_PM.png"
    )
    product17= Product(
        name="Shiseido Clear Sunscreen Stick SPF 50!",
        price="38.00",
        description="A portable sunscreen stick with SPF 50+ and a hydrating, invisible finish that can be re-applied anytime, anywhere, over or under makeup.",
        category="sunscreen",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120953637179490304/Screenshot_2023-06-20_at_10.44.11_PM.png"
    )
    product18= Product(
        name="CAY SKIN Isle Nourishing Body Mist SPF 50 with Sea Moss and Hyaluronic Acid",
        price="26.00",
        description=" A nourishing and weightless allover body mist with broad-spectrum UV protection that hydrates and protects with a skin-like finish.",
        category="sunscreen",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120953637607313409/Screenshot_2023-06-20_at_10.46.40_PM.png"
    )
    product19= Product(
        name="Summer Fridays ShadeDrops Mineral Milk Sunscreen SPF 30",
        price="36.00",
        description="A lightweight, reef-friendly, SPF 30 mineral sunscreen that helps shield skin from UV rays and leaves skin with a soft, natural-looking finish.",
        category="sunscreen",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120953638785908776/Screenshot_2023-06-20_at_10.44.35_PM.png"
    )
    product20= Product(
        name="The INKEY List Polyglutamic Acid Dewy Sunscreen SPF 30",
        price="14.99",
        description=" A broad-spectrum SPF 30 sunscreen that provides UVA and UVB protection from the sun’s harmful rays, through a blend of chemical UV filters.",
        category="sunscreen",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120953643118628874/Screenshot_2023-06-20_at_10.45.58_PM.png"
    )
    product21= Product(
        name="Supergoop! 100% Mineral (Re)setting Powder SPF 35!",
        price="35.00",
        description="A 100 percent mineral, non-nano setting powder to set makeup, mattify shine, and help you easily reapply your SPF throughout the day.",
        category="sunscreen",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120953643429011516/Screenshot_2023-06-20_at_10.45.40_PM.png"
    )
    product22= Product(
        name="Kosas DreamBeam Silicone-Free Mineral Sunscreen",
        price="40.00",
        description="A clean, silicone-free, comfy mineral sunscreen packed with ceramides and peptides to moisturize, visibly smooth and brighten, and create the dreamiest makeup base.",
        category="sunscreen",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120953645014458460/Screenshot_2023-06-20_at_10.45.08_PM.png"
    )
    product23= Product(
        name="Supergoop! Glow Stick Sunscreen SPF 50",
        price="26.00",
        description=" A hydrating, portable sunscreen stick that leaves skin with a dewy, glowing finish & doubles as a face & body highlighter..",
        category="sunscreen",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120953644716658789/Screenshot_2023-06-20_at_10.45.22_PM.png"
    )
    product24=Product(
        name="Benefits Benetint",
        price="21.00",
        description=" A collection of fan-fave lip and cheek tints that come in a range of shades—all long-wearing, non-drying, and transfer-proof",
        category="makeup",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120961100234641478/Screenshot_2023-06-20_at_11.14.50_PM.png"
    )
    product25 = Product(
        name="COLOR WOW Mini Dream Coat Supernatural Spray Anti-Frizz Treatment",
        price="12.00",
        description="  A spray that keeps straight, wavy, or curly, frizz-prone hair silky, glassy, and frizz-free for days.​",
        category="hair",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120961448445743176/Screenshot_2023-06-20_at_11.16.17_PM.png",
    )
    product26 = Product(
        name="dGisou Mini Honey Infused Hair Oil",
        price="25.00",
        description="  A luxurious hair oil enriched with the moisture binding Gisou Mirsalehi Honey to hydrate, boost shine, and smooth frizz and flyaways.",
        category="hair",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120961448177324042/Screenshot_2023-06-20_at_11.16.26_PM.png",
    )
    product27 = Product(
        name="CMaison Margiela REPLICA Beach Walk",
        price="160.00",
        description=" A fresh scent inspired by salty air and rays of sun where bergamot and pink pepper fuse with lemon atop a floral perfume of heliotrope, coconut milk, and musk.",
        category="fragrance",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120963639097180240/Screenshot_2023-06-20_at_11.28.06_PM.png",
    )
    product28 = Product(
        name="CHANEL CHANCE EAU TENDRE Eau de Toilette",
        price="136.00",
        description="The delicate and unexpected fruity-floral fragrance for women creates a soft whirlwind of happiness, fantasy, and radiance.",
        category="fragrance",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120963639369805874/Screenshot_2023-06-20_at_11.27.33_PM.png",
    )
    product29 = Product(
        name="Paula's Choice Mini Skin Perfecting 2% BHA Liquid Exfoliant",
        price="13.00",
        description=" A daily and travel-friendly leave-on exfoliant with two percent salicylic acid to sweep away dead skin cells, unclog pores, and visibly smooth wrinkles—practically overnight.",
        category="skincare",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120966377084289125/Screenshot_2023-06-20_at_11.37.48_PM.png",
    )
    product30 = Product(
        name="Tatcha The Dewy Skin Cream Plumping & Hydrating Moisturizer",
        price="70.00",
        description="A rich cream that feeds skin with plumping hydration and antioxidant-packed Japanese purple rice for a dewy, healthy glow.",
        category="body",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120966377356939314/Screenshot_2023-06-20_at_11.38.03_PM.png",
    )
    product31 = Product(
        name="Donna Karan Cashmere Mist Deodorant",
        price="32.00",
        description="An effective deodorant and antiperspirant infused with the soft Cashmere Mist scent.",
        category="body",
        image="https://cdn.discordapp.com/attachments/1062942242450460744/1120968499997724742/Screenshot_2023-06-20_at_11.47.22_PM.png",
    )

    product_list = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14,product15, product16, product17, product18, product19, product20, product21, product22, product23, product24, product25, product26, product27, product28, product29, product30, product31]

    for product in product_list:
        db.session.add(product)
    db.session.commit()

def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))

    db.session.commit()
