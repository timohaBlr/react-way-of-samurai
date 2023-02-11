import {APP_INIT_TYPES} from "./app-reducer";

export const setInitializeAppAC = (appReady: boolean) => {
    return {
        type: APP_INIT_TYPES.SET_APP_READY,
        payload: {
            appReady: appReady,
        },
    } as const
}