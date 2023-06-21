import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import {thunkBody } from "../../store/product";
import AddToCart from "./AddToCart";
import {Link} from "react-router-dom"
import "./Sunscreen.css"
import "./GetAllProducts.css"
const Body =()=>{
    const dispatch=useDispatch()
    const allProducts = useSelector(state=>state.products.allProducts)

    useEffect(()=>{
        dispatch(thunkBody())
    }, [dispatch])
    if(!allProducts) return "..."
    return(
        <>
        <div className="all-obj-contianer">
        {Object.values(allProducts).map(product=>{
            return(
                <div className="div-products-all">
                <div>
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
                </div>
                </div>
            )
        })}
                </div>
        </>
    )
}
export default Body
