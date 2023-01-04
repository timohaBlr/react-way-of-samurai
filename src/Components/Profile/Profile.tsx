import React from 'react';
import {MyPosts} from "../MyPosts/MyPosts";
import {User} from "./User/User";
import s from "./Profile.module.css";
import {ProfileInitialStateType} from "../../redux/reducers/new-post-reducer";


type ProfilePropsType = {
    profilePage: ProfileInitialStateType
    addMessage: () => void
    updateTextArea: (value: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <div className={s.image}>
                <img src={'https://zebrasci.com/wp-content/uploads/2019/03/device-testing-banner-1600x200.png'}
                     alt={'bla'}/>
            </div>
            <div className={s.user}>
                <User user={props.profilePage.user}/>
            </div>
            <div>
                <MyPosts posts={props.profilePage.posts}
                         textArea={props.profilePage.newPostText}
                         addPost={props.addMessage}
                         updateTexArea={props.updateTextArea}
                value={props.profilePage.newPostText}/>
            </div>
        </div>
    );
};


