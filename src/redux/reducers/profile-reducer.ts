import {AppThunk} from "../redux-store";
import {profileAPI} from "../../Api/api";

enum PROFILE_ACTIONS_TYPE {
    UPDATE_TEXT_AREA = 'UPDATE_TEXT_AREA',
    ADD_POST = 'ADD_POST',
    SET_PROFILE = 'SET_PROFILE',
    SET_LOADING_STATUS = 'SET_LOADING_STATUS',
    SET_STATUS = 'SET_STATUS',
}


type ActionsType = UpdateNewPostTextType | AddNewPostType | SetProfileActionType
    | SetLoadingStatusActionType | SetStatusAT
type AddNewPostType = ReturnType<typeof addNewPostAC>
type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextAC>
type SetProfileActionType = ReturnType<typeof setProfileAC>
type SetLoadingStatusActionType = ReturnType<typeof setLoadingStatusAC>
type SetStatusAT = ReturnType<typeof setStatusAC>

export type ProfileInitialStateType = {
    loggedInUser: ProfileType | null
    displayedProfile: ProfileType | null
    status: string
    posts: Array<PostsType>
    newPostText: string
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
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

const defaultUser: ProfileType = {
    aboutMe: 'Programmer',
    contacts: {
        facebook: null,
        website: 'websiteUrl',
        vk: null,
        twitter: null,
        instagram: null,
        youtube: null,
        github: null,
        mainLink: null,
    },
    lookingForAJob: true,
    lookingForAJobDescription: 'React',
    fullName: 'Timofei',
    userId: '1',
    photos: {
        small: null,
        large: null,
    },
};

export const initialState = {
    loggedInUser:  null,
    displayedProfile:  null,
    status: '',
    loadingStatus: false,
    posts: [
        {id: 1, message: 'Hello', likesCount: 4},
        {id: 2, message: 'Bonjour', likesCount: 5},
        // {id: 3, message: 'Privet', likesCount: 6},
    ],
    newPostText: '',
};
export const profileReducer = (state: ProfileInitialStateType = initialState,
                               action: ActionsType): ProfileInitialStateType => {
    switch (action.type) {
        case PROFILE_ACTIONS_TYPE.UPDATE_TEXT_AREA:
            return {...state, newPostText: action.payload.value};
        case PROFILE_ACTIONS_TYPE.ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    message: state.newPostText,
                    likesCount: 5,
                }],
                newPostText: ''
            };
        case PROFILE_ACTIONS_TYPE.SET_PROFILE:
            return {
                ...state,
                loggedInUser: action.payload.response
            };
        case PROFILE_ACTIONS_TYPE.SET_LOADING_STATUS:
            return {
                ...state,
                loadingStatus: action.payload.loadingStatus
            };
        case PROFILE_ACTIONS_TYPE.SET_STATUS:
            return {
                ...state,
                status: action.payload.status
            };
        default:
            return state;
    }
}

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
export const setProfileAC = (response: ProfileType) => {
    return {
        type: PROFILE_ACTIONS_TYPE.SET_PROFILE,
        payload: {
            response,
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

type ThunkType = AppThunk<ActionsType>

export const setUserProfileTC = (userId: string): ThunkType => {
    return (dispatch) => {
        dispatch(setLoadingStatusAC(true))
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setProfileAC(response.data))
            })
            .catch(err => {
            })
            .finally(() => {
                dispatch(setLoadingStatusAC(false))
            })
    }
}
export const getUserStatusTC = (userId: string): ThunkType => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                console.log(response)
                dispatch(setStatusAC(response.data))
            })
    }
}
export const setUserStatusTC = (status: string): ThunkType => {
    return (dispatch) => {
        profileAPI.setStatus(status)
            .then(response => {

                if (response.data.resultCode === 0) {
                    dispatch(setStatusAC(status))
                }
            })
    }
}

