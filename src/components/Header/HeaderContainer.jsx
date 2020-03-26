import React, {Component} from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../redux/authReducer";

class HeaderContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data);
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    authUserData: state.auth.authUserData,
    isAuthorized: state.auth.isAuthorized,
});

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer);