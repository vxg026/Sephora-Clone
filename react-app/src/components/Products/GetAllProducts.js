import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { Link } from "react-router-dom"
import AddToCart from "./AddToCart";
import { thunkAllProducts } from "../../store/product";
import thunk from "redux-thunk";

const GetAllProducts = () =>{
    const dispatch = useDispatch()
    const allProducts = useSelector(state=>state.products.allProducts)
    console.log("all rpoucts=====>", allProducts)
    // const allProductsArr=Object.values(allProducts)
    // console.log("alll products!!", allProductsArr[0])

    useEffect(()=>{
        dispatch(thunkAllProducts())
    }, [dispatch])
    if (!allProducts)return "..."

    return(
        <>
        All Items!
        {Object.values(allProducts).map(product=>{
            return(
                <div>

                    <h3>{product.name}</h3>
                    <h4>{product.price}</h4>
                    <h4>{product.description}</h4>
                    {console.log("product before passing it", product)}
                    <AddToCart
                    product={product}
                    />
                </div>

            )
        })}
        </>
    )
}
export default GetAllProducts
