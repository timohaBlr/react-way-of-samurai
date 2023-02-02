import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f1b329ae-33ec-433c-a569-17e2b54270db"
    }
});

// fetching from https://social-network.samuraijs.com/api/1.0/
export const fetching_API = {
    // return object with user id, e-mail and login
    getUserToken: async function () {
        return await instance.get('/auth/me')
            .then(response => {
               return  response.data.data
            })
    },
    getUserAvatar: async function(id: number){
      return await instance.get('/profile/' + id)
          .then(response => {
              return  response.data.photos
          })
    },
    getProfile: async function (userId: string) {
        return instance.get(`/profile/${userId}`)
    },
    getUsers: async function (pageSize: number, pageNumber: number) {
        return instance.get(`/users?count=${pageSize}&page=${pageNumber}`)
            .then(response => response.data)
    },

}

