import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import GetCurrPosts from "./GetCurrPosts";
import "./posts.css"
import SearchQuestion from "./SearchQuestion";

const PostHomePage = ()=>{
    return (
        <>
        <SearchQuestion/>
        <h4>All Posts</h4>
        <GetCurrPosts/>

        </>
    )
}
export default PostHomePage;
