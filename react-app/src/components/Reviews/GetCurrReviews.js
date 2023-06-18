import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { thunkCurrReviews } from "../../store/review";
import EditReview from "./EditForm";
import OpenModalButton from "../OpenModalButton";
import DeleteReview from "./DeleteReview";
const GetCurrReviews = () =>{
    const dispatch = useDispatch()

    const reviews = useSelector(state=>state.reviews.allReviews)
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
            <img src={review?.img1}/>
            {review?.img2}
            {review?.img3}
            {review?.img4}
            <OpenModalButton
                buttonText='Edit'
                modalComponent={<EditReview review={review} />}
                />
               <OpenModalButton
                className="one-button"
                buttonText='Delete'
                modalComponent={<DeleteReview review={review}/>}
                />
        </dvi>


    )
})}
        </>
    )
}
export default GetCurrReviews
