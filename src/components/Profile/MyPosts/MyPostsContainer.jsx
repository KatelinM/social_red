import React from 'react';
import {addPostAC, updateNewPostAC} from "../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    const addPost = () => {
        props.dispatch(addPostAC())
    };

    const postChange = (text) => {
        props.dispatch(updateNewPostAC(text))
    };

    return <MyPosts data={props.data} addPost={addPost} postChange={postChange}/>
};

export default MyPostsContainer;