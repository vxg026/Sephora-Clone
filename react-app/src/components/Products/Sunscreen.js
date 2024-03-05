import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import {thunkSunScreen } from "../../store/product";
import AddToCart from "./AddToCart";
import {Link} from "react-router-dom"
import "./Sunscreen.css"
import "./GetAllProducts.css"
import LikeAProduct from "./LikeAProduct";
import OpenModalButton from "../OpenModalButton";
import SignupFormModal from "../SignupFormModal";
import LoginFormModal from "../LoginFormModal";

const Suncscreen =()=>{
    const dispatch=useDispatch()
    const allProducts = useSelector(state=>state.products.allProducts)
    const currUser = useSelector(state=>state.session.user)

    useEffect(()=>{
        dispatch(thunkSunScreen())
    }, [dispatch])
    if(!allProducts) return "..."
    return(
        <>
        <div className="sunscrren-whole-page">


        <div className="all-obj-contianer">
        <div className="img-container"><img className="img-suncreend" src="https://media.discordapp.net/attachments/1062942242450460744/1122251136351600750/Screenshot_2023-06-24_at_12.44.30_PM.png?ex=65ecbc51&is=65da4751&hm=9aec1a6cc7303edbace9387ea06af84f66c8a30e0e6a85b97015a539348bf8cd&=&format=webp&quality=lossless&width=1210&height=572"/></div>
        {Object.values(allProducts).map(product=>{
            return(
                <div key={product.id} className="div-products-all">
                <div>
                { currUser && <div className="hearts-container">

<LikeAProduct singleProduct={product}/>
</div>}
                <Link to={`/products/${product.id}`}>
                <img className="img-all" src={product.image}/>
</Link>
</div>
<div className="product-detail-all">
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                    {/* <div>{product.description}</div> */}
                    <AddToCart
                    product={product}
                    />
                    {!currUser &&  <div className="not-logged-in-btn"> <OpenModalButton
                buttonText="Sign In"
                modalComponent={<LoginFormModal/>}
                 /> / <OpenModalButton
                 buttonText="Create Account"
                 modalComponent={<SignupFormModal/>}
                  /></div>}
                </div>
                </div>
            )
        })}
                </div>
                </div>

        </>
    )
}
export default Suncscreen
