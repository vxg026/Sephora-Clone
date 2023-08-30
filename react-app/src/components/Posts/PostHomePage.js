import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import GetCurrPosts from "./GetCurrPosts";

const PostHomePage = ()=>{
    return (
        <>
        <GetCurrPosts/>
        </>
    )
}
export default PostHomePage;
