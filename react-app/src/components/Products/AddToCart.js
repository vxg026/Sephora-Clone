import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { thunkAddProduct, thunkCurrProducts } from "../../store/product";
import { useHistory } from "react-router-dom";
import thunk from "redux-thunk";
import React from 'react';
import "./AddToCart.css"
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';

//post route is /api/products/:productId/cart
const AddToCart = ({product})=>{
    const dispatch = useDispatch()
    const history = useHistory()
    const currUser = useSelector(state=>state.session.user)

    // const notify = () =>toast("Wow so easy!")

    console.log("this is product", product)

    // const product = useSelector
    const handleClick=async()=>{

        let data = await dispatch(thunkAddProduct(product))
        dispatch(thunkCurrProducts())
        // console.log("this is data....", data)
        // if(data!==undefined){

        //     alert("added to cart")
        // }
        // notify()
    }
    return(
        <form>
            {currUser?
            <button type="button" className="add-to-cart-btn" onClick={handleClick}>
                Add to Basket!
            </button> : <h6>Please SignUp to shop</h6>}
        </form>
    )
}
export default AddToCart
