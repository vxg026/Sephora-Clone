import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { thunkCurrProducts } from "../../store/product";
import CartForm from "../Products/CartForm";
import EditQuantity from "./EditQuantity";
const GetCurrProducts=()=>{
    const dispatch = useDispatch()
    const products = useSelector(state=>state.products.currProducts)
    // console.log("this is all product", products)
    useEffect(()=>{
        dispatch(thunkCurrProducts())
    }, [dispatch])
    // console.log("all products", products)
    //    console.log("this is array", productArr)
    if(!products){
        return
    }
    const productArr = Object.values(products)
//    console.log(",....", productArr)
    return (
        <>
        Curr user products!
        {productArr.map((product) => (
            <div>
                {/* {const [id, name, price, description]=product.product} */}
       <h2 key={product.product.id}>{product.product.name}</h2>
       {console.log("porduct.product", product?.product)}
          <h3>{product.product.price}</h3>
          <h3>{product.product.description}</h3>
          <h3>{product.quantity}</h3>
            <EditQuantity
            product_curr={product?.product}
            />
            </div>
        ))}

      </>
    )
}
export default GetCurrProducts
