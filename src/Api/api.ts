import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import {UsersFilterType} from "../redux/reducers/users-reducer";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f1b329ae-33ec-433c-a569-17e2b54270db"
    }
});

// fetching from https://social-network.samuraijs.com/api/1.0/
export const userAPI = {
    getUserAvatar: async function (id: number) {
        return await instance.get('/profile/' + id)
            .then(response => {
                return response.data.photos
            })
    },
    getUsers: async function (pageSize: number,
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
    getProfile: async function (userId: string) {
        console.warn('Obsolete method. Use profileAPI.getProfile')
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    // return object with user id, e-mail and login
    getUserToken: async function () {
        return await instance.get('/auth/me')
    },
    getProfile: async function (userId: string) {
        return instance.get(`/profile/${userId}`)
    },
    getStatus: async function (userId: string) {
        return await instance.get('/profile/status/' + userId)
    },
    setStatus: async function (status: string) {
        return await instance.put('/profile/status/', {status: status})
    },
}

