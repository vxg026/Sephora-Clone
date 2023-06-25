import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { thunkCurrProducts, thunkRemoveProduct } from "../../store/product";
import CartForm from "../Products/CartForm";
import EditQuantity from "./EditQuantity";
import GetCurrCart from "../Carts/GetCurrCart";
import RemoveProduct from "./RemoveProduct";
import "./GetCurrProducts.css"
import { useHistory } from "react-router-dom";
import { useState } from "react";
const GetCurrProducts=()=>{
    const history=useHistory()
    const dispatch = useDispatch()
    const products = useSelector(state=>state.products.currProducts)
    const currUser = useSelector(state=>state.session.user)
    useEffect(()=>{
        dispatch(thunkCurrProducts())
    }, [dispatch])

    const [errors, setErrors] = useState({})
    let error_obj = {}
    // console.log("all products", products)
    //    console.log("this is array", productArr)
    if(!products){
        return
    }
    // console.log("this is all product-------------------->", products)

  const productArr = Object.values(products)


  let totalSum = 0;

 for (let i = 0; i < productArr.length; i++) {
    const price = parseInt(productArr[i].product?.price);
    const quantity = parseInt(productArr[i]?.quantity);
    totalSum += price * quantity;
  }

const handleCheckout=async(e)=>{
  e.preventDefault()
  if(productArr.length>0){
     for(let i =0; i< productArr.length; i++){
     await dispatch(thunkRemoveProduct(productArr[i]?.product.id))
      console.log("..............product i ", productArr[i].product)
    }
    dispatch(thunkCurrProducts())
    history.push('/products/shipped')
  }
else{
  error_obj.checkout = "Cart is empty"
  setErrors(error_obj)
}
}

//    console.log(",....", productArr)
    return (
      <>
      {!currUser ?
      <h2 className="login-to-edit-view">Please log in to view/edit cart</h2>:
        <div className="cart">

        <div className="basket-container">
          <div className="basket-container-div">
        <h2>My Basket</h2>
          <div className="basket-1">
        {productArr.map((product) => (
            <div className="basket-product">
              <div className="basket-img-container"><img className="basket-img" src={product.product.image}/></div>
              <div>
                {/* {const [id, name, price, description]=product.product} */}
                {console.log("this is product.product~~~~~~~~~~~", product)}
       <h2 key={product.product.id}>{product.product.name}</h2>
       {/* {console.log("porduct.product`````````", product.quantity)} */}
          <h3>{product.product.price}</h3>
          <h3>{product.product.description}</h3>
          {/* <h3>{product.quantity}</h3> */}
          <div className="btns-basket">
            <div>
            <EditQuantity
            product_curr={product.product}
            quantity={product.quantity}
            /></div>
            <div className="remove-item-cart">
            <RemoveProduct
            product_curr={product.product}
            /></div>
            </div>
            </div>
            </div>
        ))}
        </div></div>
          <div className="total-sum"><div className="div-sum"><h4>Merchendise sum total: </h4>${totalSum.toFixed(2)}</div>
          <div><h5 className="limit-max">limit 10 per item*</h5></div>
        <div className="tota-checkout-btn">
 <button className="check-out-btn" onClick={handleCheckout}>Checkout Items</button>
 <p className="errors">{errors.checkout}</p>
 </div>
        </div>


        </div>
        {/* <GetCurrCart/> */}
      </div>

      }

      </>
    )
}
export default GetCurrProducts
