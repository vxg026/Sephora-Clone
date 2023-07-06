import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { useModal } from "../../context/Modal";
import { thunkCreateReview } from "../../store/review";
import { thunkEditReview } from "../../store/review";

import "./ReviewForm.css"
const ReviewForm = ({ review, formType, disabled }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [review_text, setReview_text] = useState(review?.review_text)
    const [star_rating, setStar_rating] = useState(review?.star_rating)
    const [activeRating, setActiveRating] = useState(star_rating)
    const [img1, setImg1] = useState(review?.img1)
    const [img2, setImg2] = useState(review?.img2)
    const [img3, setImg3] = useState(review?.img3)
    const [img4, setImg4] = useState(review?.img4)
    const [errors, setErrors] = useState({})
    const { closeModal } = useModal()

    useEffect(() => {
        setActiveRating(star_rating)
    }, [star_rating])

    const onChange = (number) => {
        setStar_rating(parseInt(number))
    }

    const handleMouseEnter = index => {
        if (!disabled) {
            setActiveRating(index + 1)
        }
    }
    const handleMouseLeave = () => {
        if (!disabled) {
            setActiveRating(star_rating)
        }
    }


    const handleClick = index => {
        if (!disabled) {
            onChange(index + 1)
        }
    }

    let arr = []
    for (let index = 0; index < 5; index++) {
        const className = index < activeRating ? 'fas fa-star' : 'far fa-star'
        arr.push(
            <div
                className={className}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(index)}>
                {/* <i className={className}></i> */}
            </div>
        )
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log("pased review````````````", review)
        // review = {
        //     ...review,
        //     review_text,
        //     star_rating,
        //     img1,
        //     img2,
        //     img3,
        //     img4
        // }
        const reviewObj = new FormData();
        reviewObj.append("review_text", review_text);
        console.log("review_text",review_text)
        reviewObj.append("star_rating", star_rating)
        reviewObj.append("img1", img1)
        reviewObj.append("img2", img2)
        reviewObj.append("img3", img3)
        reviewObj.append("img4", img4)
        reviewObj.append("product_id", review.product_id)

        console.log("this is review===========================", reviewObj)

        let error_obj = {}
        if (reviewObj.get("review_text").length < 2 || reviewObj.get("review_text").length > 500) {
            error_obj.review_text = "Review text must be between 2 and 500 characters long"
        }
        if (!reviewObj.get("star_rating")) {
            error_obj.star_rating = "Must rate between 1-5"
        }
        // if (img1) {
        //     if (!img1.endsWith(".png") && !img1.endsWith(".jpg") && !img1.endsWith(".jpeg")) {
        //         error_obj.img1 = "Preview Image URL must end with .png, .jpg, or .jpeg";
        //     }
        // }
        if (img2) {
            if (!img2.endsWith(".png") && !img2.endsWith(".jpg") && !img2.endsWith(".jpeg")) {
                error_obj.img2 = "Preview Image URL must end with .png, .jpg, or .jpeg";
            }
        }
        if (img3) {
            if (!img3.endsWith(".png") && !img3.endsWith(".jpg") && !img3.endsWith(".jpeg")) {
                error_obj.img3 = "Preview Image URL must end with .png, .jpg, or .jpeg";
            }
        }
        if (img4) {
            if (!img4.endsWith(".png") && !img4.endsWith(".jpg") && !img4.endsWith(".jpeg")) {
                error_obj.img4 = "Preview Image URL must end with .png, .jpg, or .jpeg";
            }
        }


        // setErrors(error_obj)


        if (formType === "Create Review" && Object.keys(error_obj).length === 0) {
            await dispatch(thunkCreateReview(reviewObj))
                .then(closeModal)

        }
        if (formType === "Edit Review" && Object.keys(error_obj).length === 0) {
            await dispatch(thunkEditReview(review))
                .then(closeModal)
        }
        if (error_obj) {

            setErrors(error_obj)
            console.log("hi=============")
        }
    }

    return (
        <>
        <div className="review-form-container">

            <h4 className="leave-review-here">Leave your review here</h4>
            <form className="review-form" onSubmit={handleSubmit}>
                <textarea
                    className="review-txt-are"
                    type="text"
                    value={review_text}
                    placeholder="We'd love to hear your thoughts!"
                    onChange={e => setReview_text(e.target.value)}
                />
                <p className="errors">{errors.review_text}</p>
                <div>
                    {arr} Stars
                </div>
                <p className="errors">{errors.star_rating}</p>
                <div>
                    {/* <input
            id="img1"
            name="img1"
            type="text"
            value={img1}
            placeholder="Image URL 1"
            onChange={(e) => setImg1(e.target.value)}
          />
     {img1 && <img src={img1} alt="Image 1" />} */}

                    img1
                    <input formAction="image"
                    className="input-img-url"
                    type="file"
                        placeholder="image url (optional)"
                        onChange={(e) => setImg1(e.target.files[0])} />
                    <p className="errors">{errors.img1}</p>

                    img2
                    <input formAction="image"
                    className="input-img-url"
                        value={img2}
                        placeholder="image url (optional)"
                        onChange={(e) => setImg2(e.target.value)} />
                    <p className="errors">{errors.img2}</p>
                    img3
                    <input formAction="image"
                    className="input-img-url"
                        value={img3}
                        placeholder="image url (optional)"
                        onChange={(e) => setImg3(e.target.value)} />
                    <p className="errors">{errors.img3}</p>
                    img4
                    <input formAction="image"
                    className="input-img-url"
                        value={img4}
                        placeholder="image url (optional)"
                        onChange={(e) => setImg4(e.target.value)} />
                    <p className="errors">{errors.img4}</p>
                </div>
                <div>
                    <button className="subit-review" type="submit" >Submit your Review</button>
                </div>
            </form>
            </div>

        </>
    )

}
export default ReviewForm
