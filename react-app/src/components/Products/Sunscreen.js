import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import {thunkSunScreen } from "../../store/product";
import AddToCart from "./AddToCart";

const Suncscreen =()=>{
    const dispatch=useDispatch()
    const allProducts = useSelector(state=>state.products.allProducts)

    useEffect(()=>{
        dispatch(thunkSunScreen())
    }, [dispatch])
    if(!allProducts) return "..."
    return(
        <>
        All Sunscreen!
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
export default Suncscreen
