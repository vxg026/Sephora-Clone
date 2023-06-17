import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { thunkOneProduct } from "../../store/product";
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { thunkAllReviews } from "../../store/review";
import OpenModalButton from "../OpenModalButton";
import CreateReview from "../Reviews/CreateReview";

const GetOneProduct = () => {
    const dispatch = useDispatch()
    const { productId } = useParams()
    const singleProduct = useSelector(state => state.products.allProducts[productId])

    const allReviews = useSelector(state => state.reviews.allReviews)
    const allReviewsArr = Object.values(allReviews)

    const currUser = useSelector(state => state.session.user)


    console.log("===========", allReviews)

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
    return (
        <>
            Single Product
            {singleProduct.id}
            {singleProduct.name}
            {singleProduct.description}
            {singleProduct.price}


            <div>

                <OpenModalButton
                    buttonText='Leave a Review!'
                    modalComponent={<CreateReview productId={singleProduct.id} />}
                />


            </div>

            <div>
                {productReviews.map(review => (
                    <>
                        {review.review_text}
                        {review.star_rating}
                        {review.img1}
                        {review.img2}
                        {review.img3}
                        {review.img4}

                    </>

                ))}
            </div>
        </>
    )
}
export default GetOneProduct
