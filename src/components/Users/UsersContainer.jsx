import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {toggleFollowAC} from "../redux/usersReducer";

let mapStateToProps = (state) => ({
    userPage: state.usersPage
});

let mapDispatchToProps = (dispatch) => ({
    toggleFollow: (userId) => dispatch(toggleFollowAC(userId))
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer