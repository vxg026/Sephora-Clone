import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { thunkLikedProducts } from "../../store/product";

const GetCurrLikes = () =>{
    const dispatch = useDispatch()
    const products = useSelector(state=>state.products.allProducts)
    const sessionUser = useSelector(state => state.session.user);

    console.log("hopeuflly liked proucts!!!!!!!", products)
    useEffect(()=>{
        dispatch(thunkLikedProducts())
    }, [dispatch])


    return(
        <>
        Loves:
        {sessionUser && Object.values(products).map(product=>{
            return(
                <div>{product.name}</div>
            )
        })}

        </>
    )
}
export default GetCurrLikes;
