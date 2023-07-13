import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { thunkOneProduct } from "../../store/product";
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { thunkAllReviews } from "../../store/review";
import OpenModalButton from "../OpenModalButton";
import CreateReview from "../Reviews/CreateReview";
import EditReview from "../Reviews/EditForm"
import DeleteReview from "../Reviews/DeleteReview"
import AddToCart from "./AddToCart";
import "../Reviews/GetCurrReviews.css"
import "./GetOneProduct.css"
import { thunkLikesProduct } from "../../store/product";

const GetOneProduct = () => {
    const dispatch = useDispatch()
    const { productId } = useParams()
    const singleProduct = useSelector(state => state.products.allProducts[productId])

    const allReviews = useSelector(state => state.reviews?.allReviews)
    const allReviewsArr = Object.values(allReviews)

    const currUser = useSelector(state => state.session.user)


    // console.log("===========", currUser.id)

    useEffect(() => {
        dispatch(thunkOneProduct(productId))
        dispatch(thunkAllReviews())
    }, [dispatch, productId])
    const productReviews = allReviewsArr.filter(review => review.product_id === parseInt(productId))
    if (!singleProduct) {
        return "sorry not found:("
    }
    console.log(productReviews, "---------------------------------------)")
    // productReviews.forEach(review=>)

    let leftReview;
    if (currUser) {

        leftReview = productReviews.find(review => review.user_id == parseInt(currUser.id))
    }


    const handleLike =  () =>{
         dispatch(thunkLikesProduct(singleProduct))
    }
    console.log("============================", leftReview)


    return (
        <>
            <div className="one-prod-comp">

                <div className="single-container1">
                    <div className="container1-iamge">
                        <img className="sing-image-div" src={singleProduct.image} />
                    </div>

                    <div className="single-product-details">
                        {/* <div className="single-product-id">
                {singleProduct.id}
                </div> */}
                        <div className="single-product-name">
                            {singleProduct.name}
                        </div>
                        <div className="single-product-description">
                            {singleProduct.description}
                        </div>
                        <div className="single-product-star-rating">
                            <div>
                                <i className="fas fa-star"></i>
                            </div>

                            <div>
                                <p className="highly-rate-p-tag">Highly rated by customers</p>
                            </div>
                        </div>
                        <div className="single-product-price">
                            <h3>${singleProduct.price}</h3>
                        </div>
                        <div className = "add-to-cart-likes">

                        <div><AddToCart product={singleProduct}/></div>

                        <div><i onClick={handleLike} className="far fa-heart"></i></div>
        
                        </div>
                    </div>

                </div>


                <div className="single-product-reviews-container">
                    <div className="ratings-header">
                        <h2 className="ratings-reviews">Ratings & Reviews</h2>
                    </div>
                    <div className="modal-review-button">
                        {currUser && !leftReview &&
                            <OpenModalButton
                                buttonText='Write a Review'
                                modalComponent={<CreateReview productId={singleProduct.id} />}
                            />
                        }

                    </div>

                    <div className="review-details-single-product">
                        {productReviews.map(review => (
                            <>
                                <div className="individual-review-container">


                                    <div className="star-rating-div">
                                        <p className="date-reviews-container">{review.created_at}</p>
                                        <p>{review.star_rating}<i className="fas fa-star"></i></p>
                                    </div>
                                    <div className="contianer-second-review">
                                        <div>
                                            <p className="review-text-div-single">{review.review_text}</p>
                                        </div>
                                        <div className="reviews-all-imgs">

                                            <div className="reviews-images-image-container">
                                                {
                                                    review.img1 &&
                                                <img className="reviews-images-image" src={review.img1} onError={e=>{e.currentTarget.src="https://cdn.discordapp.com/attachments/1062942242450460744/1121263492327030874/Image_6-21-23_at_7.11_PM.jpeg"}}/>
                                                }
                                            </div>
                                            <div className="reviews-images-image-container">
                                                {review.img2 &&

                                                    <img className="reviews-images-image" src={review.img2} onError={e=>{e.currentTarget.src="https://cdn.discordapp.com/attachments/1062942242450460744/1121263492327030874/Image_6-21-23_at_7.11_PM.jpeg"}}/>
                                                }
                                            </div>
                                            <div className="reviews-images-image-container">
                                                {
                                                review.img3 &&
                                                <img className="reviews-images-image" src={review.img3} onError={e=>{e.currentTarget.src="https://cdn.discordapp.com/attachments/1062942242450460744/1121263492327030874/Image_6-21-23_at_7.11_PM.jpeg"}}/>
                                                }
                                            </div>
                                            <div className="reviews-images-image-container">
                                                {
                                                    review.img4 &&
                                                <img className="reviews-images-image" src={review.img4} onError={e=>{e.currentTarget.src="https://cdn.discordapp.com/attachments/1062942242450460744/1121263492327030874/Image_6-21-23_at_7.11_PM.jpeg"}}/>
                                                }
                                            </div>
                                        </div>
                                        {currUser && review.user_id===currUser.id &&
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
                                        }
                                    </div>

                                </div>
                            </>

                        ))}
                    </div>
                </div>
                <div className="single-product-footer">
                    <h1>hi</h1>
                </div>

            </div>
        </>
    )
}
export default GetOneProduct
