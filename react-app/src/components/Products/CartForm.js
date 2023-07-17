import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory} from 'react-router-dom';
import { thunkCurrProducts } from "../../store/product";
import { thunkEditProduct } from "../../store/product";
const CartForm = ({product, formType, quantitys})=>{
    const dispatch = useDispatch()
    const history = useHistory()

    const [quantity, setQuantity] = useState(quantitys)

    const handleSubmit = async (e)=>{
        // e.preventDefault()

            // console.log(quantity, "this is quantity")
            const updatedProduct = {
                ...product,
                quantity: Number(quantity)
              };


            if(formType =="Edit Quantity"){

                dispatch(thunkEditProduct(updatedProduct.id, updatedProduct.quantity))
                dispatch(thunkCurrProducts())


            }else {
                setQuantity("1")
            }

    }


    useEffect(()=>{
        handleSubmit()
    }, [quantity])



    return(

        <form>
            <div>
            <select max={10} value={quantity} onChange={(e) => setQuantity(e.target.value)}>
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

        </form>
    )
}
export default CartForm
//
