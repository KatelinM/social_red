import userAPI from "../api/api";

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

export const getAuthUserData = () => (dispatch) => {
    return userAPI.authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(response.data.data));
            }
        })

};

export default profileReducer