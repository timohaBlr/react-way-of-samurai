import {connect} from "react-redux";
import {
    addNewPostAC, getUserStatusTC, PostsType, setUserProfileTC, setUserStatusTC,
    updateNewPostTextAC,
    UserType
} from "../../redux/reducers/profile-reducer";
import React from "react";
import {ProfileClass} from "./ProfileClass";
import {AppDispatchType, AppRootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRoute} from "../../hoc/withRoute";

export type MapStatePropsTypeType = {
    user: UserType | null
    posts: Array<PostsType>
    newPostText: string
    loadingStatus: boolean
    status: string
}
export type MapDispatchToPropsType = {
    addMessage: () => void
    updateTextArea: (value: string) => void
    setProfile: (userId: string) => void
    setStatus: (status: string) => void
    getStatus: (userId: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsTypeType => {
    return {
        newPostText: state.profilePage.newPostText,
        user: state.profilePage.user,
        posts: state.profilePage.posts,
        loadingStatus: state.profilePage.loadingStatus,
        status: state.profilePage.status,
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addNewPostAC())
        },
        updateTextArea: (value) => {
            dispatch(updateNewPostTextAC(value))
        },
        setProfile: (userId: string) => {
            dispatch(setUserProfileTC(userId))
        },
        setStatus: (status: string) => {
            dispatch(setUserStatusTC(status))
        },
       getStatus: (userId: string) => {
            dispatch(getUserStatusTC(userId))
        },
    }
}


export const ProfileContainer = compose<React.ComponentType>(
    React.memo,
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
    withRoute
)(ProfileClass)



