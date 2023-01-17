import React from 'react';
import s from './ProfileInfo.module.css'
import {UserType} from "../../../redux/reducers/profile-reducer";
import defaultAva from './../../../images/ava.png'


type ProfileInfoPropsType = {
    user: UserType
}

export const ProfileInfo = React.memo((props: ProfileInfoPropsType) => {
    const defaultValue = '...'
    return (
        <div className={s.wrapper}>
            <span className={s.ava}><img src={props.user.photos.small || defaultAva} alt={'bla'}/></span>
            <span className={s.info}>
                <div>User name: {props.user.fullName || defaultValue}</div>
                <div>About me:{props.user.aboutMe || defaultValue}</div>
                <div>Looking for a job:{props.user.lookingForAJob ? 'Yes' : 'No'}</div>
                <div>More about job:{props.user.lookingForAJobDescription || defaultValue}</div>
                <div>Website:<a href={props.user.contacts.website || defaultValue}/></div>
            </span>
        </div>
    );
});

