import * as axios from "axios";


const instance = axios.create({

    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'dc432957-d988-48fc-8955-9690b8d0ed47'
    }
});


export const usersAPI = {

    getUsers(currentPage, quantityUsersOnPage) {
        return instance.get(`users?page=${currentPage}
        &count=${quantityUsersOnPage}`)
            .then(response => response.data)

    },


    // selectUsersCurrentPage(pages, quantityUsersOnPage) {
    //
    //     return instance.get(`users?page=${pages}
    //     &count=${quantityUsersOnPage}`)
    //         .then(response => response.data)
    //
    // },

    follow(id) {
        return instance.post(`follow/${id}`)


    },


    unfoloow(id) {
        return instance.delete(`follow/${id}`)

    },




};


export const profileAPI = {

    authMe() {
        return instance.get(`auth/me`)


    },

    profileInfo (userid) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userid)

    },

    getProfileStatus (userid) {
        return instance.get (`profile/status/` + userid)
    },

    updateProfileStatus (status) {
        return instance.put(`profile/status/`, {status:status})
    },

};

