import * as axios from "axios";

const userAPI = {
    unFollow(id) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "6c3b978f-8175-42d7-a35a-1aa93dfbec15",
            }
        })
    },
    follow(id) {
        return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, null, {
            withCredentials: true,
            headers: {
                "API-KEY": "6c3b978f-8175-42d7-a35a-1aa93dfbec15",
            }
        })
    },
    getUsers(usersPerPage, currentPage) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${usersPerPage}&page=${currentPage}`, {
            withCredentials: true,
            headers: {
                'API-KEY': '6c3b978f-8175-42d7-a35a-1aa93dfbec15',
            }
        }).then(result => result.data)
    }
};

export default userAPI