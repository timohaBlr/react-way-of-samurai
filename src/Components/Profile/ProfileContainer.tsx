import {connect} from "react-redux";
import {
    setUserProfileTC,
    ProfileType
} from "../../redux/reducers/profile-reducer";
import React from "react";
import {ProfileClass} from "./ProfileClass";
import {AppDispatchType, AppRootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRoute} from "../../hoc/withRoute";

export type MapStatePropsTypeType = {
    displayedProfile: ProfileType | null
    loggedInUser: ProfileType | null
}
export type MapDispatchToPropsType = {
    setProfile: (userId: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsTypeType => {
    return {
        loggedInUser: state.profilePage.loggedInUser,
        displayedProfile: state.profilePage.displayedProfile,
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        setProfile: (userId: string) => {
            dispatch(setUserProfileTC(userId))
        },
    }
}


export const ProfileContainer = compose<React.ComponentType>(
    React.memo,
    // withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRoute
)(ProfileClass)



