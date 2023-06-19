import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { thunkCurrProducts } from "../../store/product";
import CartForm from "../Products/CartForm";
import EditQuantity from "./EditQuantity";
import GetCurrCart from "../Carts/GetCurrCart";
import RemoveProduct from "./RemoveProduct";
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
        <>
        Curr user products!
        {productArr.map((product) => (
            <div>
                {/* {const [id, name, price, description]=product.product} */}
                {console.log("this is product.product~~~~~~~~~~~", product)}
       <h2 key={product.product.id}>{product.product.name}</h2>
       {/* {console.log("porduct.product`````````", product.quantity)} */}
          <h3>{product.product.price}</h3>
          <h3>{product.product.description}</h3>
          <h3>{product.quantity}</h3>
            <EditQuantity
            product_curr={product.product}
            quantity={product.quantity}
            />
            <RemoveProduct
            product_curr={product.product}
            />
            </div>

        ))}
 <div>Total Sum: {totalSum}</div>
        {/* <GetCurrCart/> */}
      </>
    )
}
export default GetCurrProducts
