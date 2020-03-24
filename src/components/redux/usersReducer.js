const initialState = {
    users: [],
};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.data
            };
        case 'TOGGLE_FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id !== action.userId ?
                        u :
                        {
                            ...u,
                            isFollowed: !u.isFollowed
                        }
                })
            };
        default:
            return state
    }
};

export const toggleFollowAC = (userId) => ({type: 'TOGGLE_FOLLOW', userId});
export const setUsersAC = (data) => ({type: 'SET_USERS', data});

export default usersReducer