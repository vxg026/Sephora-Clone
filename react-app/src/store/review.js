const GET_ALL_REVIEWS="reviews/getallreviews"
const CURR_USER_REVIEWS="reviews/getallcurrreviews"
const CREATE_REVIEW = "reviews/createreview"
const EDIT_REVIEW = "review/editreview"
const DELETE_REVIEW = "review/delterview"

const deleteReviewAction = (review)=>({
    type:DELETE_REVIEW,
    review
})
const editReviewAction = (review)=>({
    type:EDIT_REVIEW,
    review
})
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
export const thunkDeleteReview=(review)=>async dispatch=>{
    const response = await fetch(`/api/reviews/delete/${review.id}`, {

        method:"DELETE"
    })
    if(response.ok){
        const data = await response.json()
        dispatch(deleteReviewAction(data))
    }
}
export const thunkEditReview = (review)=>async dispatch=>{
    const response = await fetch(`/api/reviews/edit/${review.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review)
    })
    if (response.ok){
        const data = await response.json()
        dispatch(editReviewAction(data))
    }
}

export const thunkCreateReview = (reviewObj)=> async dispatch=>{
    console.log("this is review in create", reviewObj)
    const response = await fetch(`/api/products/${parseInt(reviewObj.get("product_id"))}/reviews`, {
        method: "POST",
        // headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify(review)
        body: reviewObj
    })
    if(response.ok){
        const {reviewPost} = await response.json()
        console.log("this is reviewPost", reviewPost)
        dispatch(createReviewAction(reviewPost))
    }
    else{
        console.log("error making your post")
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
        case EDIT_REVIEW:{
            const newState={}
            const newReview=action.review
            newState[newReview.id]=newReview
            return{
                allReviews:{...state.allReviews, ...newState}
            }
       }
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
                allReviews:newState
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
        case DELETE_REVIEW:{
            const reviewId = action.review.reviewId
            const newState = {...state.allReviews}
            delete newState[reviewId]
            return{
                ...state, allReviews: newState
            }
            // const newState = {...state.allReviews}
            // const reviewId = action.review.reviewId
            // delete newState[reviewId]
            // // return newState
            // return{
            //     ...state, allReviews:newState
            // }
        }
        default: return state
    }
}
export default reviewsReducer
