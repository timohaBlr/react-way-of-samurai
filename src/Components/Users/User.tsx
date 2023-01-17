import React from 'react';
import {UserType} from "../../redux/reducers/users-reducer";
import s from './User.module.css'
import {SuperButton} from "../Common/Button/SuperButton";
import {NavLink} from "react-router-dom";

type UserPropsType = {
    user: UserType
    changeFollowStatus: (userId: string) => void
}
export const User: React.FC<UserPropsType> = React.memo(({user, changeFollowStatus, ...restProps}) => {
    const ava = 'https://fliist.com/uploads/user/avatar/350/avatar_1x_350_1583313611_avatar.png'
    return (
        <div className={s.userWrapper}>
            <div className={s.avaAndButton}>
                <div className={s.ava}>
                    <NavLink to={`/profile/${user.id} `}>
                        <img src={user.photos.small ? user.photos.small : ava} alt={'userAvatar'}/>
                    </NavLink>

                </div>
                <div className={s.button}>
                    <SuperButton
                        onClick={() => changeFollowStatus(user.id)}>{user.followed ? 'Follow' : 'Unfollow'}</SuperButton>
                </div>
            </div>
            <div className={s.userInfo}>
                <div className={s.info}>
                    <div className={s.name}>
                        {user.name}
                    </div>
                    <div className={s.description}>
                        {user.status ? user.status : 'Why does no one indicate a status?'}
                    </div>
                </div>
                <div className={s.location}>
                    <div className={s.country}>
                        {user.location ? user.location.country : 'Planet:'}
                    </div>
                    <div className={s.city}>
                        {user.location ? user.location.city : 'Earth'}
                    </div>
                </div>
            </div>
        </div>
    );
})

