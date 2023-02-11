import {ACTIONS_TYPE, UsersFilterType, UserType} from "./types";

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