import React from "react";
import nobody from "../../../assets/images/nobody.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return false
    }

    return (
        <>
            <div>
                <img
                    src={props.profile.photos.small ? props.profile.photos.small : nobody} alt=""/>
            </div>
            <div>
                <h4> {props.profile.fullName}</h4>
                <ProfileStatus status={props.status}/>
                <div>lookingForAJob {props.profile.lookingForAJob}</div>
                <div>instagram {props.profile.instagram}</div>
            </div>
        </>
    )
}

export default ProfileInfo