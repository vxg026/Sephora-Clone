import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import {thunkBody } from "../../store/product";
import AddToCart from "./AddToCart";
import {Link} from "react-router-dom"
import "./Sunscreen.css"
import "./GetAllProducts.css"
import LikeAProduct from "./LikeAProduct";
import OpenModalButton from "../OpenModalButton";
import SignupFormModal from "../SignupFormModal";
import LoginFormModal from "../LoginFormModal";

const Body =()=>{
    const dispatch=useDispatch()
    const allProducts = useSelector(state=>state.products.allProducts)
    const currUser = useSelector(state=>state.session.user)

    useEffect(()=>{
        dispatch(thunkBody())
    }, [dispatch])
    if(!allProducts) return "..."
    return(
        <>
        <div className="all-obj-contianer">
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
                    <div key={product.id} >{product.name}</div>
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
        </>
    )
}
export default Body
