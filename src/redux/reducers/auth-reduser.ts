enum ACTION_TYPES {
    SET_AUTHORISED_USER = 'SET_AUTHORISED_USER',
}
export type DataType = Omit<InitialStateType, 'isLogin'>
type SetAuthorisedUsedActionType = ReturnType<typeof setAuthorisedUsedAC>
type ActionType = SetAuthorisedUsedActionType
export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isLogin: boolean
}
export const initialState: InitialStateType = {} as InitialStateType

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ACTION_TYPES.SET_AUTHORISED_USER:
            return {...state, ...action.payload, isLogin: true};
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