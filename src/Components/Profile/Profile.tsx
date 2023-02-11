import React from 'react';
import {MyPostsContainer} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";
import { ProfileType} from "../../redux/reducers/profile/types";
import {Preloader} from "../Common/Preloader/Preloader";
import {useAppSelector} from "../../redux/hooks";


type ProfilePropsType = {
    user: ProfileType
}

export const Profile = (props: ProfilePropsType) => {
    const loadingStatus = useAppSelector(state => state.profilePage.loadingStatus)

    return (
        <div>
            <div className={s.image}>
                <img src={'https://zebrasci.com/wp-content/uploads/2019/03/device-testing-banner-1600x200.png'}
                     alt={'bla'}/>
            </div>
            <div className={s.user}>
                {loadingStatus
                    ? <Preloader/>
                    : <ProfileInfo user={props.user}
                    />}
            </div>
            <div>
                <MyPostsContainer/>
            </div>
        </div>
    );
};


