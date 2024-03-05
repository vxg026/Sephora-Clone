from ..models.product import db, Product, environment, SCHEMA
from sqlalchemy.sql import text

def seed_products():
    product1= Product(
        name="Supergoop!",
        price="38.00",
        description="Suncscreen you cant's see.",
        category="sunscreen",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120070235643449384/Screenshot_2023-06-18_at_12.11.11_PM.png?ex=65ee07b2&is=65db92b2&hm=4ac4f4438463fd540a2eea4c2fd5362704f8cf8ee26279a962633a38b734f7b3&=&format=webp&quality=lossless&width=1031&height=1078"
    )
    product2= Product(
        name="Dr.Jart+",
        price="44.00",
        description="Premium BB Tinted Moisturizer with Niacinamide and SPF 40",
        category="sunscreen",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120070235966419114/Screenshot_2023-06-18_at_12.13.10_PM.png?ex=65ee07b2&is=65db92b2&hm=d38bf88da79b06e985b3b865a8df08ec2597284350ab86d3070c20510a51d01e&=&format=webp&quality=lossless&width=1031&height=1078"
    )
    product3= Product(
        name="CAY SKIN",
        price="34.00",
        description="Isle Glow Face Moisturizer SPF 45 with Sea Moss and Niacinamide",
        category="sunscreen",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120070236205482014/Screenshot_2023-06-18_at_12.13.49_PM.png?ex=65ee07b2&is=65db92b2&hm=0acf4b918912fc204f8183f6177fdebbd55bdd1e39840f5d15b3df5b78c59b9e&=&format=webp&quality=lossless&width=1038&height=1078"
    )
    product4=Product(
        name="Charlotte Tilbury Mini Glossy Pink Lip Gloss + Lip Liner Set",
        price="25.00",
        description=" An iconic, mini Lip Cheat Lip Liner and Collagen Lip Bath Gloss—the perfect pair for contoured, fuller-looking lips with a high-shine finish.",
        category="makeup",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120070236436172983/Screenshot_2023-06-18_at_12.14.28_PM.png?ex=65ee07b2&is=65db92b2&hm=07aac2a47283fcce64042266d3701c95dc9830e8196768a74b66d539285f439e&=&format=webp&quality=lossless&width=1027&height=1078"
    )
    product5=Product(
        name="MAKEUP BY MARIO Soft Pop Plumping Blush Veil",
        price="30.00",
        description=" A weightless cream blush that is made with hyaluronic acid to hydrate and plump skin with a sheer veil of color.",
        category="makeup",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120070236796878888/Screenshot_2023-06-18_at_12.14.56_PM.png?ex=65ee07b2&is=65db92b2&hm=e7b43c3cadd555a9bc5f2dd275efd0a4311dfb0d8cfd9e44269318e76d9095b3&=&format=webp&quality=lossless&width=1062&height=1078"
    )

    product6=Product(
        name="Gisou Honey Infused Lip Oil",
        price="34.00",
        description=" A multitasking lip oil powered by Mirsalehi honey and hyaluronic acid to hydrate, condition, and highlight lips with a honey glow in one swipe.",
        category="makeup",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120070237061124157/Screenshot_2023-06-18_at_12.15.17_PM.png?ex=65ee07b2&is=65db92b2&hm=d98c7b50e3da366f6088d8ae2731d8199519c00c9ede814e8dc02e5494f5bc28&=&format=webp&quality=lossless&width=1069&height=1078"
    )
    product7 = Product(
        name="dae Cactus Fruit 3-in-1 Styling Cream",
        price="28.00",
        description=" A three-in-one, multitasking styling cream infused with desert-derived extracts that adds polish and shine while hydrating botanicals moisturize and tame frizz for touchable, soft hair.​",
        category="hair",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120070237291806820/Screenshot_2023-06-18_at_12.15.43_PM.png?ex=65ee07b2&is=65db92b2&hm=d77ae5eb818efb7bd9e3030a0b50229f149366695e148347afef5279d81d093a&=&format=webp&quality=lossless&width=1018&height=1078"
    )
    product8 = Product(
        name="dae Agave Dry Heat Protection & Hold Styling Mist",
        price="28.00",
        description=" A styling mist for dry hair that provides heat protection and controls frizz for shiny, soft hair.",
        category="hair",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120070237577023528/Screenshot_2023-06-18_at_12.16.14_PM.png?ex=65ee07b2&is=65db92b2&hm=4e1958c5ed9bc112f04c0de979fae04b206a1ac601b42b8319e5692e5e8b25fa&=&format=webp&quality=lossless&width=1025&height=1078"
    )
    product9 = Product(
        name="Chloé Chloé Naturelle Eau de Parfum",
        price="118.00",
        description=" The hero ingredient of this eau de parfum is a handpicked and ethically sourced organic rose, which opens the perfume with an airy and feminine aura complemented by Moroccan neroli.",
        category="fragrance",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120964301260324975/Screenshot_2023-06-20_at_11.31.02_PM.png?ex=65f1485b&is=65ded35b&hm=f910b2481a166cf0ac0a7ea14ffc41c378cfa08b17be619ed46c11ac81ab8972&=&format=webp&quality=lossless&width=1038&height=1078"
    )
    product10 = Product(
        name="Marc Jacobs Fragrances Daisy",
        price="128.00",
        description=" Charmingly simple with a signature quality, Daisy Marc Jacobs transports you to a place that’s optimistic, beautiful, and pure.",
        category="fragrance",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120964300983521320/Screenshot_2023-06-20_at_11.30.47_PM.png?ex=65f1485b&is=65ded35b&hm=ca6e00a4606c0aeb7cec8d32bff91ac53b507f69f2a035b8ffd2855a26f9e5fc&=&format=webp&quality=lossless&width=1014&height=1078"
    )
    product11 = Product(
        name="Caudalie Vinoperfect Radiance Dark Spot Serum Vitamin C Alternative",
        price="82.00",
        description="A brightening serum that combats the look of dark spots caused by sun, acne, or pregnancy, visibly even skin tone, and helps improve skin’s glow.",
        category="skincare",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120966376505495583/Screenshot_2023-06-20_at_11.39.34_PM.png?ex=65f14a4a&is=65ded54a&hm=723d84ec99e38ce8331cc2a8be3705f8f919dd970212d445cfed2c81e2a2bc2f&=&format=webp&quality=lossless&width=1067&height=1078"
    )
    product12 = Product(
        name="Drunk Elephant B-Hydra™ Intensive Hydration Serum with Hyaluronic Acid",
        price="49.00",
        description=" A cool drink of water for thirsty skin, this hydrating serum visibly replenishes the complexion and improves the look of skin texture and tone.",
        category="skincare",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120966376794890324/Screenshot_2023-06-20_at_11.37.11_PM.png?ex=65f14a4a&is=65ded54a&hm=0168cea62d1f2fa273d89d48bcdf00d9cc3156721581de36f5c45ac2f0dc5ae7&=&format=webp&quality=lossless&width=1053&height=1078"
    )
    product13 = Product(
        name="Isle of Paradise Brilliantly Bright Body Moisturizer with Vitamin C & Niacinamide",
        price="26.00",
        description="A brightening body moisturizer infused with a blend of vitamin C, niacinamide, and hyaluronic acid to hydrate and visibly brighten dull, dry skin..",
        category="body",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120968499133698158/Screenshot_2023-06-20_at_11.46.59_PM.png?ex=65f14c44&is=65ded744&hm=25e366a557e9466347682a8d7ed7c3bab53e712eb0c2c436e654acf6a7dbbb47&=&format=webp&quality=lossless&width=990&height=1078"
    )
    product14 = Product(
        name="Isle of Paradise Confidently Clear Body Moisturizer with Lactic & Hyaluronic Acids",
        price="26.00",
        description="A clarifying body moisturizer infused with a blend of lactic, polyglutamic, mandelic, and hyaluronic acids to reduce the appearance of blemishes.",
        category="body",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120968499410501734/Screenshot_2023-06-20_at_11.46.22_PM.png?ex=65f14c44&is=65ded744&hm=8d764bc3fe4f8f0688c26fa99e329a8a9462f8c286b94f04056c2a3dce871262&=&format=webp&quality=lossless&width=990&height=1078",
    )
    product15= Product(
        name="Dr.Jart+ Every Sun Day!",
        price="40.00",
        description=" A weightless, matte, high-SPF physical sunscreen that looks and feels good on skin.",
        category="sunscreen",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120953636441296896/Screenshot_2023-06-20_at_10.46.28_PM.png?ex=65f13e6d&is=65dec96d&hm=1fda0ae227fc696064b63b25a953e0037ff9b0e671a3d05449dccd7e46e10868&=&format=webp&quality=lossless&width=1040&height=1078"
    )
    product16= Product(
        name="innisfree Daily UV Defense Invisible Broad Spectrum SPF 36 Sunscreen",
        price="38.00",
        description=" A lightweight, daily Broad Spectrum SPF 36 sunscreen delivering invisible sun protection while hydrating and soothing skin - no white-cast, just glow!",
        category="sunscreen",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120953636831371264/Screenshot_2023-06-20_at_10.43.59_PM.png?ex=65f13e6d&is=65dec96d&hm=017853708107ef7b66d763613e460a18a720a385e3018567aab73c14c3282921&=&format=webp&quality=lossless&width=954&height=1078"
    )
    product17= Product(
        name="Shiseido Clear Sunscreen Stick SPF 50!",
        price="38.00",
        description="A portable sunscreen stick with SPF 50+ and a hydrating, invisible finish that can be re-applied anytime, anywhere, over or under makeup.",
        category="sunscreen",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120953637179490304/Screenshot_2023-06-20_at_10.44.11_PM.png?ex=65f13e6d&is=65dec96d&hm=52c72c5a1d4c74a0575a773c1d59b6e1f8ad83e0a3435778ef102bb458476f7a&=&format=webp&quality=lossless&width=1060&height=1078"
    )
    product18= Product(
        name="CAY SKIN Isle Nourishing Body Mist SPF 50 with Sea Moss and Hyaluronic Acid",
        price="26.00",
        description=" A nourishing and weightless allover body mist with broad-spectrum UV protection that hydrates and protects with a skin-like finish.",
        category="sunscreen",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120953637607313409/Screenshot_2023-06-20_at_10.46.40_PM.png?ex=65f13e6d&is=65dec96d&hm=d0aff265aa0b2e1bf89fab378078d48d8a04828076660369303dba9e36d30e80&=&format=webp&quality=lossless&width=1009&height=1078"
    )
    product19= Product(
        name="Summer Fridays ShadeDrops Mineral Milk Sunscreen SPF 30",
        price="36.00",
        description="A lightweight, reef-friendly, SPF 30 mineral sunscreen that helps shield skin from UV rays and leaves skin with a soft, natural-looking finish.",
        category="sunscreen",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120953638785908776/Screenshot_2023-06-20_at_10.44.35_PM.png?ex=65f13e6d&is=65dec96d&hm=cf5f0a9e909de77e870e0c5e5cef627bf8c35b01f3637d67e3f806de8b3ff774&=&format=webp&quality=lossless&width=1064&height=1078"
    )
    product20= Product(
        name="The INKEY List Polyglutamic Acid Dewy Sunscreen SPF 30",
        price="14.99",
        description=" A broad-spectrum SPF 30 sunscreen that provides UVA and UVB protection from the sun’s harmful rays, through a blend of chemical UV filters.",
        category="sunscreen",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120953643118628874/Screenshot_2023-06-20_at_10.45.58_PM.png?ex=65f13e6e&is=65dec96e&hm=4af5f08dad2952cb12aa6769a2eabdfd844bd1a157ab589a2eeb5eaac307cc9b&=&format=webp&quality=lossless&width=972&height=1078"
    )
    product21= Product(
        name="Supergoop! 100% Mineral (Re)setting Powder SPF 35!",
        price="35.00",
        description="A 100 percent mineral, non-nano setting powder to set makeup, mattify shine, and help you easily reapply your SPF throughout the day.",
        category="sunscreen",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120953643429011516/Screenshot_2023-06-20_at_10.45.40_PM.png?ex=65f13e6e&is=65dec96e&hm=93a6359628b2393d0e58adeb88703b354480b4adb6030d67deea3166d6ab0e5b&=&format=webp&quality=lossless&width=972&height=1078"
    )
    product22= Product(
        name="Kosas DreamBeam Silicone-Free Mineral Sunscreen",
        price="40.00",
        description="A clean, silicone-free, comfy mineral sunscreen packed with ceramides and peptides to moisturize, visibly smooth and brighten, and create the dreamiest makeup base.",
        category="sunscreen",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120953645014458460/Screenshot_2023-06-20_at_10.45.08_PM.png?ex=65f13e6f&is=65dec96f&hm=39343ac4649f6491e7c7b06f74c76bcc92a8a21ec882f4298be027a42c9b764d&=&format=webp&quality=lossless&width=961&height=1078"
    )
    product23= Product(
        name="Supergoop! Glow Stick Sunscreen SPF 50",
        price="26.00",
        description=" A hydrating, portable sunscreen stick that leaves skin with a dewy, glowing finish & doubles as a face & body highlighter..",
        category="sunscreen",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120953644716658789/Screenshot_2023-06-20_at_10.45.22_PM.png?ex=65f13e6f&is=65dec96f&hm=fd07d9660f93b94db535ff795e174ad5308a227751067d7e2fb93ad34c71d8f4&=&format=webp&quality=lossless&width=1009&height=1078"
    )
    product24=Product(
        name="Benefits Benetint",
        price="21.00",
        description=" A collection of fan-fave lip and cheek tints that come in a range of shades—all long-wearing, non-drying, and transfer-proof",
        category="makeup",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120961100234641478/Screenshot_2023-06-20_at_11.14.50_PM.png?ex=65f14560&is=65ded060&hm=7e0f28d85d31af7adc67b53e67f7d5ea3da4e45b833897d8c17f61b7b3b6af22&=&format=webp&quality=lossless&width=979&height=1078"
    )
    product25 = Product(
        name="COLOR WOW Mini Dream Coat Supernatural Spray Anti-Frizz Treatment",
        price="12.00",
        description="  A spray that keeps straight, wavy, or curly, frizz-prone hair silky, glassy, and frizz-free for days.​",
        category="hair",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120961448445743176/Screenshot_2023-06-20_at_11.16.17_PM.png?ex=65f145b3&is=65ded0b3&hm=566097775814af32b9808b88dbaafa6949a6df925f20eea6e22416735e5a9a93&=&format=webp&quality=lossless&width=992&height=1078"
    )
    product26 = Product(
        name="dGisou Mini Honey Infused Hair Oil",
        price="25.00",
        description="  A luxurious hair oil enriched with the moisture binding Gisou Mirsalehi Honey to hydrate, boost shine, and smooth frizz and flyaways.",
        category="hair",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120961448177324042/Screenshot_2023-06-20_at_11.16.26_PM.png?ex=65f145b3&is=65ded0b3&hm=026e1b35654e2707d860abad4d5b63c34cdc0e625eb4fb28fbe1833359c8f451&=&format=webp&quality=lossless&width=968&height=1078"
    )
    product27 = Product(
        name="CMaison Margiela REPLICA Beach Walk",
        price="160.00",
        description=" A fresh scent inspired by salty air and rays of sun where bergamot and pink pepper fuse with lemon atop a floral perfume of heliotrope, coconut milk, and musk.",
        category="fragrance",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120963639097180240/Screenshot_2023-06-20_at_11.28.06_PM.png?ex=65f147be&is=65ded2be&hm=426b7408140783971763c98dabb97746a0f6e5155cfd0ca3080906838150fe62&=&format=webp&quality=lossless&width=1009&height=1078"
    )
    product28 = Product(
        name="CHANEL CHANCE EAU TENDRE Eau de Toilette",
        price="136.00",
        description="The delicate and unexpected fruity-floral fragrance for women creates a soft whirlwind of happiness, fantasy, and radiance.",
        category="fragrance",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120963639369805874/Screenshot_2023-06-20_at_11.27.33_PM.png?ex=65f147be&is=65ded2be&hm=9d85c49e9ebd03a2a9269fdcb641d73e6465ef679abedf658cd44cc921355df0&=&format=webp&quality=lossless&width=1086&height=1078"
    )
    product29 = Product(
        name="Paula's Choice Mini Skin Perfecting 2% BHA Liquid Exfoliant",
        price="13.00",
        description=" A daily and travel-friendly leave-on exfoliant with two percent salicylic acid to sweep away dead skin cells, unclog pores, and visibly smooth wrinkles—practically overnight.",
        category="skincare",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120966377084289125/Screenshot_2023-06-20_at_11.37.48_PM.png?ex=65f14a4a&is=65ded54a&hm=1287ff9656efacebdbe2ebc2072e1103790082bed511ebc9c32e1cf356f1f5b4&=&format=webp&quality=lossless&width=1029&height=1078"
    )
    product30 = Product(
        name="Tatcha The Dewy Skin Cream Plumping & Hydrating Moisturizer",
        price="70.00",
        description="A rich cream that feeds skin with plumping hydration and antioxidant-packed Japanese purple rice for a dewy, healthy glow.",
        category="body",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120966377356939314/Screenshot_2023-06-20_at_11.38.03_PM.png?ex=65f14a4a&is=65ded54a&hm=56ae55a8fc071e447d84429144a25049ba368d5bd39b4cf1fa50cdeef5651531&=&format=webp&quality=lossless&width=1060&height=1078"
    )
    product31 = Product(
        name="Donna Karan Cashmere Mist Deodorant",
        price="32.00",
        description="An effective deodorant and antiperspirant infused with the soft Cashmere Mist scent.",
        category="body",
        image="https://media.discordapp.net/attachments/1062942242450460744/1120968499997724742/Screenshot_2023-06-20_at_11.47.22_PM.png?ex=65f14c44&is=65ded744&hm=137d27ad973a561b916329262ee22dfc0bd9dc00b776fa816fdb40aae87edd1d&=&format=webp&quality=lossless&width=996&height=1078"
    )
    product32=Product(
        name="Benefit Cosmetics: Cookie and Tickle Powder Highlighterst",
        price="35.00",
        description=" A silky-soft, superfine powder highlighter.",
        category="makeup",
        image="https://media.discordapp.net/attachments/1132781444004065321/1132784279533916200/Screenshot_2023-07-23_at_2.08.31_PM.png?ex=65ee2412&is=65dbaf12&hm=1faff62cfd552f70e031b4b722a8c305715bdef7e0d44678df6b5757921b576d&=&format=webp&quality=lossless&width=950&height=1078"
    )
    product33=Product(
        name="Dior Backstage Concealer",
        price="32.00",
        description="A caffeine-infused, radiant concealer that delivers waterproof and crease-proof full coverage with an innovative makeup brush applicator for precision.",
        category="makeup",
        image="https://media.discordapp.net/attachments/1132781444004065321/1132784279072551003/Screenshot_2023-07-23_at_2.13.22_PM.png?ex=65ee2412&is=65dbaf12&hm=bbb3f291dba97c68636a696a07f483a7102e47c84f33bc06e2858783a3ee3c89&=&format=webp&quality=lossless&width=950&height=1078"
    )
    product34=Product(
        name="Milk Makeup Mini Hydro Grip Hydrating Makeup Primer",
        price="20.00",
        description="A clean, silicone-free dewy makeup primer with hyaluronic acid that grips makeup for up to 12 hours and hydrates skin to prevent meltdown and caking.",
        category="makeup",
        image="https://media.discordapp.net/attachments/1132781444004065321/1132784279307440278/Screenshot_2023-07-23_at_2.15.25_PM.png?ex=65ee2412&is=65dbaf12&hm=88e49e253e17dff01b0e916966d046702ce1c5eac026b8f9a928f327fe42476e&=&format=webp&quality=lossless&width=950&height=1078"
    )
    product35=Product(
        name="tarte Maracuja Juicy Lip Balm",
        price="24.00",
        description="Tarte's™ Maracuja Juicy Lip Balm is an all-in-one vegan balm, gloss, color & treatment. Juicy lips are in!",
        category="makeup",
        image="https://cdn.discordapp.com/attachments/1132781444004065321/1132784278820884520/Screenshot_2023-07-23_at_2.16.57_PM.png"
    )
    product36 = Product(
        name="Glossier You Eau de Parfum",
        price="68.00",
        description="This is the ultimate personal fragrance. Pink pepper—the bright, sparkling, spicy top note.",
        category="fragrance",
        image="https://cdn.discordapp.com/attachments/1132781444004065321/1132788527168487525/Screenshot_2023-07-23_at_2.25.31_PM.png",
    )
    product37 = Product(
        name="Marc Jacobs Perfect Eau de Parfum",
        price="149.00",
        description=" Modern, bright, and feminine, Perfect is an unconventional yet harmonious clash of fresh florals and calm, smoothing notes.",
        category="fragrance",
        image="https://cdn.discordapp.com/attachments/1132781444004065321/1132788527495647323/Screenshot_2023-07-23_at_2.28.53_PM.png",
    )
    product38 = Product(
        name="Jo Malone Sakura Cherry Blossom",
        price="82.00",
        description="With violet leaves and a hint of lemon, it unfolds like a bouquet of freshly cut garden roses.",
        category="fragrance",
        image="https://cdn.discordapp.com/attachments/1132781444004065321/1132788527894102108/Screenshot_2023-07-23_at_2.30.46_PM.png",
    )
    product39 = Product(
        name="Gucci Flora Gorgeous Jasmine Eau de Parfum",
        price="155.00",
        description="Enter a new dimension of unbound freedom with Gucci Flora Gorgeous Jasmine Eau de Parfum.",
        category="fragrance",
        image="https://cdn.discordapp.com/attachments/1132781444004065321/1132788528170942566/Screenshot_2023-07-23_at_2.33.57_PM.png",
    )
    product40 = Product(
        name="K18 Biomimetic Hairscience Mini Molecular Repair Hair Oil",
        price="27.00",
        description="A biotech-engineered, weightless oil that works on all hair types to strengthen, repair damage, reduce frizz at two levels of the hair fiber, and improve shine.",
        category="hair",
        image="https://cdn.discordapp.com/attachments/1132781444004065321/1132791405186658374/Screenshot_2023-07-23_at_2.41.01_PM.png",
    )
    product41 = Product(
        name="Kérastase Mini Elixir Ultime Hydrating Hair Oil Serum",
        price="26.00",
        description="A blend of four precious hair oils that increases hydration, strength, and shine while reducing frizz for a lightweight finish and versatile styling benefits.",
        category="hair",
        image="https://cdn.discordapp.com/attachments/1132781444004065321/1132791404293271583/Screenshot_2023-07-23_at_2.42.31_PM.png",
    )
    product42 = Product(
        name="OUAI Medium Hair Shampoo",
        price="32.00",
        description="A color-safe shampoo that nourishes, strengthens, and adds shine.",
        category="hair",
        image="https://cdn.discordapp.com/attachments/1132781444004065321/1132791404586864770/Screenshot_2023-07-23_at_2.44.08_PM.png",
    )
    product43 = Product(
        name="ALTERNA Haircare CAVIAR Anti-Aging® Restructuring Bond Repair Conditioner",
        price="56.00",
        description="A conditioner that protects and repairs damaged strands, mends split ends, reduces frizz, and makes hair smoother, softer, and shinier.",
        category="hair",
        image="https://cdn.discordapp.com/attachments/1132781444004065321/1132791404851122186/Screenshot_2023-07-23_at_2.45.52_PM.png",
    )
    product44 = Product(
        name="The Ordinary Niacinamide 10% + Zinc 1% Oil Control Serum",
        price="6.00",
        description="A high-strength vitamin-and-mineral blemish formula with 10 percent pure niacinamide and one percent zinc PCA.",
        category="skincare",
        image="https://cdn.discordapp.com/attachments/1132781444004065321/1132794463232737295/Screenshot_2023-07-23_at_2.52.46_PM.png",
    )
    product45 = Product(
        name="Youth To The People Superfood Antioxidant Refillable Cleanser",
        price="39.00",
        description="An award-winning face wash with superfood extracts to remove makeup, support skin's pH balance, and clear buildup in pores that can lead to blemishes.",
        category="skincare",
        image="https://cdn.discordapp.com/attachments/1132781444004065321/1132794461655662652/Screenshot_2023-07-23_at_2.54.07_PM.png",
    )
    product46 = Product(
        name="Tower 28 Beauty SOS Daily Rescue Facial Spray",
        price="28.00",
        description=" An award-winning daily facial spray that soothes + purifies stressed-out skin helping to calm visible irritation and redness.",
        category="skincare",
        image="https://cdn.discordapp.com/attachments/1132781444004065321/1132794461915729950/Screenshot_2023-07-23_at_2.55.03_PM.png",
    )
    product47 = Product(
        name="innisfree Dewy Glow Moisturizer with Cherry Blossom & Niacinamide",
        price="26.00",
        description="A clear water-jelly cream, powered by cherry blossom and niacinamide, that delivers a burst of hydration for visibly brighter, glowing, and dewy skin.",
        category="skincare",
        image="https://cdn.discordapp.com/attachments/1132781444004065321/1132794462175772673/Screenshot_2023-07-23_at_2.56.58_PM.png",
    )
    product48 = Product(
        name="fresh Kombucha Antioxidant Facial Treatment Essence",
        price="82.00",
        description="An antioxidant prep step essence that penetrates skin’s layers to boost your routine’s efficacy, hydrate, and deliver healthy luminosity.",
        category="skincare",
        image="https://cdn.discordapp.com/attachments/1132781444004065321/1132794462750396456/Screenshot_2023-07-23_at_2.58.06_PM.png",
    )
    product49 = Product(
        name="Skinfix KP+ Psoriasis Smoothing Treatment Body Lotion",
        price="50.00",
        description=" A targeted body cream clinically shown to visibly smooth KP bumps while reducing the look of flaking, scaling, and redness to improve the look of psoriasis-prone skin.",
        category="body",
        image="https://cdn.discordapp.com/attachments/1132781444004065321/1132796912467181598/Screenshot_2023-07-23_at_3.02.26_PM.png",
    )
    product50 = Product(
        name="By Rosie Jane Leila Lou Everyday Body Wash",
        price="25.00",
        description="A hydrating, antioxidant-packed body wash to gently cleanse without stripping skin’s natural oils.",
        category="body",
        image="https://cdn.discordapp.com/attachments/1132781444004065321/1132796913264111636/Screenshot_2023-07-23_at_3.05.23_PM.png",
    )
    product51 = Product(
        name="Moroccanoil Moroccanoil Body™ Soap",
        price="14.00",
        description="This body bar hydrates and cleanses skin.",
        category="body",
        image="https://cdn.discordapp.com/attachments/1132781444004065321/1132796913666752602/Screenshot_2023-07-23_at_3.06.06_PM.png",
    )
    product52 = Product(
        name="belif Aqua Bomb Hydrating Body Moisturizer with Niacinamide and Hyaluronic Acid",
        price="30.00",
        description=" A fast-absorbing, lightweight body-moisturizing gel to intensely hydrate your skin—without leaving a sticky or greasy residue behind.",
        category="body",
        image="https://cdn.discordapp.com/attachments/1132781444004065321/1132796913993920563/Screenshot_2023-07-23_at_3.07.46_PM.png",
    )

    product_list = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14,product15, product16, product17, product18, product19, product20, product21, product22, product23, product24, product25, product26, product27, product28, product29, product30, product31, product32, product33, product34,product35, product36, product37, product38, product39, product40, product41, product42, product43, product44, product45, product46, product47, product48, product49, product50, product51, product52]

    for product in product_list:
        db.session.add(product)
    db.session.commit()

def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))

    db.session.commit()
