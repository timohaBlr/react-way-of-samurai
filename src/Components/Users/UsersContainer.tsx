import React from "react";
import {connect} from "react-redux";
import {
    followUserTC,
    setPageNumberAC,
    setUsersTC, unfollowUserTC,
    UserType
} from "../../redux/reducers/users-reducer";
import {UsersClass} from "./UsersClass";
import {AppDispatchType, AppRootStateType} from "../../redux/redux-store";


export type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    pageNumber: number
    loadingStatus: boolean
    changingFollowing: string[]
    isLogin: boolean
}
export type mapDispatchToProps = {
    toggleFollow: (userId: string) => void
    toggleUnfollow: (userId: string) => void
    setUsers: (pageSize: number, pageNumber: number) => void
    setPageNumber: (pageNumber: number) => void
}
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        pageNumber: state.usersPage.pageNumber,
        loadingStatus: state.usersPage.loadingStatus,
        changingFollowing: state.usersPage.changingFollowing,
        isLogin: state.authentication.isLogin
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType): mapDispatchToProps => {
    return {
        toggleFollow: (userId: string) => {
            dispatch(followUserTC(userId))
        },
        toggleUnfollow: (userId: string) => {
            dispatch(unfollowUserTC(userId))
        },
        setUsers: (pageSize: number, pageNumber: number) => {
            dispatch(setUsersTC(pageSize, pageNumber))
        },
        setPageNumber: (pageNumber) => {
            dispatch(setPageNumberAC(pageNumber))
        },
    }
}

export const UsersContainer = React.memo(connect(mapStateToProps, mapDispatchToProps)(UsersClass))