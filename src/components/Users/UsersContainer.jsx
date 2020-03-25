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
import * as axios from "axios";
import Loader from "../Loader/Loader";

class UsersContainerApi extends Component {
    getUsers = () => {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPerPage}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.toggleIsFetching(false)
            })
    };

    componentDidMount() {
        this.getUsers()
    };

    onPaginationClicked = (num) => {
        this.props.setCurrentPage(num);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPerPage}&page=${num}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
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
//
// let mapDispatchToProps = (dispatch) => ({
//     toggleFollow: (userId) => dispatch(toggleFollow(userId)),
//     setUsers: (data) => dispatch(setUsers(data)),
//     setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
//     setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCount(totalCount)),
//     toggleIsFetching: (isFetching) => dispatch(toggleIsFetching(isFetching)),
// });

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