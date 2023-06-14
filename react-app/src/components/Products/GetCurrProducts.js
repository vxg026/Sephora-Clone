import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { thunkCurrProducts } from "../../store/product";

const GetCurrProducts=()=>{
    const dispatch = useDispatch()
    const allProducts = useSelector(state=>state.products.allProducts)
    console.log(allProducts)
    useEffect(()=>{
        dispatch(thunkCurrProducts())
    }, [dispatch])
   const productArr = Object.values(allProducts)
//    console.log(",....", productArr)
    return (
        <>
        Curr user products!
        {productArr.map((product) => (
            <div>
       <h2 key={product.product.id}>{product.product.name}</h2>
          <h3>{product.product.price}</h3>
          <h3>{product.product.description}</h3>
          <h3>{product.quantity}</h3>
            </div>

        ))}
      </>
    )
}
export default GetCurrProducts
