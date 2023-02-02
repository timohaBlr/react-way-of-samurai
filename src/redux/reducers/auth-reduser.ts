import { AppThunk} from "../redux-store";
import {fetching_API} from "../../Api/api";
import {  setUserProfileTC} from "./profile-reducer";

enum ACTION_TYPES {
    SET_AUTHORISED_USER = 'SET_AUTHORISED_USER',
    SET_AVATAR = 'SET_AVATAR',
}

export type DataType = Omit<InitialStateType, 'isLogin'>
type SetAuthorisedUsedActionType = ReturnType<typeof setAuthorisedUsedAC>
type SetAuthorisedUsedAvatarActionType = ReturnType<typeof setAuthorisedUsedAvatarAC>
type ActionsType = SetAuthorisedUsedActionType | SetAuthorisedUsedAvatarActionType
export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isLogin: boolean
    avatar: string | null
}
export const initialState: InitialStateType = {} as InitialStateType

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPES.SET_AUTHORISED_USER:
            return {...state, ...action.payload, isLogin: true};
        case ACTION_TYPES.SET_AVATAR:
            return {...state, avatar: action.payload.avatar};
        default:
            return state;
    }
}


export const setAuthorisedUsedAC = (data: DataType) => {
    return {
        type: ACTION_TYPES.SET_AUTHORISED_USER,
        payload: {
            ...data
        },
    } as const
}

export const setAuthorisedUsedAvatarAC = (avatar: string) => {
    return {
        type: ACTION_TYPES.SET_AVATAR,
        payload: {
            avatar
        },
    } as const
}

type ThunkType = AppThunk<ActionsType>
export const setAuthorisedUsedTC = (): ThunkType => {
    return (dispatch) => {
        fetching_API.getUserToken()
            .then(data => {
                dispatch(setAuthorisedUsedAC(data))
                return data.id
            })
            .then(id => {
                dispatch(setUserProfileTC(id))
                dispatch(setAuthorisedUsedAvatarTC(id))
            })
            .catch(err => {
                console.log(err)
            })
            .finally()
    }
}
export const setAuthorisedUsedAvatarTC = (id: number): ThunkType => {
    return (dispatch) => {
        fetching_API.getUserAvatar(id)
            .then(ava => {
                console.log(ava)
                dispatch(setAuthorisedUsedAvatarAC(ava.small))
            })
            .catch(err => {
                console.log(err)
            })
            .finally()
    }
}