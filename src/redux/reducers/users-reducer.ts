
export type UsersInitialStateType = {
    users: UserType[]
}
export type UserType = {
    id: string
    name: string
    photos: {
        small: string | undefined
        large: string | undefined
    }
    status: string |null
    location: LocationType
    followed: boolean
}
type LocationType = {
    country: string
    city: string
}
type ActionTypes = ChangeFollowStatusType | SetUsersActionType
type ChangeFollowStatusType = ReturnType<typeof changeFollowStatusAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
const CHANGE_FOLLOW_STATUS = 'CHANGE_FOLLOW_STATUS'
const SET_USERS = 'SET_USERS'
const initialState: UsersInitialStateType = {
    users: [

    ],
}
export const usersReducer = (state: UsersInitialStateType = initialState,
                             action: ActionTypes): UsersInitialStateType => {
    switch (action.type) {
        case CHANGE_FOLLOW_STATUS:
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userId
                    ? {...user, followed: !user.followed}
                    : user)
            };
        case SET_USERS:
            return {...state, users: action.payload.users};
        default:
            return state;
    }
}

export const changeFollowStatusAC = (userId: string) => {
    return {
        type: CHANGE_FOLLOW_STATUS,
        payload: {
            userId,
        },
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users,
        },
    } as const
}