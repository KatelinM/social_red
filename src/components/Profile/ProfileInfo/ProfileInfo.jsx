import React from "react";
import nobody from "../../../assets/images/nobody.png";

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
                <div>{profile.aboutMe}</div>
                <div>lookingForAJob {profile.lookingForAJob}</div>
                <div>instagram {profile.instagram}</div>
                <div>fullName {profile.fullName}</div>
            </div>
        </>
    )
}

export default ProfileInfo