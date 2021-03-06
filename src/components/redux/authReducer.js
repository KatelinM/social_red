import userAPI from "../api/api";
import {stopSubmit} from "redux-form";

const initialState = {
    authUserData: {},
    isAuthorized: false,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {
                authUserData: action.data,
                isAuthorized: true
            };
        default:
            return state
    }
};

const setAuthUserData = (data) => ({type: 'SET-AUTH-USER-DATA', data});

export const getAuthUserData = () => async (dispatch) => {
    let response = await userAPI.authMe();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(response.data.data));
    }


};

export const logIn = (email, password, rememberMe) => async (dispatch) => {
    let response = await userAPI.logIn(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(response.data.data));
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit('login', {_error: message}))
    }
};

export const logOut = () => (dispatch) => {
    return userAPI.logOut()
};

export default profileReducer