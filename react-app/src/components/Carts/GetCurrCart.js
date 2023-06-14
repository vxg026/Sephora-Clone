import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { Link } from "react-router-dom"

import { thunkCurrUserCart } from "../../store/cart";

const GetCurrCart = () =>{
    const dispatch = useDispatch()

    const cart_obj = useSelector(state=> state.cart.currentUserCart)
    console.log("cart_objs====>", cart_obj
    )
    const cart_arr = Object.values(cart_obj)
    console.log("cart_arrrr", cart_arr[0])
    const cart_info = cart_arr[0]
    // return cart_obj
    useEffect(()=>{
        dispatch(thunkCurrUserCart())
    }, [dispatch])

    return(
        <>
        in cart!
        {cart_info?.total_price}
        </>
    )
}
export default GetCurrCart;
