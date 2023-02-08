import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import {PostsType, UserType} from "../../redux/reducers/profile-reducer";
import {Preloader} from "../Common/Preloader/Preloader";


type ProfilePropsType = {
    user: UserType
    posts: Array<PostsType>
    newPostText: string
    addMessage: () => void
    updateTextArea: (value: string) => void
    loadingStatus: boolean
    status: string
    setStatus: (status: string) => void
    // getStatus: (userId: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <div className={s.image}>
                <img src={'https://zebrasci.com/wp-content/uploads/2019/03/device-testing-banner-1600x200.png'}
                     alt={'bla'}/>
            </div>
            <div className={s.user}>
                {props.loadingStatus
                    ? <Preloader/>
                    : <ProfileInfo status={props.status} user={props.user}
                                   setStatus={props.setStatus}
                                   // getStatus={props.getStatus}
                    />}
            </div>
            <div>
                <MyPosts posts={props.posts}
                         textArea={props.newPostText}
                         addPost={props.addMessage}
                         updateTexArea={props.updateTextArea}
                         value={props.newPostText}/>
            </div>
        </div>
    );
};


