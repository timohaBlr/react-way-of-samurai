export type UsersInitialStateType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    pageNumber: number
    loadingStatus: boolean
}
export type UserType = {
    name: string
    id: string
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
    location: LocationType
}
type LocationType = {
    country: string
    city: string
}

const initialState: UsersInitialStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 54,
    pageNumber: 1,
    loadingStatus: true,
}

export enum ACTIONS_TYPE {
    SET_PAGE_NUMBER = 'SET_PAGE_NUMBER',
    CHANGE_FOLLOW_STATUS = 'CHANGE_FOLLOW_STATUS',
    SET_USERS = 'SET_USERS',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    SET_LOADING_STATUS = 'SET_LOADING_STATUS',
}

export const usersReducer = (state: UsersInitialStateType = initialState,
                             action: ActionTypes): UsersInitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_FOLLOW_STATUS:
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userId
                    ? {...user, followed: !user.followed}
                    : user)
            };
        case ACTIONS_TYPE.SET_USERS:
            return {...state, users: action.payload.users};
        case ACTIONS_TYPE.SET_TOTAL_USERS_COUNT:
            return {...state, totalUserCount: action.payload.totalUserCount};
        case ACTIONS_TYPE.SET_PAGE_NUMBER:
            return {...state, pageNumber: action.payload.pageNumber};
        case ACTIONS_TYPE.SET_LOADING_STATUS:
            return {...state, loadingStatus: action.payload.loadingStatus};
        default:
            return state;
    }
}
type ActionTypes = ChangeFollowStatusType | SetUsersActionType | setPageNumberActionType
    | setTotalUserCountActionType | setLoadingStatusActionType
type ChangeFollowStatusType = ReturnType<typeof changeFollowStatusAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
type setPageNumberActionType = ReturnType<typeof setPageNumberAC>
type setTotalUserCountActionType = ReturnType<typeof setTotalUserCountAC>
type setLoadingStatusActionType = ReturnType<typeof setLoadingStatusAC>

export const changeFollowStatusAC = (userId: string) => {
    return {
        type: ACTIONS_TYPE.CHANGE_FOLLOW_STATUS,
        payload: {
            userId,
        },
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: ACTIONS_TYPE.SET_USERS,
        payload: {
            users,
        },
    } as const
}
export const setPageNumberAC = (pageNumber: number) => {
    return {
        type: ACTIONS_TYPE.SET_PAGE_NUMBER,
        payload: {
            pageNumber,
        },
    } as const
}
export const setTotalUserCountAC = (totalUserCount: number) => {
    return {
        type: ACTIONS_TYPE.SET_TOTAL_USERS_COUNT,
        payload: {
            totalUserCount,
        },
    } as const
}
export const setLoadingStatusAC = (loadingStatus: boolean) => {
    return {
        type: ACTIONS_TYPE.SET_LOADING_STATUS,
        payload: {
            loadingStatus,
        },
    } as const
}