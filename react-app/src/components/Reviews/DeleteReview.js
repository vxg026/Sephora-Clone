import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useModal } from "../../context/Modal";
import { thunkCurrReviews, thunkDeleteReview } from '../../store/review';
import "./DeleteReview.css"

const DeleteReview = ({review})=>{
    const dispatch = useDispatch()
    const history = useHistory()
    const {closeModal}=useModal()
    const handleDelete = e=>{
        dispatch(thunkDeleteReview(review))
        .then(closeModal)
        // dispatch(thunkCurrReviews())
        // history.push('/reviews/curr')
    }
    return(
        <>
        <div className="delete-review-form">
                   <p>Are you sure you want to delete this review?</p>
       <div className="butons">

        <button className="confirm-delete" onClick={handleDelete}>Delete</button>
            <button className="cancel-delete" onClick={closeModal}>Cancel</button>
       </div>
        </div>

        </>
    )
}
export default DeleteReview
