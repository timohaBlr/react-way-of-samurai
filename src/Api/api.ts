import axios from "axios";
import {UsersFilterType} from "../redux/reducers/users/types";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f1b329ae-33ec-433c-a569-17e2b54270db"
    }
});

// fetching from https://social-network.samuraijs.com/api/1.0/
export const usersAPI = {
    // getUserAvatar: function (id: number) {
    //     return instance.get('/profile/' + id)
    //         .then(response => {
    //             return response.data.photos
    //         })
    // },
    getUsers: function (pageSize: number,
                        pageNumber: number,
                        filter: UsersFilterType
    ) {
        const pNumber = pageNumber ? `page=${pageNumber}` : ''
        const pSize = pageSize ? `&count=${pageSize}` : ''
        const term = filter.findUser ? `&term=${filter.findUser}` : ''
        const friend = filter.onlyFriends === 'null' ? '' : `&friend=${filter.onlyFriends}`
        return instance.get(`/users?${pNumber}${pSize}${term}${friend}`)
            .then(response => response.data)
    },
    /**
     * Properties
     * email: required(string)
     * valid confirmed user email address, which used during registration
     *
     * password: required(string)
     * valid user password
     *
     * rememberMe: (boolean)
     * if true, then session will not be expired after session finishing
     *
     * captcha: (boolean)
     * text from captcha-image that should be added if there is resultCode is 10 in response data.
     */
    logIn: function (email: string, password: string, rememberMe: boolean, captcha: string | null = null) {
        const payload = {email, password, rememberMe, captcha}
        return instance.post('/auth/login', payload)
    },
    logOut: function () {
        return instance.delete('/auth/login')
    },
    // getProfile: function (userId: string) {
    //     console.warn('Obsolete method. Use profileAPI.getProfile')
    //     return profileAPI.getProfile(userId)
    // },
}

export const profileAPI = {
    // return object with user id, e-mail and login
    getUserToken: function () {
        return instance.get('/auth/me')
    },
    getProfile: function (userId: string) {
        return instance.get(`/profile/${userId}`)
    },
    getStatus: function (userId: string) {
        return instance.get('/profile/status/' + userId)
    },
    setStatus: function (status: string) {
        return instance.put('/profile/status/', {status: status})
    },
}

