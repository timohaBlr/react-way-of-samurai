import {AppThunk} from "../../redux-store";
import {profileAPI} from "../../../Api/api";
import * as actions from "../profile/actions";
import {
    authActionsType,
    setAuthorisedUserAvatarAC,
} from "../auth-reduser";
import {PROFILE_ACTIONS_TYPE, ProfileActionsType, ProfileInitialStateType, ProfileType} from "./types";



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

export const profileInitialState = {
    loggedInUser: null,
    displayedProfile: null,
    status: '',
    loadingStatus: false,
    posts: [
        {id: 1, message: 'Hello', likesCount: 4},
        {id: 2, message: 'Bonjour', likesCount: 5},
        // {id: 3, message: 'Privet', likesCount: 6},
    ],
    newPostText: '',
};
export const profileReducer = (state: ProfileInitialStateType = profileInitialState,
                               action: ProfileActionsType): ProfileInitialStateType => {
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
        case PROFILE_ACTIONS_TYPE.SET_LOGGED_USER:
            return {
                ...state,
                loggedInUser: action.payload.loggedInUser
            };
        case PROFILE_ACTIONS_TYPE.SET_DISPLAYED_PROFILE:
            return {
                ...state,
                displayedProfile: action.payload.displayedProfile
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
//

type ThunkType = AppThunk<ProfileActionsType| authActionsType>

export const setLoggedInUserTC = (userId: string): ThunkType => {
    return (dispatch) => {
        // dispatch(actions.setLoadingStatusAC(true))
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(actions.setLoggedInUserAC(response.data))
                dispatch(setAuthorisedUserAvatarAC(response.data.photos.large))
            })
            .catch(err => {
            })
            .finally(() => {
                // dispatch(actions.setLoadingStatusAC(false))
            })
    }
}
export const setDisplayedProfileTC = (userId: string): ThunkType  => {
    return (dispatch) => {
        dispatch(actions.setLoadingStatusAC(true))
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(actions.setDisplayedProfileAC(response.data))
            })
            .catch(err => {
            })
            .finally(() => {
                dispatch(actions.setLoadingStatusAC(false))
            })
    }
}
export const getUserStatusTC = (userId: string): ThunkType => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                console.log(response)
                dispatch(actions.setStatusAC(response.data))
            })
    }
}
export const setUserStatusTC = (status: string): ThunkType => {
    return (dispatch) => {
        profileAPI.setStatus(status)
            .then(response => {

                if (response.data.resultCode === 0) {
                    dispatch(actions.setStatusAC(status))
                }
            })
    }
}

