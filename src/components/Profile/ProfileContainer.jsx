import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../redux/profileReducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../hoc/withAuthRedirect";

class ProfileContainer extends Component {

    componentDidMount() {
        let selectedId = this.props.match.params.userId || 5746;
        this.props.getProfile(selectedId);
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let withRouterProfileContainer = withRouter(ProfileContainer);
let withAuthRedirectProfileContainer = withAuthRedirect(withRouterProfileContainer);

export default connect(mapStateToProps, {getProfile})(withAuthRedirectProfileContainer);