import { AppThunk} from "../redux-store";
import {profileAPI, usersAPI} from "../../Api/api";
import {AnyAction} from "redux";
import {setInitializeAppAC} from "./app/actions";
import {setUserProfileTC} from "./profile-reducer";

enum ACTION_TYPES {
    SET_AUTHORISED_USER = 'SET_AUTHORISED_USER',
    SET_AVATAR = 'SET_AVATAR',
}

export type AuthDataType = Omit<InitialStateType, 'isLogin'>
type SetAuthorisedUserActionType = ReturnType<typeof setAuthorisedUserAC>
// type SetAuthorisedUserAvatarActionType = ReturnType<typeof setAuthorisedUserAvatarAC>
export type ActionsType = SetAuthorisedUserActionType
    // | SetAuthorisedUserAvatarActionType
export type InitialStateType = {
    id: number | null
    email: string
    login: string
    isLogin: boolean
    // avatar: string
}
export const initialState: InitialStateType = {
    isLogin:false
} as InitialStateType

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPES.SET_AUTHORISED_USER:

            return {...state, ...action.payload};
        // case ACTION_TYPES.SET_AVATAR:
        //     return {...state, avatar: action.payload.avatar};
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

// export const setAuthorisedUserAvatarAC = (avatar: string) => {
//     return {
//         type: ACTION_TYPES.SET_AVATAR,
//         payload: {
//             avatar
//         },
//     } as const
// }



export const setAuthorisedUserTC = (): AppThunk<AnyAction> => {
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
                // dispatch(setAuthorisedUsedAvatarTC(id))
            })
            .catch(err => {
            })
            .finally(()=> {
                dispatch(setInitializeAppAC(true))
            }
    )
    }
}
export const setAuthorisedUsedAvatarTC = (id: number): AppThunk<AnyAction> => {
    return (dispatch) => {
        usersAPI.getUserAvatar(id)
            .then(ava => {
                // dispatch(setAuthorisedUserAvatarAC(ava.small))
            })
            .catch(err => {
            })
            .finally()
    }
}
export const logOutTC = (): AppThunk<AnyAction> => {
    return (dispatch) => {
        usersAPI.logOut()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthorisedUserAC({id: null,  login: '', email: ''},
                        false))
                }
            })
            .catch(err => {
            })
            .finally()
    }
}
export const logInTC = (email: string, password: string, rememberMe: boolean,): AppThunk<AnyAction> => {
    return (dispatch) => {
        usersAPI.logIn(email,password,rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthorisedUserAC({id: response.data.id,
                            login: '', email},
                        true))
                }
            })
            .catch(err => {
            })
            .finally()
    }
}


export const initial = (): AppThunk<AnyAction> => {
    return async (dispatch) => {
         const {data} = await profileAPI.getUserToken()
        console.log('thunk')


                if (data.resultCode === 0) {
                    dispatch(setAuthorisedUserAC(data.data, true))

    }}
}