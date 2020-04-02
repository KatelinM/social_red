import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "6c3b978f-8175-42d7-a35a-1aa93dfbec15",
    }
});

const userAPI = {
    unFollow(id) {
        return instance.delete(`follow/${id}`)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
    },
    async getUsers(usersPerPage, currentPage) {
        let result = await instance.get(`users?count=${usersPerPage}&page=${currentPage}`)
        return result.data
    },
    authMe() {
        return instance.get(`auth/me`)
    },
    getProfile(selectedId) {
        return instance.get(`profile/${selectedId}`)
    },
    async getProfileStatus(selectedId) {
        let response = await instance.get(`/profile/status/${selectedId}`)
        return response.data
    },
    updateProfileStatus(status) {
        //return instance.post(`/profile/status/`, {status})
    },
    logIn(email, password, rememberMe) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
    },
    logOut() {
        return instance.delete(`/auth/login`)
    },
};

export default userAPI