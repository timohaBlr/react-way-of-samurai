import {AppThunk} from "../../redux-store";
import {usersAPI, instance} from "../../../Api/api";
import * as actions from "./actions";
import {ACTIONS_TYPE, usersActionTypes, UsersFilterType, UsersInitialStateType} from "./types";

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

export const usersReducer = (state: UsersInitialStateType = initialState,
                             action: usersActionTypes): UsersInitialStateType => {
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


type ThunkType = AppThunk<usersActionTypes>

export const setUsersTC = (pageSize: number, pageNumber: number, filter: UsersFilterType): ThunkType => {
    return (dispatch) => {
        dispatch(actions.setLoadingStatusAC(true))
        usersAPI.getUsers(pageSize, pageNumber, filter)
            .then(data => {
                dispatch(actions.setUsersAC(data.items))
                dispatch(actions.setTotalUserCountAC(data.totalCount))
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                dispatch(actions.setLoadingStatusAC(false))
            })
    }
}

export const followUserTC = (userId: string): ThunkType => {
    return dispatch => {
        dispatch(actions.setLoadingStatusAC(true))
        dispatch(actions.toggleFollowingAC(userId, true))
        instance.post('/follow/' + userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(actions.changeFollowStatusAC(userId))
                    dispatch(actions.toggleFollowingAC(userId, false))
                }
            })
            .catch(err => {
                console.log(err)
                alert('Сервер не дал разрешения set новый фолоу');
            })
            .finally(() => {
                dispatch(actions.toggleFollowingAC(userId, false))
                dispatch(actions.setLoadingStatusAC(false))
            })
    }
}
export const unfollowUserTC = (userId: string): ThunkType => {
    return dispatch => {
        dispatch(actions.setLoadingStatusAC(true))
        dispatch(actions.toggleFollowingAC(userId, true))
        instance.delete('/follow/' + userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(actions.changeFollowStatusAC(userId))
                    dispatch(actions.toggleFollowingAC(userId, false))
                }
            })
            .catch(err => {
                console.log(err)
                alert('Сервер не дал разрешения set новый фолоу');
            })
            .finally(() => {
                dispatch(actions.toggleFollowingAC(userId, false))
                dispatch(actions.setLoadingStatusAC(false))
            })
    }
}