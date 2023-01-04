import React from 'react';
import {UserType} from "../../redux/reducers/users-reducer";
import s from './User.module.css'
import {SuperButton} from "../Common/Button/SuperButton";

type UserPropsType = {
    user: UserType
    changeFollowStatus: (userId: string) => void
}
export const User: React.FC<UserPropsType> = React.memo(({user,changeFollowStatus, ...restProps}) => {
    return (
        <div className={s.userWrapper}>
            <div className={s.avaAndButton}>
                <div className={s.ava}>
                    <img src={user.ava} alt={'ss'}/>
                </div>
                <div className={s.button}>
                    <SuperButton onClick={()=> changeFollowStatus(user.id)}>{user.followed? 'Follow' : 'Unfollow'}</SuperButton>
                </div>
            </div>
            <div className={s.userInfo}>
                <div className={s.info}>
                    <div className={s.name}>
                        {user.name}
                    </div>
                    <div className={s.description}>
                        {user.description}
                    </div>
                </div>
                <div className={s.location}>
                    <div className={s.country}>
                        {user.location.country}
                    </div>
                    <div className={s.city}>
                        {user.location.city}
                    </div>
                </div>
            </div>
        </div>
    );
})

