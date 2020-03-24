import {connect} from "react-redux";
import Users from "./Users";
import {setUsersAC, toggleFollowAC} from "../redux/usersReducer";

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
});

let mapDispatchToProps = (dispatch) => ({
    toggleFollow: (userId) => dispatch(toggleFollowAC(userId)),
    setUsers: (data) => dispatch(setUsersAC(data)),
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer