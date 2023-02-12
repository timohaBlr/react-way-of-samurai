import {PROFILE_ACTIONS_TYPE, ProfileType} from "./types";

export const addPostAC = (postText: string) => {
    return {
        type: PROFILE_ACTIONS_TYPE.ADD_POST,
        payload: {
            postText
        }
    } as const
}
export const setLoggedInUserAC = (loggedInUser: ProfileType | null) => {
    return {
        type: PROFILE_ACTIONS_TYPE.SET_LOGGED_USER,
        payload: {
            loggedInUser,
        },
    } as const
}
export const setDisplayedProfileAC = (displayedProfile: ProfileType| null) => {
    return {
        type: PROFILE_ACTIONS_TYPE.SET_DISPLAYED_PROFILE,
        payload: {
             displayedProfile,
        },
    } as const
}
export const setLoadingStatusAC = (loadingStatus: boolean) => {
    return {
        type: PROFILE_ACTIONS_TYPE.SET_PROFILE_LOADING_STATUS,
        payload: {
            loadingStatus,
        },
    } as const
}
export const setStatusAC = (status: string) => {
    return {
        type: PROFILE_ACTIONS_TYPE.SET_STATUS,
        payload: {
            status,
        },
    } as const
}