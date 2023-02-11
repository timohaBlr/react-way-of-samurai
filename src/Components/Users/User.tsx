import React from 'react';
import {UserType} from "../../redux/reducers/users-reducer";
import s from './User.module.css'
import {SuperButton} from "../Common/Button/SuperButton";
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../redux/hooks";
import {setProfileAC, setUserProfileTC} from "../../redux/reducers/profile-reducer";

type UserPropsType = {
    user: UserType
    toggleFollowingCallBack: (userId: string) => void
    changingFollowing: string[]
}
export const User: React.FC<UserPropsType> = React.memo(({user,changingFollowing, toggleFollowingCallBack, ...restProps}) => {
    const dispatch = useAppDispatch()
    const ava = 'https://fliist.com/uploads/user/avatar/350/avatar_1x_350_1583313611_avatar.png'

   const buttonFollowOnClickHandler = ()=> {
       toggleFollowingCallBack(user.id)
    }
    const disabled = changingFollowing.some(id=> id ===user.id)
    const avaClickHandler = () => {
      dispatch(setUserProfileTC(user.id))
    }
    return (
        <div className={s.userWrapper}>
            <div className={s.avaAndButton}>
                <div className={s.ava} onClick={avaClickHandler}>
                    <NavLink to={`/profile/${user.id} `}>
                        <img src={user.photos.small ? user.photos.small : ava} alt={'userAvatar'}/>
                    </NavLink>
                </div>
                <div className={s.button}>
                    <SuperButton
                        disabled={disabled}
                        onClick={buttonFollowOnClickHandler}>{user.followed ?'Unfollow':  'Follow'}</SuperButton>
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

