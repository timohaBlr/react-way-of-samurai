import {APP_INIT_TYPES} from "./app-reducer";

export const setInitializeAppAC = (initialize: boolean) => {
    return {
        type: APP_INIT_TYPES.SET_APP_READY,
        payload: {
            initialize,
        },
    } as const
}