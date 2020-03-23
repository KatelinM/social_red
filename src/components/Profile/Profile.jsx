import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <>
      <ProfileInfo/>
      <MyPostsContainer data={props.data} dispatch={props.dispatch}/>
    </>
  )
}

export default Profile;