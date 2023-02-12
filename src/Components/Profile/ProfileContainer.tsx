import {connect} from "react-redux";
import React from "react";
import {ProfileClass} from "./ProfileClass";
import {AppDispatchType, AppRootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRoute} from "../../hoc/withRoute";
import {ProfileType} from "../../redux/reducers/profile/types";
import {setLoggedInUserTC} from "../../redux/reducers/profile/profile-reducer";

export type MapStatePropsTypeType = {
    loadingStatus: boolean
    // displayedProfile: ProfileType | null
    loggedInUser: ProfileType | null
}
export type MapDispatchToPropsType = {
    setLoggedInUserTC: (userId: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsTypeType => {
    return {
        loadingStatus: state.profilePage.loadingStatus,
        loggedInUser: state.profilePage.loggedInUser,
        // displayedProfile: state.profilePage.displayedProfile,
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        setLoggedInUserTC: (userId: string) => {
            dispatch(setLoggedInUserTC(userId))
        },
    }
}


export const ProfileContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRoute,
    React.memo,
)(ProfileClass)



