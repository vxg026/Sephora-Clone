import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { thunkCurrReviews } from "../../store/review";
import EditReview from "./EditForm";
import OpenModalButton from "../OpenModalButton";
import DeleteReview from "./DeleteReview";
import {thunkAllProducts} from "../../store/product"
import {Link} from 'react-router-dom'
import "./GetCurrReviews.css"

const GetCurrReviews = () =>{
    const dispatch = useDispatch()

    const reviews = useSelector(state=>state.reviews.allReviews)
    const currUser = useSelector(state=>state.session.user)
    const products = useSelector(state=>state.products.allProducts)


    console.log("this is products --------->", products)

    useEffect(()=>{
        dispatch(thunkAllProducts())
    }, [dispatch])

    useEffect(()=>{
        dispatch(thunkCurrReviews())
    }, [dispatch])

if(!reviews) return ".."
// if(!currUser) return "Please log in to view your reviews"
    return(
        <>
        {!currUser && <h2 className="login-to-edit-view">Please log in to view your reviews</h2>}

<div className="mng-reviews">
<h2>Manage Reviews</h2>
{Object.values(reviews).map(review=>{
    return (
        <div className="mng-review">
            <div>
  
            {products && Object.values(products).filter(product=> product.id===review.product_id).map(results=>{
                return(
                    <div>
                        <Link to={`/products/${results.id}`}>
  <div className="img-div-review">
                        <img src={results.image}/>
                            </div>
                        {/* {results.name} */}
                        </Link>

                        </div>
                )
            })
}</div>
<div className="rating-review-txt-img">
    <div>
  <div className="rating-p-tag div">
            {review?.created_at}
            </div>
            <p className="rating-p-tag">Rating: {(review?.star_rating)}<i className="fas fa-star"/></p>
            </div>

            <div className="mng-review_text">
            {review?.review_text}
            </div>
            <div className="mng-all-images">
                {review?.img1 &&
            <div className="images-container-mng-review"><img className="images-mng-reviews" src={review?.img1} onError={e=>{e.currentTarget.src="https://cdn.discordapp.com/attachments/1062942242450460744/1121263492327030874/Image_6-21-23_at_7.11_PM.jpeg"}}/></div>
                }
                {review?.img2 &&
            <div className="images-container-mng-review"><img className="images-mng-reviews"  src={review?.img2}onError={e=>{e.currentTarget.src="https://cdn.discordapp.com/attachments/1062942242450460744/1121263492327030874/Image_6-21-23_at_7.11_PM.jpeg"}}/></div>
                }
                {
                    review?.img3 &&
            <div className="images-container-mng-review"><img className="images-mng-reviews"  src={review?.img3}onError={e=>{e.currentTarget.src="https://cdn.discordapp.com/attachments/1062942242450460744/1121263492327030874/Image_6-21-23_at_7.11_PM.jpeg"}}/></div>
                }
                {review?.img4 &&
            <div className="images-container-mng-review"><img className="images-mng-reviews"  src={review?.img4}onError={e=>{e.currentTarget.src="https://cdn.discordapp.com/attachments/1062942242450460744/1121263492327030874/Image_6-21-23_at_7.11_PM.jpeg"}}/></div>
                }
            </div>
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
