import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../redux/state";

const Profile = (props) => {
  return (
    <>
      <ProfileInfo/>
      <MyPosts data={props.data} addPost={props.addPost} updateNewPostText={updateNewPostText}/>
    </>
  )
}

export default Profile;