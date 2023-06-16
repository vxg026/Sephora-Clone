import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { thunkAddProduct } from "../../store/product";
import { useHistory } from "react-router-dom";
import thunk from "redux-thunk";
//post route is /api/products/:productId/cart
const AddToCart = ({product})=>{
    const dispatch = useDispatch()
    const history = useHistory()

    console.log("this is product", product)
    // const product = useSelector
    const handleClick=()=>{
        dispatch(thunkAddProduct(product))
    }
    return(
        <form>
            <button type="button" onClick={handleClick}>
                Att to Cart!
            </button>
        </form>
    )
}
export default AddToCart
