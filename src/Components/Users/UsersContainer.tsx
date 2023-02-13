import React from "react";
import {connect} from "react-redux";
import {
    followUserTC,
    setUsersTC, unfollowUserTC,
} from "../../redux/reducers/users/users-reducer";
import {UsersClass} from "./UsersClass";
import {AppDispatchType, AppRootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {setPageNumberAC} from "../../redux/reducers/users/actions";
import {UsersFilterType, UsersInitialStateType} from "../../redux/reducers/users/types";
import {selectUsersPage} from "../../redux/selectors";


export type MapStatePropsType = {
    usersPage: UsersInitialStateType
}
export type mapDispatchToPropsType = {
    toggleFollow: (userId: string) => void
    toggleUnfollow: (userId: string) => void
    setUsers: (pageSize: number, pageNumber: number, filter: UsersFilterType) => void
    setPageNumber: (pageNumber: number) => void
}
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        usersPage: selectUsersPage(state),
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
