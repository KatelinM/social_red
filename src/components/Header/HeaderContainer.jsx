import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logOut} from "../redux/authReducer";
import userAPI from "../api/api";

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} logOut={logOut}/>
    }
}

let mapStateToProps = (state) => ({
    authUserData: state.auth.authUserData,
    isAuthorized: state.auth.isAuthorized,
});

export default connect(mapStateToProps, {getAuthUserData, logOut})(HeaderContainer);