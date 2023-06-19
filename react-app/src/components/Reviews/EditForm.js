import ReviewForm from './ReviewForm'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { useModal } from "../../context/Modal";

const EditReview = ({ review }) => {
    return (
        <>
            <ReviewForm
            review={review}
            formType="Edit Review"
            // disabled={disabled}
            />
        </>
    )
}

export default EditReview
