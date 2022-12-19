import React from 'react';
import {User} from "./User/User";
import MyPosts from "../MyPosts/MyPosts";
import s from './Profile.module.css'
import { profilePageType} from "../../redux/State";


type ProfilePropsType = {
    state: profilePageType
    addPost: (postText: string) => void
    updateTextArea: (value: string) => void

}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <div className={s.image}><img src={'https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg'} alt={'bla'}/></div>
            <div className={s.user}><User user={props.state.user}/></div>
            <div><MyPosts posts={props.state.posts}
                          textArea={props.state.newPostText}
                          addPost={props.addPost}
                          updateTextArea={props.updateTextArea}/></div>
        </div>
    );
};

export default Profile;