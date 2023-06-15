import CartForm from "../Products/CartForm";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import GetCurrProducts from '../Products/GetCurrProducts'
import { thunkCurrProducts, thunkCurrUserCart } from "../../store/product";
import {thunkOneProduct} from '../../store/product'
//make this route /products/:productId/edit
const EditQuantity = () => {
    const dispatch = useDispatch()
    const {productId} = useParams()
    console.log("This is product id", productId)
    const product = useSelector(state=>state.products.allProducts[productId])
    console.log("this is one product inside eidit com", product)
    // const allProducts = useSelector(state=>state.products.allProducts)
    // console.log("this is prdocut in edit componenet===> ", allProducts)
    // const arr=Object.values(allProducts).map(product=>{
    //     if(product.product.id==productId){
    //         return product
    //     }
    // })
    // console.log("arr=========>",arr)
    // useEffect(()=>{
    //     dispatch(thunkCurrProducts(productId))
    // }, [dispatch, productId])
    // if(!product) return "no product"
    // console.log("arr=========>",arr)
    useEffect(()=>{
        dispatch(thunkOneProduct(productId))
    }, [dispatch, productId])
    return(
        <>
        Inside the edit compoenent
        <CartForm
        product = {product}
        formType = "Edit Quantity"
        />
        </>
    )
}
export default EditQuantity
