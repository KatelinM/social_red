import {connect} from "react-redux";
import Users from "./Users";
import {
    getUsers,
    toggleFollow,
} from "../redux/usersReducer";
import React, {Component} from "react";
import Loader from "../Loader/Loader";

class UsersContainerApi extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.usersPerPage, this.props.currentPage)
    };

    onPaginationClicked = (num) => {
        this.props.getUsers(this.props.usersPerPage, num)
    };

    render() {
        return <>
            {this.props.isFetching && <Loader/>}
            <Users {...this.props}
                   onPaginationClicked={this.onPaginationClicked}/>
        </>
    }
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    usersPerPage: state.usersPage.usersPerPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
});

const UsersContainer = connect(
    mapStateToProps,
    {
        toggleFollow,
        getUsers,
    }
)(UsersContainerApi);

export default UsersContainer