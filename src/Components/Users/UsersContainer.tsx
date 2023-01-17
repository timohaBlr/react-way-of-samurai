import React from "react";
import {connect} from "react-redux";
import {AppDispatchType, AppStateType} from "../../redux/hooks";
import {
    changeFollowStatusAC, setLoadingStatusAC,
    setPageNumberAC, setTotalUserCountAC,
    setUsersAC,
    UserType
} from "../../redux/reducers/users-reducer";
import {UsersClass} from "./UsersClass";


export type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    pageNumber: number
    loadingStatus: boolean

}
export type mapDispatchToProps = {
    changeFollowStatus: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setTotalUserCount: (totalUserCount: number) => void
    setPageNumber: (pageNumber: number) => void
    setLoadingStatus: (loadingStatus: boolean) => void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        pageNumber: state.usersPage.pageNumber,
        loadingStatus: state.usersPage.loadingStatus,
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType): mapDispatchToProps => {
    return {
        changeFollowStatus: (userId: string) => {
            dispatch(changeFollowStatusAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalUserCount: (totalUserCount) => {
            dispatch(setTotalUserCountAC(totalUserCount))
        },
        setPageNumber: (pageNumber) => {
            dispatch(setPageNumberAC(pageNumber))
        },
        setLoadingStatus: (loadingStatus) => {
            dispatch(setLoadingStatusAC(loadingStatus))
        },
    }
}

export const UsersContainer = React.memo(connect(mapStateToProps, mapDispatchToProps)(UsersClass))