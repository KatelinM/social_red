import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../redux/authReducer";

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    authUserData: state.auth.authUserData,
    isAuthorized: state.auth.isAuthorized,
});

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);