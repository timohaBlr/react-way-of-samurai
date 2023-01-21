import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f1b329ae-33ec-433c-a569-17e2b54270db"
    }
});


export class Api {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }
}


export const getUsers = (pageSize: number, pageNumber: number) => {
    return instance.get(`/users?count=${pageSize}&page=${pageNumber}`)
        .then(response => response.data )
}
export const getProfile = (userId: string) => {
    return instance.get(`/profile/${userId}`)

}

