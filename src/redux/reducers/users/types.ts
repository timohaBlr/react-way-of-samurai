import {InferValueTypes} from "../../types";
import * as actions from "./actions";

export type usersActionTypes = ReturnType<InferValueTypes<typeof actions>>

export type UsersInitialStateType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    pageNumber: number
    loadingStatus: boolean
    changingFollowing: string[]
    filter: UsersFilterType
}
export type UsersFilterType = {
    findUser: string
    onlyFriends: string
}
export type UserType = {
    name: string
    id: string
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
    location: LocationType
}
type LocationType = {
    country: string
    city: string
}

export enum ACTIONS_TYPE {
    SET_PAGE_NUMBER = 'SET_PAGE_NUMBER',
    CHANGE_FOLLOW_STATUS = 'CHANGE_FOLLOW_STATUS',
    SET_USERS = 'SET_USERS',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    SET_LOADING_STATUS = 'SET_LOADING_STATUS',
    TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING',
    SET_FILTER = 'SET_FILTER',
}