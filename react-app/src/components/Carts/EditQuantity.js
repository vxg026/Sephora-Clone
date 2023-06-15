// import CartForm from "./CartForm";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";
// import GetCurrProducts from '../Products/GetCurrProducts'
// import { thunkCurrUserCart } from "../../store/cart";
// //make this route /products/:productId
// const EditQuantity = () => {
//     const dispatch = useDispatch()
//     const {productId} = useParams()
//     console.log("This is product id", productId)
//     const product = useSelector(state=>state.cart.currentUserCart)
//     console.log("this is prdocut===>", product)

//     useEffect(()=>{
//         dispatch(thunkOneProduct(productId))
//     }, [dispatch, productId])
//     return(
//         <>
//         Inside the edit compoenent
//         </>
//     )
// }
// export default EditQuantity
