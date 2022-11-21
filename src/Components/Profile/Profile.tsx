import React from 'react';
import {User} from "./User/User";
import MyPosts from "../MyPosts/MyPosts";
import s from './Profile.module.css'
import {PostsType, UserType} from "../../redux/State";


type ProfilePropsType = {
    user: UserType
    posts:Array<PostsType>
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <div className={s.image}><img src={'https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg'}/> </div>
            <div className={s.user}><User user={props.user}/></div>
            <div><MyPosts posts={props.posts}/></div>
                    </div>
    );
};

export default Profile;