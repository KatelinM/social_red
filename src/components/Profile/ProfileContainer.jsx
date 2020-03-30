import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getProfileStatus, updateProfileStatus} from "../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";

class ProfileContainer extends Component {

    componentDidMount() {
        let selectedId = this.props.match.params.userId || this.props.authorizedUserId;
        this.props.getProfile(selectedId);
        this.props.getProfileStatus(selectedId);
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authorizedUserId: state.profilePage.profile && state.profilePage.profile.userId,
    status: state.profilePage.status,
});

export default compose(
    connect(mapStateToProps, {getProfile, getProfileStatus, updateProfileStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)