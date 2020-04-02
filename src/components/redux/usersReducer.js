import userAPI from "../api/api";

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

const toggleFollow = (userId) => ({type: 'TOGGLE_FOLLOW', userId});
const setUsers = (data) => ({type: 'SET_USERS', data});
const setCurrentPage = (currentPage) => ({type: 'SET_CURRENT_PAGE', currentPage});
const setTotalUsersCount = (totalCount) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount});
const toggleIsFetching = (isFetching) => ({type: 'TOGGLE_IS_FETCHING', isFetching});

export const getUsers = (usersPerPage, currentPage) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        let response = await userAPI.getUsers(usersPerPage, currentPage);

        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
        dispatch(toggleIsFetching(false))
    }
};

export const toggleFollowThunkCreator = (id, isFollowed) => {
    return async (dispatch) => {
        if (isFollowed) {
            let response = await userAPI.unFollow(id);
            if (response.data.resultCode === 0) {
                dispatch(toggleFollow(id));
            }
        } else {
            let response = await userAPI.follow(id);

            if (response.data.resultCode === 0) {
                dispatch(toggleFollow(id));
            }

        }
    }
};

export default usersReducer