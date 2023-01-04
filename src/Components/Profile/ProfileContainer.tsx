import {connect} from "react-redux";
import {AppDispatchType, AppStateType} from "../../redux/hooks";
import {addNewPostAC, ProfileInitialStateType, updateNewPostTextAC} from "../../redux/reducers/new-post-reducer";
import {Profile} from "./Profile";
import React from "react";

export type MapStatePropsType = {
    profilePage: ProfileInitialStateType
}
export type mapDispatchToProps = {
    addMessage: () => void
    updateTextArea: (value: string) => void
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType): mapDispatchToProps => {
    return {
        addMessage: () => {
            dispatch(addNewPostAC())
        },
        updateTextArea: (value: string) => {
            dispatch(updateNewPostTextAC(value))
        }

    }
}
export const ProfileContainer = React.memo(connect(mapStateToProps, mapDispatchToProps)(Profile))