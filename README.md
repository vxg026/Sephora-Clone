# Sephoria
![sephoriagif](https://github.com/vxg026/Sephora-Clone/assets/123227925/9ac8f50e-9eb6-450b-8857-dd389157ee3b)

Sephoria is a Sephora clone. It is an e-commerce site that replicates Sephora's shopping functionality. Users can browse the website's products, but have to sign up/login to shop.

## Technologies
### Backend
 * Flask
 * SQLAlchemy
   
### Frontend:
 * React
 * Redux
 * CSS

## Features
1. User authentication
2. Shop
   * Logged in Users can view cart(READ)
   * Logged in Users can add to cart (CREATE)
   * logged in users can edit cart(EDIT)
   * Logged in users can remove from cart(DELETE)
4. Reviews
   * Logged in users can view and manage their reviews (READ)
   * Logged in users can create reviews (CREATE)
   * Logged in users can edit their reviews made (UPDATE)
   * Logged in users can delete reviews(DELETE)

## Code Snippets

When working on the sephoria clone, looking through the sephora website, what caught my eye was the carousel on the homepage. I knew I also wanted to implement that feature into my website and so I did with a multi-carousel package.

```
//react-app/src/components/Products/HomePage.js

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2,

    }
  };


  return (
      <Carousel
        showDots={true}
        responsive={responsive}
        swipeable={true}
      >
        <div>
          <NavLink className="card-link" to="/products/sunscreen">
            <div className="card1">
              <div>
                <img className="card-img" src="https://media.discordapp.net/attachments/1062942242450460744/1119780586492534894/Screenshot_2023-06-17_at_5.07.36_PM.png?width=1718&height=1133" />
              </div>
              <div className="card-details1">
                <h2 className="info-card1">Sunscreen under $50</h2>
                <h5 className="info-card2">Hydrating formulas that boost glow too</h5>
                <h5 className="info-card3">SHOP NOW</h5>
              </div>
            </div>
          </NavLink>
        </div>....

      </Carousel>
);
}
```



![cartsephoria](https://github.com/vxg026/Sephora-Clone/assets/123227925/a4c6b319-e773-42ec-89ae-0c9edcac3dba)


Along with the splash page, I knew I wanted to replicate the cart format that sephora had. To change the quantity of the item, the user can choose a different quantity from the drop down menu. To ensure that the value of the dropdown menu reflects the quantity the user wanted, I set its value to the quantity, this quantity I passed as a prop from the edit quantity component. In my reducer, in order for page to re-render when the user changed the quantity, I passed both the productId and the quantity. After creating a copy of the state, and spreading in currProducts, keying into the speicific product, with corresponding product id, allowed for the quanitity's value of that product to update.
```
        case EDIT_PRODUCT:{
            const newState = {...state, currProducts:{...state.currProducts}}
            const productId = action.product
            const quantity = action.quantity
            newState.currProducts[`${productId}`].quantity = quantity
            return newState
        }
```


## Futre implementations
 * In the process of implementing AWS
