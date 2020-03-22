import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <>
      <ProfileInfo/>
      <MyPosts data={props.data} dispatch={props.dispatch}/>
    </>
  )
}

export default Profile;