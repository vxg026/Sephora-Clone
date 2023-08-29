const GET_CURR_POSTS = "posts/getallpostsforcurruser"

const currPosts = (posts)=>({
    type: GET_CURR_POSTS,
    posts
})

export const thunkCurrPosts = () => async(dispatch)=>{
    const response = await fetch(`/api/posts/curr`)
    if(response.ok){
        const data = await response.json()
        dispatch(currPosts(data))
    }
}
const initialState = {allPosts:{}}

const postsReducer = (state = initialState, action) =>{
    switch(action.type){
    case GET_CURR_POSTS:{
        const newState = {}
        const allPosts = action.posts
        allPosts.forEach(post=>{
         newState[post.id] = post
        })
        return {allPosts:newState}
    }
    default: return state
    }
}
export default postsReducer;
