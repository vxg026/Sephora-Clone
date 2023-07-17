import { useDispatch } from "react-redux";
import { thunkCurrProducts, thunkRemoveProduct } from "../../store/product";

const RemoveProduct = ({product_curr})=>{
    // console.log("this is product in remove------>", product_curr)
    const dispatch = useDispatch()
    const handleDelete = async(e)=>{
        e.preventDefault()

        await dispatch(thunkRemoveProduct(product_curr.id))
        await dispatch(thunkCurrProducts())
    }
    return(
        <button onClick={handleDelete}>Remove</button>
    )
}
export default RemoveProduct
