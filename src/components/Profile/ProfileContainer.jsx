import React, {Component} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfile} from "../redux/profileReducer";
import {toggleIsFetching} from "../redux/usersReducer";

class ProfileContainer extends Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/1069`)
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

export default connect(mapStateToProps, {setProfile, toggleIsFetching})(ProfileContainer);