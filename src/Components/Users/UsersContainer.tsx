import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppDispatchType, AppStateType} from "../../redux/hooks";
import {changeFollowStatusAC, UsersInitialStateType} from "../../redux/reducers/users-reducer";


export type MapStatePropsType = {
    usersPage: UsersInitialStateType
}
export type mapDispatchToProps = {
    changeFollowStatus: (userId: string) => void
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
        }
    }
}

export const UsersContainer = React.memo(connect(mapStateToProps, mapDispatchToProps)(Users))