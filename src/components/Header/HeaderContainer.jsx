import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMe} from "../redux/authReducer";

class HeaderContainer extends Component {
    componentDidMount() {
        authMe()
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    authUserData: state.auth.authUserData,
    isAuthorized: state.auth.isAuthorized,
});

export default connect(mapStateToProps, {authMe})(HeaderContainer);