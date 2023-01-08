import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppDispatchType, AppStateType} from "../../redux/hooks";
import {changeFollowStatusAC, setUsersAC, UsersInitialStateType, UserType} from "../../redux/reducers/users-reducer";
import {UsersClass} from "./UsersC";


export type MapStatePropsType = {
    usersPage: UsersInitialStateType
}
export type mapDispatchToProps = {
    changeFollowStatus: (userId: string) => void
    setUsers: (users: UserType[]) => void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType): mapDispatchToProps => {
    return {
        changeFollowStatus: (userId: string) => {
            dispatch(changeFollowStatusAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = React.memo(connect(mapStateToProps, mapDispatchToProps)(UsersClass))