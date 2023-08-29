import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { thunkCurrPosts } from "../../store/post";

const GetCurrPosts = () =>{
    const dispatch = useDispatch()
    const posts = useSelector(state=>state.posts.allPosts)

    useEffect(()=>{
        dispatch(thunkCurrPosts())
    },[dispatch])

    if(!posts) return "no posts"

return(
    <>
    <div>Wellcome to Sephoria community</div>
    {Object.values(posts).map(post=>{
        return(
            <div key={post.id}>{post.post_text}</div>
        )
    })}
    </>

)
}
export default GetCurrPosts
