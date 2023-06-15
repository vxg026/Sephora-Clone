import CartForm from "../Products/CartForm";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import GetCurrProducts from '../Products/GetCurrProducts'
import { thunkCurrProducts, thunkCurrUserCart } from "../../store/product";
import {thunkOneProduct} from '../../store/product'
//make this route /products/:productId/edit
const EditQuantity = ({product_curr}) => {
    const dispatch = useDispatch()
    // const {productId} = useParams()
    console.log("This is product id======>", product_curr)
    // const product = useSelector(state=>state.products.allProducts[product_curr.id])
    // console.log("this is one product inside eidit ", product)
    // useEffect(()=>{
    //     console.log("this is useeffect in edit.........")
    //     dispatch(thunkOneProduct(product_curr))
    // }, [dispatch])
    // if (!product){
    //     return null
    // }
    if(!product_curr){
        return null
    }
    return(
        <>
        Inside the edit compoenent
        <CartForm
        product = {product_curr}
        formType = "Edit Quantity"
        />
        </>
    )
}
export default EditQuantity
