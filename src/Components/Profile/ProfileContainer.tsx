import {connect} from "react-redux";
import {
    addNewPostAC, PostsType,  setUserProfileTC,
    updateNewPostTextAC,
    UserType
} from "../../redux/reducers/profile-reducer";
import React from "react";
import {useParams} from "react-router-dom";
import {ProfileClass} from "./ProfileClass";
import {AppDispatchType, AppRootStateType} from "../../redux/redux-store";

export type MapStatePropsTypeType = {
    user: UserType | null
    posts: Array<PostsType>
    newPostText: string
    loadingStatus: boolean
}
export type MapDispatchToPropsType = {
    addMessage: () => void
    updateTextArea: (value: string) => void
    setProfile: (userId: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsTypeType => {
    return {
        newPostText: state.profilePage.newPostText,
        user: state.profilePage.user,
        posts: state.profilePage.posts,
        loadingStatus: state.profilePage.loadingStatus,
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
    }
}
type ProfilePropsType = {
    user: UserType | null
    posts: Array<PostsType>
    newPostText: string
    addMessage: () => void
    updateTextArea: (value: string) => void
    loadingStatus: boolean
    setProfile: (userId: string) => void
    userId?: string
}


const TakeParams = (props: ProfilePropsType) => {
    let {userId} = useParams()
    return <ProfileClass {...props} userId={userId}/>
}


export const ProfileContainer = React.memo(connect(mapStateToProps, mapDispatchToProps)(TakeParams))

