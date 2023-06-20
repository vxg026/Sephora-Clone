import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { thunkCurrProducts } from "../../store/product";
import CartForm from "../Products/CartForm";
import EditQuantity from "./EditQuantity";
import GetCurrCart from "../Carts/GetCurrCart";
import RemoveProduct from "./RemoveProduct";
import "./GetCurrProducts.css"
const GetCurrProducts=()=>{
    const dispatch = useDispatch()
    const products = useSelector(state=>state.products.currProducts)
    useEffect(()=>{
        dispatch(thunkCurrProducts())
    }, [dispatch])
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



//    console.log(",....", productArr)
    return (
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
 <div className="total-sum"><div className="div-sum"><h4>Merchendise sum total: </h4>${totalSum}</div></div>
        </div>
        {/* <GetCurrCart/> */}
      </div>
    )
}
export default GetCurrProducts
