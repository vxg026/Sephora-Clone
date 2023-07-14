
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { thunkLikesProduct } from "../../store/product";
import {thunkLikesProduct} from "../../store/session"
import { thunkLikedProducts, thunkOneProduct } from "../../store/product";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const LikeAProduct = ({singleProduct}) =>{
    const dispatch = useDispatch()
    const history = useHistory()
    const products = useSelector(state=>state.products.allProducts)


    const currUser = useSelector(state => state.session.user)

    const liked = currUser.likes
    const likedArr = Object.values(liked)
    // useEffect(() => {

    //      dispatch(thunkOneProduct(singleProduct.id))

        //  dispatch(thunkLikedProducts())

    // }, [ dispatch])

    const handleLike = async () =>{

    await dispatch(thunkLikesProduct(singleProduct))
    await dispatch(thunkOneProduct(singleProduct.id))
    // .then(history.push(`/products/${singleProduct.id}`))

}
let heart = []
const className=likedArr.find(product => product.id === singleProduct.id) ? heart.push(<div style={{color: "red"}}className='fas fa-heart' onClick={()=>handleLike()}></div>): heart.push(<div style={{color: "lightgray"}}className='far fa-heart' onClick={()=>handleLike()}></div>)






    return(
        <>
        {heart}
        </>
    )
}
export default LikeAProduct;
