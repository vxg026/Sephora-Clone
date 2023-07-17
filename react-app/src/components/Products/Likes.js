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

        </>
    )
}
export default GetCurrLikes;
