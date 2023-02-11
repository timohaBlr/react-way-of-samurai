import {PROFILE_ACTIONS_TYPE, ProfileType} from "./types";

export const addNewPostAC = () => {
    return {
        type: PROFILE_ACTIONS_TYPE.ADD_POST,
    } as const
}
export const updateNewPostTextAC = (value: string) => {
    return {
        type: PROFILE_ACTIONS_TYPE.UPDATE_TEXT_AREA,
        payload: {
            value
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
        type: PROFILE_ACTIONS_TYPE.SET_LOADING_STATUS,
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
// export const setAuthorisedUserAvatarAC = (avatar: string) => {
//     return {
//         type: 'SET_AVATAR',
//         payload: {
//             avatar
//         },
//     } as const
// }