import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getProfileStatus, updateProfileStatus} from "../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";

class ProfileContainer extends Component {

    refreshProfile() {
        let selectedId = this.props.match.params.userId ||
            this.props.authorizedUserId ||
            this.props.history.push('/login');
        this.props.getProfile(selectedId);
        this.props.getProfileStatus(selectedId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile isOwner={!this.props.match.params.userId}
                        {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.authUserData.id,
    status: state.profilePage.status,
});

export default compose(
    connect(mapStateToProps, {getProfile, getProfileStatus, updateProfileStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)