import React from 'react';
import {User} from "./User/User";
import MyPosts from "../MyPosts/MyPosts";
import s from './Profile.module.css'
import {ActionType, profilePageType} from "../../redux/State";


type ProfilePropsType = {
    state: profilePageType
    dispatch: (action: ActionType) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <div className={s.image}><img src={'https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg'} alt={'bla'}/></div>
            <div className={s.user}><User user={props.state.user}/></div>
            <div><MyPosts
                dispatch={props.dispatch}
                posts={props.state.posts}
                textArea={props.state.newPostText}
            /></div>
        </div>
    );
};

export default Profile;