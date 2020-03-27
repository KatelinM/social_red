import React from "react";
import nobody from "../../../assets/images/nobody.png";
import ProfileStatus from "./ProfileStatus";
import {useState} from "react/cjs/react.production.min";

const ProfileInfo = ({profile}) => {
    if (profile === null) {
        return false
    }

    return (
        <>
            <div>
                <img
                    src={profile.photos.small ? profile.photos.small : nobody} alt=""/>
            </div>
            <div>
                <h4> {profile.fullName}</h4>
                <ProfileStatus status={profile.aboutMe}/>
                <div>lookingForAJob {profile.lookingForAJob}</div>
                <div>instagram {profile.instagram}</div>
            </div>
        </>
    )
}

export default ProfileInfo