import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { Link } from "react-router-dom"
import GetCurrProducts from '../Products/GetCurrProducts'
import { thunkCurrUserCart } from "../../store/cart";
import { useState } from "react";

const GetCurrCart = () =>{
    const dispatch = useDispatch()

    const cart_obj = useSelector(state=> state.cart.currentUserCart)

    useEffect(()=>{
        dispatch(thunkCurrUserCart())
    }, [dispatch])


    if (!cart_obj) return "..."
    return(
        <>
        in cart!
        <GetCurrProducts/>

        {Object.values(cart_obj).map(item=>{
            // console.log("....", item)
            return(
                <div>

                </div>
            )
        })}

        </>
    )
}
export default GetCurrCart;
