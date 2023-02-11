import * as actions from './actions';
import {AppThunk} from "../../redux-store";
import {AnyAction} from "redux";
import {profileAPI} from "../../../Api/api";
import {setLoggedInUserTC} from "../profile/profile-reducer";
import {setInitializeAppAC} from "./actions";
import {setAuthorisedUserAC} from "../auth-reduser";

type InferValueTypes<T> = T extends { [key: string]: infer U }
    ? U
    : never;
type AppActionsType = ReturnType<InferValueTypes<typeof actions>>

type AppInitialStateType = {
    appReady: boolean
}

export enum APP_INIT_TYPES {
    SET_APP_READY = 'SET_APP_READY',
}

const appInitialState: AppInitialStateType = {
    appReady: false
}
export const appReducer = (state: AppInitialStateType = appInitialState, action: AppActionsType): AppInitialStateType => {
    switch (action.type) {
        case APP_INIT_TYPES.SET_APP_READY:
            return {...state, appReady: action.payload.appReady};
        default:
            return state;
    }
}

