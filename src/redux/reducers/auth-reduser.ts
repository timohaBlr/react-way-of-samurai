import {AppThunk} from "../redux-store";
import {profileAPI, usersAPI} from "../../Api/api";
import {AnyAction} from "redux";
import {setInitializeAppAC} from "./app/actions";
import {setLoggedInUserTC} from "./profile/profile-reducer";
import * as actions from "./profile/actions";

enum ACTION_TYPES {
    SET_AUTHORISED_USER = 'SET_AUTHORISED_USER',
    SET_AVATAR = 'SET_AVATAR',
}

export type AuthDataType = Omit<authInitialStateType, 'isLogin'>
type SetAuthorisedUserActionType = ReturnType<typeof setAuthorisedUserAC>
type SetAuthorisedUserAvatarActionType = ReturnType<typeof setAuthorisedUserAvatarAC>
export type authActionsType = SetAuthorisedUserActionType
    | SetAuthorisedUserAvatarActionType
export type authInitialStateType = {
    id: number | null
    email: string
    login: string
    isLogin: boolean
    avatar?: string
}
export const initialState: authInitialStateType = {
    isLogin: false
} as authInitialStateType

export const authReducer = (state: authInitialStateType = initialState, action: authActionsType): authInitialStateType => {
    switch (action.type) {
        case ACTION_TYPES.SET_AUTHORISED_USER:

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

export const setAuthorisedUserTC = (): AppThunk<AnyAction> => {
    return (dispatch) => {
        profileAPI.getUserToken()
            .then(response => {
                const data = response.data
                if (data.resultCode === 0) {
                    dispatch(setAuthorisedUserAC(data.data, true))
                    dispatch(setLoggedInUserTC(data.data.id))
                    // dispatch(setAuthorisedUserAvatarTC(data.data.id))
                }
            })
            .catch(err => {
            })
            .finally(() => {
                    dispatch(setInitializeAppAC(true))
                }
            )
    }
}
export const setAuthorisedUserAvatarTC = (id: string): AppThunk<AnyAction> => {
    return (dispatch) => {
        profileAPI.getUserAvatar(id)
            .then(response => {
                dispatch(setAuthorisedUserAvatarAC(response.small))
            })
            .catch(err => {
            })
            .finally(() => {
                }
            )
    }
}


export const logOutTC = (): AppThunk<AnyAction> => {
    return (dispatch) => {
        usersAPI.logOut()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthorisedUserAC({id: null, login: '', email: ''}, false))
                    dispatch(setAuthorisedUserAvatarAC(''))
                    dispatch(actions.setLoggedInUserAC(null))
                }
            })
            .catch(err => {
            })
            .finally()
    }
}
export const logInTC = (email: string, password: string, rememberMe: boolean,): AppThunk<AnyAction> => {
    return (dispatch) => {
        usersAPI.logIn(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthorisedUserAC({
                            id: response.data.id,
                            login: '', email
                        },
                        true))
                    dispatch(setAuthorisedUserTC())
                }
            })
            .catch(err => {
            })
            .finally()
    }
}

