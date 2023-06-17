const GET_ALL_REVIEWS="reviews/getallreviews"
const CURR_USER_REVIEWS="reviews/getallcurrreviews"
const CREATE_REVIEW = "reviews/createreview"

const createReviewAction = (review)=>({
    type: CREATE_REVIEW,
    review
})
const allReviewsAction = (reviews)=>({
    type: GET_ALL_REVIEWS,
    reviews
})
const currReviewsAction = (reviews)=>({
    type: CURR_USER_REVIEWS,
    reviews
})

export const thunkCreateReview = (review)=> async dispatch=>{
    const response = await fetch(`/api/products/${review.product_id}/reviews`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review)
    })
    if(response.ok){
        const data = await response.json()
        dispatch(createReviewAction(data))
    }
}
export const thunkCurrReviews = () => async(dispatch)=>{
    const response = await fetch(`/api/reviews/curr`)

    if(response.ok){
        const data = await response.json()
        dispatch(currReviewsAction(data))
    }
}

export const thunkAllReviews=()=>async(dispatch)=>{
    const response = await fetch(`/api/reviews/all`)

    if(response.ok){
        const data = await response.json()
        dispatch(allReviewsAction(data))
    }
}

const initialState={allReviews:{}}
const reviewsReducer = ( state = initialState, action)=>{
    switch(action.type){
        case CREATE_REVIEW:{
            const newState={}
            const newReview = action.review
            newState[newReview.id]=newReview
            return{
                ...state,
                allReviews:{...state.allReviews, ...newState}
            }
        }

        case CURR_USER_REVIEWS:{
            const newState={}
            const allReviews = action.reviews
            allReviews.forEach(review=>{
                newState[review.id]=review
            })
            return {
                ...state, allReviews:newState
            }
        }
        case GET_ALL_REVIEWS:{
            const newState={}
            const allReviews=action.reviews
            allReviews.forEach(review=>{
                newState[review.id]=review
            })
            return {...state, allReviews:newState}
        }
        default: return state
    }
}
export default reviewsReducer
