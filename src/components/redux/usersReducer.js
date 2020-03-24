const initialState = {
    users: [],
    usersPerPage: 52,
    totalUsersCount: 45,
    currentPage: 1,
    isFetching: false,
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
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            };
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalCount
            };
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state
    }
};

export const toggleFollowAC = (userId) => ({type: 'TOGGLE_FOLLOW', userId});
export const setUsersAC = (data) => ({type: 'SET_USERS', data});
export const setCurrentPageAC = (currentPage) => ({type: 'SET_CURRENT_PAGE', currentPage});
export const setTotalUsersCountAC = (totalCount) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount});
export const toggleIsFetchingAC = (isFetching) => ({type: 'TOGGLE_IS_FETCHING', isFetching});

export default usersReducer