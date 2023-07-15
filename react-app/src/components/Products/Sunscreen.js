import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import {thunkSunScreen } from "../../store/product";
import AddToCart from "./AddToCart";
import {Link} from "react-router-dom"
import "./Sunscreen.css"
import "./GetAllProducts.css"
import LikeAProduct from "./LikeAProduct";
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
        <div className="img-container"><img className="img-suncreend" src="https://cdn.discordapp.com/attachments/1062942242450460744/1122251136351600750/Screenshot_2023-06-24_at_12.44.30_PM.png"/></div>
        {Object.values(allProducts).map(product=>{
            return(
                <div className="div-products-all">
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
