import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useModal } from "../../context/Modal";
import { thunkCurrReviews, thunkDeleteReview } from '../../store/review';

const DeleteReview = ({review})=>{
    const dispatch = useDispatch()
    const history = useHistory()
    const {closeModal}=useModal()
    const handleDelete = e=>{
        dispatch(thunkDeleteReview(review))
        .then(closeModal)
        // dispatch(thunkCurrReviews())
        history.push('/reviews/curr')
    }
    return(
        <>
        <p>Are you sure you want to delete this review?</p>
        <button onClick={handleDelete}>Delete</button>
            <button onClick={closeModal}>Cancel</button>
        </>
    )
}
export default DeleteReview
