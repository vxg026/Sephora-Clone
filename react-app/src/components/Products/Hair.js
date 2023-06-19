import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import {thunkHair } from "../../store/product";
import AddToCart from "./AddToCart";

const Hair =()=>{
    const dispatch=useDispatch()
    const allProducts = useSelector(state=>state.products.allProducts)

    useEffect(()=>{
        dispatch(thunkHair())
    }, [dispatch])
    if(!allProducts) return "..."
    return(
        <>
        All Hair!
        {Object.values(allProducts).map(product=>{
            return(
                <div>
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                    <div>{product.description}</div>
                    <AddToCart
                    product={product}
                    />
                </div>
            )
        })}
        </>
    )
}
export default Hair
