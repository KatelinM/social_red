import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../redux/authReducer";
import userAPI from "../api/api";

class HeaderContainer extends Component {
    componentDidMount() {
        userAPI.authMe().then(response => {
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