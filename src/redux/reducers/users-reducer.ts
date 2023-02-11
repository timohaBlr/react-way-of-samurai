import {AppThunk} from "../redux-store";
import {usersAPI, instance} from "../../Api/api";

export type UsersInitialStateType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    pageNumber: number
    loadingStatus: boolean
    changingFollowing: string[]
    filter: UsersFilterType
}
export type UsersFilterType = {
    findUser: string
    onlyFriends: string
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

export const initialState: UsersInitialStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 54,
    pageNumber: 1,
    loadingStatus: true,
    changingFollowing: [],
    filter: {
        findUser: '',
        onlyFriends: 'null',
    },
}

export enum ACTIONS_TYPE {
    SET_PAGE_NUMBER = 'SET_PAGE_NUMBER',
    CHANGE_FOLLOW_STATUS = 'CHANGE_FOLLOW_STATUS',
    SET_USERS = 'SET_USERS',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    SET_LOADING_STATUS = 'SET_LOADING_STATUS',
    TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING',
    SET_FILTER = 'SET_FILTER',
}

export const usersReducer = (state: UsersInitialStateType = initialState,
                             action: ActionsType): UsersInitialStateType => {
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
        case ACTIONS_TYPE.TOGGLE_FOLLOWING:
            const userId = action.payload.userId
            if (action.payload.inProgress) {
                return {...state, changingFollowing: [userId]}
            } else return {...state,
                changingFollowing: state.changingFollowing
                    .filter(f => f !== userId)};
        case ACTIONS_TYPE.SET_FILTER:
            return {...state, filter: action.payload.filter};
        default:
            return state;
    }
}
type ActionsType = ChangeFollowStatusType | SetUsersActionType | setPageNumberActionType
    | setTotalUserCountActionType | setLoadingStatusActionType |
    ToggleFollowingActionType | SetFilterActionType
type ChangeFollowStatusType = ReturnType<typeof changeFollowStatusAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
type setPageNumberActionType = ReturnType<typeof setPageNumberAC>
type setTotalUserCountActionType = ReturnType<typeof setTotalUserCountAC>
type setLoadingStatusActionType = ReturnType<typeof setLoadingStatusAC>
type ToggleFollowingActionType = ReturnType<typeof toggleFollowingAC>
type SetFilterActionType = ReturnType<typeof setFilterAC>

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
export const toggleFollowingAC = (userId: string, inProgress: boolean) => {
    return {
        type: ACTIONS_TYPE.TOGGLE_FOLLOWING,
        payload: {
            userId,
            inProgress,
        },
    } as const
}
export const setFilterAC = (filter: UsersFilterType) => {
    return {
        type: ACTIONS_TYPE.SET_FILTER,
        payload: {
            filter
        },
    } as const
}

type ThunkType = AppThunk<ActionsType>

export const setUsersTC = (pageSize: number, pageNumber: number, filter: UsersFilterType): ThunkType => {
    return (dispatch) => {
        dispatch(setLoadingStatusAC(true))
        usersAPI.getUsers(pageSize, pageNumber, filter)
            .then(data => {
                dispatch(setUsersAC(data.items))
                dispatch(setTotalUserCountAC(data.totalCount))
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                dispatch(setLoadingStatusAC(false))
            })
    }
}

export const followUserTC = (userId: string): ThunkType => {
    return dispatch => {
        dispatch(setLoadingStatusAC(true))
        dispatch(toggleFollowingAC(userId, true))
        instance.post('/follow/' + userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(changeFollowStatusAC(userId))
                    dispatch(toggleFollowingAC(userId, false))
                }
            })
            .catch(err => {
                console.log(err)
                alert('Сервер не дал разрешения set новый фолоу');
            })
            .finally(() => {
                dispatch(toggleFollowingAC(userId, false))
                dispatch(setLoadingStatusAC(false))
            })
    }
}
export const unfollowUserTC = (userId: string): ThunkType => {
    return dispatch => {
        dispatch(setLoadingStatusAC(true))
        dispatch(toggleFollowingAC(userId, true))
        instance.delete('/follow/' + userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(changeFollowStatusAC(userId))
                    dispatch(toggleFollowingAC(userId, false))
                }
            })
            .catch(err => {
                console.log(err)
                alert('Сервер не дал разрешения set новый фолоу');
            })
            .finally(() => {
                dispatch(toggleFollowingAC(userId, false))
                dispatch(setLoadingStatusAC(false))
            })
    }
}