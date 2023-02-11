import {connect} from "react-redux";
import { setDisplayedProfileTC,} from "../../redux/reducers/profile/profile-reducer";
import React from "react";
import {ProfileClass} from "./ProfileClass";
import {AppDispatchType, AppRootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRoute} from "../../hoc/withRoute";
import {ProfileType} from "../../redux/reducers/profile/types";

export type MapStatePropsTypeType = {
    // loadingStatus: boolean
    displayedProfile: ProfileType | null
    loggedInUser: ProfileType | null
}
export type MapDispatchToPropsType = {
    setDisplayedProfileTC: (userId: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsTypeType => {
    return {
        // loadingStatus: state.profilePage.loadingStatus,
        loggedInUser: state.profilePage.loggedInUser,
        displayedProfile: state.profilePage.displayedProfile,
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        setDisplayedProfileTC: (userId: string) => {
            dispatch(setDisplayedProfileTC(userId))
        },
    }
}


export const ProfileContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRoute,
    React.memo,
)(ProfileClass)



