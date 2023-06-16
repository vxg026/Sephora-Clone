const GET_ALL_REVIEWS="reviews/getallreviews"
const CURR_USER_REVIEWS="reviews/getallcurrreviews"

const allReviewsAction = (reviews)=>({
    type: GET_ALL_REVIEWS,
    reviews
})
const currReviewsAction = (reviews)=>({
    type: CURR_USER_REVIEWS,
    reviews
})

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

const initialState={currReviews:{}, singleReview:{}, allReviews:{}}
const reviewsReducer = ( state = initialState, action)=>{
    switch(action.type){
        case CURR_USER_REVIEWS:{
            const newState={}
            const currReviews = action.reviews
            currReviews.forEach(review=>{
                newState[review.id]=review
            })
            return {
                ...state, currReviews:newState
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
