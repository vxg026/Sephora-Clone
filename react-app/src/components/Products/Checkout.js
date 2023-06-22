import { useDispatch } from "react-redux"
import "./GetCurrProducts.css"

const Checkedout = ()=>{
    const dispach=useDispatch()

    return(
        <>
        <h2 className="login-to-edit-view">Thank you for your order! You should be receiving an email soon.</h2>
        </>
    )
}
export default Checkedout
