export const getUsersSelector = (state) => {
    return state.usersPage.users
};

export const getUsersPerPage= (state) => {
    return state.usersPage.usersPerPage
};
export const getTotalUsersCount= (state) => {
    return state.usersPage.totalUsersCount
};
export const getCurrentPage= (state) => {
    return state.usersPage.currentPage
};
export const getIsFetching= (state) => {
    return state.usersPage.isFetching
};