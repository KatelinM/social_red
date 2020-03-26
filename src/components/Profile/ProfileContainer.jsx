import React, {Component} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfile} from "../redux/profileReducer";
import {toggleIsFetching} from "../redux/usersReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component {

    componentDidMount() {
        let selectedId = this.props.match.params.userId || 5746;

        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${selectedId}`)
            .then(response => {
                this.props.toggleIsFetching(false);
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

export default connect(mapStateToProps, {setProfile, toggleIsFetching})(withRouterProfileContainer);