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
    const [images, setImages]= useState(review?.images || [])
    const [errors, setErrors] = useState({})
    const { closeModal } = useModal()

    const handleFileChange = (e) => {
        const files = e.target.files;
        setImages([...files]);
        // console.log("Updated images:", images);
    };
    useEffect(() => {
        console.log("Updated images:", images);
    }, [images]);

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

        // console.log("pased review````````````", review)
        review = {
            ...review,
            review_text,
            star_rating,
            images

        }
        const reviewObj = new FormData();
        reviewObj.append("review_text", review_text);
        reviewObj.append("star_rating", star_rating);
        console.log("these are images~~~~~~~~~~~~~~~~~~~", images)
        images.forEach((image, index) => {
            // Append all images to the same key 'images[]'
            reviewObj.append("images[]", image);
        });

        console.log(reviewObj.get("image1"), ".......................this is after image append")
        reviewObj.append("product_id", review.product_id);

        console.log("Review Object:", reviewObj); // Log the FormData object


        // console.log("this is review===========================", reviewObj.get("product_id"), "thi si s just review", review.id)

        let error_obj = {}
        if (reviewObj.get("review_text").length < 2 || reviewObj.get("review_text").length > 500) {
            error_obj.review_text = "Review text must be between 2 and 500 characters long"
        }
        if (!reviewObj.get("star_rating")) {
            error_obj.star_rating = "Must rate between 1-5"
        }



        setErrors(error_obj)

        console.log("before create")
        if (formType === "Create Review" && Object.keys(error_obj).length === 0) {
            console.log("fater if create")
            console.log(reviewObj, "thi sis reviewObj....................")
            await dispatch(thunkCreateReview(reviewObj))
                .then(closeModal)

        }
        if (formType === "Edit Review" && Object.keys(error_obj).length === 0) {
            await dispatch(thunkEditReview(reviewObj, review))
                .then(closeModal)
        }
        if (error_obj) {

            setErrors(error_obj)
            // console.log("hi=============")
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

                     <div>
                     <div>
          <input type="file" onChange={handleFileChange} multiple />
          {images.length > 0 &&
            images.map((file, index) => (
              <div key={index}>
                Image {index + 1}
                {file && <img src={URL.createObjectURL(file)} alt={`Image ${index + 1}`} />}
                <p className="errors">{errors[`img${index + 1}`]}</p>
              </div>
            ))}
        </div>
</div>
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
