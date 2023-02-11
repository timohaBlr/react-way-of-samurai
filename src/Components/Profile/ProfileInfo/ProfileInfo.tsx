import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/reducers/profile/types";
import defaultAva from './../../../images/ava.png'
import {ProfileStatusContainer} from "./ProfileStatus";


type ProfileInfoPropsType = {
    user: ProfileType
}

export const ProfileInfo = React.memo((props: ProfileInfoPropsType) => {
    const defaultValue = '...'
    return (
        <div className={s.wrapper}>
            <span className={s.ava}><img src={props.user.photos.small || defaultAva} alt={'Profile avatar'}/></span>
            <span className={s.info}>
                <div>User name: {props.user.fullName || defaultValue}</div>
                <div>About me:{props.user.aboutMe || defaultValue}</div>
                <div>Looking for a job:{props.user.lookingForAJob ? 'Yes' : 'No'}</div>
                <div>More about job:{props.user.lookingForAJobDescription || defaultValue}</div>
                <div>Website:<a
                    href={props.user.contacts.website || defaultValue}>{props.user.contacts.website || defaultValue}</a></div>
            </span>
            <div className={s.status}>
                <ProfileStatusContainer userId={props.user.userId}/>
            </div>
        </div>
    );
});

