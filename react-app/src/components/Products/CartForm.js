import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory} from 'react-router-dom';
import { thunkCurrProducts } from "../../store/product";
import { thunkEditProduct } from "../../store/product";
const CartForm = ({product, formType})=>{
    const dispatch = useDispatch()
    const history = useHistory()
    console.log("THISISI S product inside cart from!!!!!!========>", product)
    // console.log("inside cart form id==>", product.id)

    // const product = useSelector(state=>state.products.currProducts)

    // const [quantity, setQuantity] = useState("")
    // const [quantity, setQuantity] = useState(String(product.quantity))
    const [quantity, setQuantity] = useState(() => {
        return localStorage.getItem("selectedQuantity") || product.quantity;
      });


    const handleSubmit = async (e)=>{
        // e.preventDefault()


        console.log("in handle submit?")
            // product = {
            //     ...product
            // }
            console.log(quantity, "this is quantity")
            const updatedProduct = {
                ...product,
                quantity: Number(quantity)
              };



            console.log("aggain-------", updatedProduct.id)
            console.log("this is quantity", quantity)

            if(formType =="Edit Quantity"){
                // console.log("im product inside before dispatch!!!===>", updatedProduct.id)
                // console.log("im quantity inside the if statement before dispatch===>", quantity)
                dispatch(thunkEditProduct(updatedProduct.id, updatedProduct.quantity))
                dispatch(thunkCurrProducts())
                // history.push('/products/curr')

            }

    }


    useEffect(() => {
        localStorage.setItem("selectedQuantity", quantity);
      }, [quantity]);

    useEffect(()=>{
        handleSubmit()
    }, [quantity])



    return(
        // <form onSubmit={handleSubmit}>
        <form>
            <div>
            <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
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
            {/* // <button type="submit">submit</button> */}

        </form>
    )
}
export default CartForm
//
