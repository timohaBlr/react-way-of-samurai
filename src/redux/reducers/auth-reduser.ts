import {AppThunk} from "../redux-store";
import {profileAPI, userAPI} from "../../Api/api";
import {setUserProfileTC} from "./profile-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

enum ACTION_TYPES {
    SET_AUTHORISED_USER = 'SET_AUTHORISED_USER',
    SET_AVATAR = 'SET_AVATAR',
}

export type AuthDataType = Omit<InitialStateType, 'isLogin'>
type SetAuthorisedUserActionType = ReturnType<typeof setAuthorisedUserAC>
type SetAuthorisedUserAvatarActionType = ReturnType<typeof setAuthorisedUserAvatarAC>
type ActionsType = SetAuthorisedUserActionType | SetAuthorisedUserAvatarActionType
export type InitialStateType = {
    id: number | null
    email: string
    login: string
    isLogin: boolean
    avatar: string
}
export const initialState: InitialStateType = {} as InitialStateType

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPES.SET_AUTHORISED_USER:
            debugger
            return {...state, ...action.payload};
        case ACTION_TYPES.SET_AVATAR:
            return {...state, avatar: action.payload.avatar};
        default:
            return state;
    }
}


export const setAuthorisedUserAC = (data: AuthDataType, isLogin: boolean) => {
    return {
        type: ACTION_TYPES.SET_AUTHORISED_USER,
        payload: {
            ...data,
            isLogin,
        },
    } as const
}

export const setAuthorisedUserAvatarAC = (avatar: string) => {
    return {
        type: ACTION_TYPES.SET_AVATAR,
        payload: {
            avatar
        },
    } as const
}


type ThunkType = AppThunk<ActionsType>
export const setAuthorisedUserTC = (): ThunkType => {
    return (dispatch) => {
        profileAPI.getUserToken()
            .then(response => {
                const data = response.data
                if (data.resultCode === 0) {
                    dispatch(setAuthorisedUserAC(data.data, true))
                    return data.data.id
                }
            })
            .then(id => {
                dispatch(setUserProfileTC(id))
                dispatch(setAuthorisedUsedAvatarTC(id))
            })
            .catch(err => {
            })
            .finally()
    }
}
export const setAuthorisedUsedAvatarTC = (id: number): ThunkType => {
    return (dispatch) => {
        userAPI.getUserAvatar(id)
            .then(ava => {
                dispatch(setAuthorisedUserAvatarAC(ava.small))
            })
            .catch(err => {
            })
            .finally()
    }
}
export const logOutTC = (): ThunkType => {
    return (dispatch) => {
        userAPI.logOut()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthorisedUserAC({id: null, avatar: '', login: '', email: ''},
                        false))
                }
            })
            .catch(err => {
            })
            .finally()
    }
}
export const logInTC = (email: string, password: string, rememberMe: boolean,): ThunkType => {
    return (dispatch) => {
        userAPI.logIn(email,password,rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthorisedUserAC({id: response.data.id,
                            avatar: '', login: '', email},
                        true))
                }
            })
            .catch(err => {
            })
            .finally()
    }
}
