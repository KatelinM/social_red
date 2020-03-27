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
    getUsers(usersPerPage, currentPage) {
        return instance.get(`users?count=${usersPerPage}&page=${currentPage}`).then(result => result.data)
    },
    authMe() {
        return instance.get(`auth/me`)
    },
    getProfile(selectedId) {
        return instance.get(`profile/${selectedId}`)
    },
    getProfileStatus(selectedId) {
        return instance.get(`/profile/status/${selectedId}`)
            .then(result => result.data)
    },
    updateProfileStatus(status) {
        return instance.get(`/profile/status/`, {status})
    },
};

export default userAPI