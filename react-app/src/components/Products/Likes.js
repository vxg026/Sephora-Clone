import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { thunkLikedProducts, thunkOneProduct } from "../../store/product";
import "./GetCurrProducts.css"
import { NavLink } from "react-router-dom";
import AddToCart from "./AddToCart";
import "./Likes.css"

const GetCurrLikes = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.allProducts)
    const sessionUser = useSelector(state => state.session.user);

    console.log("hopeuflly liked proucts!!!!!!!", sessionUser.likes)

    useEffect(() => {
        dispatch(thunkLikedProducts())
        dispatch(thunkOneProduct())
    }, [dispatch, sessionUser.likes])


    return (
        <>
            <div className="likes-container">
                <div className="div-loves">
                <h2>Loves:</h2>

                </div>
                <div className="basket-1 likes">
                    {sessionUser && Object.values(products).map(product => {
                        return (
                            <div className="product-container-likes">
                            <div className="basket-product inlikes">
                                    <NavLink to={`/products/${product.id}`}>

                                        <div className="basket-img-container"><img className="basket-img" src={product.image} /></div>
                                    </NavLink>
                                </div>
                                <div className="div-likes-info">
                                     <h3 className="h3-first" key={product.id}>{product.name}</h3>
                                <h3>{product.description}</h3>
                                <h3>{product.price}</h3>
                                    </div>


                                <div className="add-to-cart-likes">
                                    <AddToCart
                                        product={product}
                                    />
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}
export default GetCurrLikes;
