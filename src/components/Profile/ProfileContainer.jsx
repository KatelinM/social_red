import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../redux/profileReducer";
import {withRouter} from "react-router-dom";
import userAPI from "../api/api";

class ProfileContainer extends Component {

    componentDidMount() {
        let selectedId = this.props.match.params.userId || 5746;


        userAPI.getProfile(selectedId).then(response => {
            this.props.setProfile(response.data);
        })
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let withRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setProfile})(withRouterProfileContainer);