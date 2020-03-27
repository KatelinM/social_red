import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) => ({
    isAuthorized: state.auth.isAuthorized,
});

let withAuthRedirect = (Component) => {
    function RedirectComponent(props) {
        return props.isAuthorized ?
            <Component {...props}/> :
            <Redirect to='/login'/>
    }

    return connect(mapStateToProps)(RedirectComponent)
};


export default withAuthRedirect