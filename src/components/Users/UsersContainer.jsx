import {connect} from "react-redux";
import Users from "./Users";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollow,
    toggleIsFetching
} from "../redux/usersReducer";
import React, {Component} from "react";
import Loader from "../Loader/Loader";
import userAPI from "../api/api";

class UsersContainerApi extends Component {
    getUsers = () => {
        this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.usersPerPage, this.props.currentPage).then(response => {
            this.props.setUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount);
            this.props.toggleIsFetching(false)
        })
    };

    componentDidMount() {
        this.getUsers()
    };

    onPaginationClicked = (num) => {
        this.props.setCurrentPage(num);
        this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.usersPerPage, num).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
                this.props.setTotalUsersCount(response.totalCount)
            })
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
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
    }
)(UsersContainerApi);

export default UsersContainer