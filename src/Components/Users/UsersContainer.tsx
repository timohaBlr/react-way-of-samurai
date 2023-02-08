import React from "react";
import {connect} from "react-redux";
import {
    followUserTC,
    setPageNumberAC,
    setUsersTC, unfollowUserTC, UsersFilterType, UsersInitialStateType,
    UserType
} from "../../redux/reducers/users-reducer";
import {UsersClass} from "./UsersClass";
import {AppDispatchType, AppRootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export type MapStatePropsType = {
    usersPage: UsersInitialStateType
    // users: UserType[]
    // pageSize: number
    // pageNumber: number
    // loadingStatus: boolean
    // changingFollowing: string[]
}
export type mapDispatchToPropsType = {
    toggleFollow: (userId: string) => void
    toggleUnfollow: (userId: string) => void
    setUsers: (pageSize: number, pageNumber: number, filter: UsersFilterType) => void
    setPageNumber: (pageNumber: number) => void
}
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        // users: state.usersPage.users,
        // pageSize: state.usersPage.pageSize,
        // pageNumber: state.usersPage.pageNumber,
        // loadingStatus: state.usersPage.loadingStatus,
        // changingFollowing: state.usersPage.changingFollowing,
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType): mapDispatchToPropsType => {
    return {
        toggleFollow: (userId: string) => {
            dispatch(followUserTC(userId))
        },
        toggleUnfollow: (userId: string) => {
            dispatch(unfollowUserTC(userId))
        },
        setUsers: (pageSize: number, pageNumber: number, filter: UsersFilterType) => {
            dispatch(setUsersTC(pageSize, pageNumber, filter))
        },
        setPageNumber: (pageNumber) => {
            dispatch(setPageNumberAC(pageNumber))
        },
    }
}


export const UsersContainer = compose<React.ComponentType>(
    React.memo,
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(UsersClass)
