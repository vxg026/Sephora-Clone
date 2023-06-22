import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { thunkCurrReviews } from "../../store/review";
import EditReview from "./EditForm";
import OpenModalButton from "../OpenModalButton";
import DeleteReview from "./DeleteReview";
import "./GetCurrReviews.css"

const GetCurrReviews = () =>{
    const dispatch = useDispatch()

    const reviews = useSelector(state=>state.reviews.allReviews)
    const currUser = useSelector(state=>state.session.user)
    console.log("this is reviews --------->", reviews)

    useEffect(()=>{
        dispatch(thunkCurrReviews())
    }, [dispatch])

if(!reviews) return ".."
// if(!currUser) return "Please log in to view your reviews"
    return(
        <>
        {!currUser && <h2>Please log in to view your reviews</h2>}

<div className="mng-reviews">
{Object.values(reviews).map(review=>{
    return (
        <div className="mng-review">
            {/* {display(review?.star_rating)} */}
            <div>
            <i className="fas fa-star"/>{(review?.star_rating)}
            </div>
            <div>
            {review?.created_at}
            </div>
            <div className="mng-review_text">
            {review?.review_text}
            </div>
            <div className="mng-all-images">
                {review?.img1 &&
            <div className="images-container-mng-review"><img className="images-mng-reviews" src={review?.img1} onError={e=>{e.currentTarget.src="https://cdn.discordapp.com/attachments/1062942242450460744/1121263492327030874/Image_6-21-23_at_7.11_PM.jpeg"}}/></div>
                }
                {review?.img2 &&
            <div className="images-container-mng-review"><img className="images-mng-reviews"  src={review?.img2}/></div>
                }
                {
                    review?.img3 &&
            <div className="images-container-mng-review"><img className="images-mng-reviews"  src={review?.img3}/></div>
                }
                {review?.img4 &&
            <div className="images-container-mng-review"><img className="images-mng-reviews"  src={review?.img4}/></div>
                }
            </div>


            <div className="buttons-div-mgn-rvws">
            <OpenModalButton
                buttonText='Edit'
                modalComponent={<EditReview review={review} />}
                />
               <OpenModalButton
                className="one-button"
                buttonText='Delete'
                modalComponent={<DeleteReview review={review}/>}
                />
            </div>
        </div>


    )
})}</div>
        </>
    )
}
export default GetCurrReviews
