import {connect} from "react-redux";
import Users from "./Users";
import {
    getUsers,
    toggleFollowThunkCreator
} from "../redux/usersReducer";
import React, {Component} from "react";
import Loader from "../Loader/Loader";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getTotalUsersCount,
    getUsersPerPage,
    getUsersSelector
} from "../redux/user-selector";

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
    users: getUsersSelector(state),
    usersPerPage: getUsersPerPage(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
});

export default compose(
    connect(mapStateToProps, {getUsers, toggleFollowThunkCreator}),
    withAuthRedirect,
)(UsersContainerApi)