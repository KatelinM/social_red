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

export const setAuthUserData = (data) => ({type: 'SET-AUTH-USER-DATA', data});

export default profileReducer