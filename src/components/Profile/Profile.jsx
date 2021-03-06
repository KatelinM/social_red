import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <>
      <ProfileInfo
          isOwner={props.isOwner}
          profile={props.profile}
          status={props.status}
          updateProfileStatus={props.updateProfileStatus}/>
      <MyPostsContainer/>
    </>
  )
};

export default Profile;