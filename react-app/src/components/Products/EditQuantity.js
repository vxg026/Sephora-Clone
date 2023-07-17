import CartForm from "../Products/CartForm";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import GetCurrProducts from '../Products/GetCurrProducts'
import { thunkCurrProducts, thunkCurrUserCart } from "../../store/product";
import {thunkOneProduct} from '../../store/product'
//make this route /products/:productId/edit
const EditQuantity = ({product_curr, quantity}) => {
    const dispatch = useDispatch()



    if(!product_curr){
        return null
    }
    return(
        <>
   
        <CartForm
        product = {product_curr}
        formType = "Edit Quantity"
        quantitys={quantity}
        />
        </>
    )
}
export default EditQuantity
