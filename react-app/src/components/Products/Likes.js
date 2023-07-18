import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { thunkLikedProducts, thunkOneProduct } from "../../store/product";
import "./GetCurrProducts.css"
import { NavLink } from "react-router-dom";
import AddToCart from "./AddToCart";
import "./Likes.css"
import LikeAProduct from "./LikeAProduct";

const GetCurrLikes = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.allProducts)
    const sessionUser = useSelector(state => state.session.user);

    // console.log("hopeuflly liked proucts!!!!!!!", sessionUser.likes)

    useEffect(() => {
        dispatch(thunkLikedProducts())
        // dispatch(thunkOneProduct())
    }, [dispatch, sessionUser.likes])


    return (
        <>
            <div className="likes-container">
                <div className="div-loves">
                <h2>Loves:</h2>

                </div>
                <div className="basket-1 likes">
                    {sessionUser && Object.values(products).length>0 ? Object.values(products).map(product => {
                        return (
                            <div key={product.id} className="product-container-likes">
                            <div className="basket-product inlikes">
                                    <NavLink to={`/products/${product.id}`}>

                                        <div className="basket-img-container"><img className="basket-img" src={product.image} /></div>
                                    </NavLink>
                                <div className="div-likes-info">
                                     <h3 className="h3-first" key={product.id}>{product.name}</h3>
                                <h3>{product.description}</h3>
                                <h3>{product.price}</h3>
                                <LikeAProduct singleProduct={product}/>
                                <div>

                                    </div>
                                    </div>
                                </div>


                                <div className="add-to-cart-likes">
                                    <AddToCart
                                        product={product}
                                    />

                                </div>

                            </div>
                        )
                    }): <div className="no-likes-container"><div className="no-likes-img-div"><img className="img-no-likes" src="https://cdn.discordapp.com/attachments/1062942242450460744/1130332735035166880/Screenshot_2023-07-16_at_7.57.16_PM.png"/></div><div><h4 className="h4-div-no-likes">You haven’t added any product to your Loves list.</h4><div className="div-p"><p className="p-class">Collect all your favorite and must-try products by <div>clicking on the <i className="far fa-heart"></i> while you shop.</div></p></div></div></div>}
                </div>
            </div>
            <div className="f-feedback">
        <h3 className="f-fbck-txt">Website feedback? Let us know</h3>
      </div>
      <div className="footer">
          <div className="h3-div">
        <a target="_blank" href="https://www.linkedin.com/in/vanessa-gonzalez-82667a1b3/">
             <div className="linkedin-connect"><i class="fab fa-linkedin"></i><h3>Linked In</h3></div>
                  </a>
                  <a target="_blank" href="https://github.com/vxg026">
                    <div className="linkedin-connect">
                               {/* <img className="github"src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"/> */}
                               <i class="fab fa-github"></i> <h3>GitHub</h3>
                    </div>

                  </a>
                  <a target="_blank" href="https://wellfound.com/u/vanessa-gonzalez-41">
                  <div className="linkedin-connect">
                   <i class="fab fa-angellist"></i><h3>WellFound</h3>
                   </div>
                  </a>


          </div>


      </div>
        </>
    )
}
export default GetCurrLikes;
