import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { Link } from "react-router-dom"
import AddToCart from "./AddToCart";
import { thunkAllProducts } from "../../store/product";
import thunk from "redux-thunk";
import "./GetAllProducts.css"
// import { thunkLikesProduct } from "../../store/product";
import {thunkLikesProduct} from "../../store/session"
import LikeAProduct from "./LikeAProduct";

const GetAllProducts = () =>{
    const dispatch = useDispatch()
    const allProducts = useSelector(state=>state.products.allProducts)
    console.log("all rpoucts=====>", allProducts)
    const currUser = useSelector(state=>state.session.user)
    // const allProductsArr=Object.values(allProducts)
    // console.log("alll products!!", allProductsArr[0])

    useEffect(()=>{
        dispatch(thunkAllProducts())
    }, [dispatch])
    if (!allProducts)return "..."


    // const handleLike =  () =>{
    //      dispatch(thunkLikesProduct(product))
    // }
    return(
        <>

        <div className="all-obj-contianer">
        {Object.values(allProducts).map(product=>{
            return(
                <div className="div-products-all">
                    <div>
                          {/* { currUser && <div className="hearts-container">

                            <LikeAProduct singleProduct={product}/>
                            </div>} */}
                        <Link to={`/products/${product.id}`}>

                           <img className="img-all" src={product.image}/>
</Link>
</div>
                    <div className="product-detail-all">

                    <h3>{product.name}</h3>
                    <h4>{product.price}</h4>
                    {/* <h4>{product.description}</h4> */}
                    {console.log("product before passing it", product)}

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
export default GetAllProducts
