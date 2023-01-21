import {connect} from "react-redux";
import {AppDispatchType, AppStateType} from "../../redux/hooks";
import {
    addNewPostAC, PostsType, setProfileAC,
    updateNewPostTextAC,
    UserType
} from "../../redux/reducers/profile-reducer";
import React from "react";
import {setLoadingStatusAC} from "../../redux/reducers/users-reducer";
import {useParams} from "react-router-dom";
import {ProfileClass} from "./ProfileClass";

export type MapStatePropsTypeType = {
    user: UserType | null
    posts: Array<PostsType>
    newPostText: string
    loadingStatus: boolean
}
export type MapDispatchToPropsType = {
    addMessage: () => void
    updateTextArea: (value: string) => void
    setLoadingStatus: (loadingStatus: boolean) => void
    setProfile: (response: UserType) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsTypeType => {
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
        setLoadingStatus: (loadingStatus) => {
            dispatch(setLoadingStatusAC(loadingStatus))
        },
        setProfile: (response) => {
            dispatch(setProfileAC(response))
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
    setLoadingStatus: (loadingStatus: boolean) => void
    setProfile: (response: UserType) => void
    userId?: string
}


const TakeParams = (props: ProfilePropsType) => {
    let {userId} = useParams()
    return <ProfileClass {...props} userId={userId}/>
}


export const ProfileContainer = React.memo(connect(mapStateToProps, mapDispatchToProps)(TakeParams))

