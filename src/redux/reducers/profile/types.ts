import {InferValueTypes} from "../../types";
import * as actions from "./actions";

export type ProfileActionsType = ReturnType<InferValueTypes<typeof actions>>

export enum PROFILE_ACTIONS_TYPE {
    ADD_POST = 'ADD_POST',
    SET_LOGGED_USER = 'SET_LOGGED_USER',
    SET_PROFILE_LOADING_STATUS = 'SET_PROFILE_LOADING_STATUS',
    SET_STATUS = 'SET_STATUS',
    ADD_LIKE = 'ADD_LIKE',
}

export type ProfileInitialStateType = {
    loggedInUser: ProfileType | null
    status: string
    posts: Array<PostType>
    loadingStatus: boolean
}
export type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
export type ProfileType = {
    aboutMe: string | null
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: string
    photos: {
        small: string | null
        large: string | null
    }
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}