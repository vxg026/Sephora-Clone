import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { thunkCurrReviews } from "../../store/review";

const GetCurrReviews = () =>{
    const dispatch = useDispatch()

    const reviews = useSelector(state=>state.reviews.currReviews)
    console.log("this is reviews --------->", reviews)

    useEffect(()=>{
        dispatch(thunkCurrReviews())
    }, [dispatch])

if(!reviews) return ".."

    return(
        <>
        hidden


{Object.values(reviews).map(review=>{
    return (
        <dvi>
            {/* {display(review?.star_rating)} */}
            <i className="fas fa-star"/>{(review?.star_rating)}

            {review?.review_text}
            {review?.img1}
            {review?.img2}
            {review?.img3}
            {review?.img4}

        </dvi>


    )
})}
        </>
    )
}
export default GetCurrReviews
