import React from "react";

const ProfileInfo = ({profile}) => {
    if (profile === null) {
        return false
    }
    return (
        <>
            <div>
                <img
                    src={profile.photos.small} alt=""/>
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