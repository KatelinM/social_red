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
        return instance.delete(`follow/${id}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "6c3b978f-8175-42d7-a35a-1aa93dfbec15",
            }
        })
    },
    follow(id) {
        return instance.post(`follow/${id}`, null, {
            withCredentials: true,
            headers: {
                "API-KEY": "6c3b978f-8175-42d7-a35a-1aa93dfbec15",
            }
        })
    },
    getUsers(usersPerPage, currentPage) {
        return instance.get(`users?count=${usersPerPage}&page=${currentPage}`, {
            withCredentials: true,
            headers: {
                'API-KEY': '6c3b978f-8175-42d7-a35a-1aa93dfbec15',
            }
        }).then(result => result.data)
    }
};

export default userAPI