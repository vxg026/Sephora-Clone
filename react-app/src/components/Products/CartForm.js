import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory} from 'react-router-dom';
import { thunkCurrProducts } from "../../store/product";
import { thunkEditProduct } from "../../store/product";
const CartForm = ({product, formType})=>{
    const dispatch = useDispatch()
    const history = useHistory()
    console.log("THISISI S product inside cart from!!!!!!========>", product)
    console.log("inside cart form id==>", product?.id)
    const [quantity, setQuantity] = useState(String(product?.quantity) || "")

    const [validationErrors, setValidationErrors] = useState("")


    const handleSubmit = async (e)=>{
        "in handle submit?"
        e.preventDefault()
            // product = {
            //     ...product
            // }
            const updatedProduct = {
                ...product,
                quantity: Number(quantity)
              };
            console.log(updatedProduct?.id, "aggain-------")
            console.log("this is quantity", quantity)
            if(formType =="Edit Quantity"){
                console.log("im product inside before dispatch!!!===>", updatedProduct?.id)
                console.log("im quantity inside the if statement before dispatch===>", quantity)
                dispatch(thunkEditProduct(updatedProduct?.id, updatedProduct?.quantity))
                dispatch(thunkCurrProducts())
                // history.push(`/products/curr`)
            }

    }
    // useEffect(()=>{
    //     dispatch()
    // })
    return(
        <form onSubmit={handleSubmit}>
            <div>
            <select  onChange={(e) => setQuantity(e.target.value)}>
                <option
                value="1"
                >1</option>
                    <option
                value="2"
                >2</option>
                    <option
                value="3"
                >3</option>
                    <option
                value="4"
                >4</option>
                    <option
                value="5"
                >5</option>
                    <option
                value="6"
                >6</option>
                    <option
                value="7"
                >7</option>
                    <option
                value="8"
                >8</option>
                    <option
                value="9"
                >9</option>
                    <option
                value="10"
                >10</option>
            </select>
            </div>
            <button type="submit">submit</button>

            {/* <button type="submit" style={{ display: "none" }}></button> */}
        </form>
    )
}
export default CartForm
//
