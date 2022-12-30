import React from 'react';
import { StateType} from "../../redux/store";
import MyPosts from "../MyPosts/MyPosts";
import {ReduxStoreType} from "../../redux/redux-store";
import User from "./User/User";
import s from "./Profile.module.css";
import {buttonActionCreator, textAreaActionCreator} from "../../redux/reducers/new-post-reducer";


type ProfilePropsType = {
    store: ReduxStoreType
    /*state: profilePageType
    dispatch: (action: ActionsType) => void*/
}

export const ProfileContainer = (props: ProfilePropsType) => {
    const state = props.store.getState() as StateType
    const addPost = () => {
        props.store.dispatch(buttonActionCreator())
    }
    const updateTexArea = (value: string) => {
        props.store.dispatch(textAreaActionCreator(value))
    }
    return (
        <div>
            <div className={s.image}>
                <img src={'https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg'} alt={'bla'}/>
            </div>
            <div className={s.user}>
                <User user={state.profilePage.user}/>
            </div>
            <MyPosts posts={state.profilePage.posts}
                     textArea={state.profilePage.newPostText}
                     addPost={addPost}
                     updateTexArea={updateTexArea}/>
        </div>
    );
};

export default ProfileContainer;