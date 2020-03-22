import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <>
      <ProfileInfo/>
      <MyPosts data={props.data} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    </>
  )
}

export default Profile;