import React from 'react';
import s from './Header.module.css'
import ava from './../../images/ava.png'
import {Logo} from "./Logo";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {logOutTC} from "../../redux/reducers/auth-reduser";

export const Header = () => {
    const {isLogin, avatar, login} = useAppSelector(state => state.authentication)
    const dispatch = useAppDispatch()
    const logOutHandler = () => {
        dispatch(logOutTC())
    }
    return (
        <div className={s.header}>
            <div>
                <Logo/>
            </div>
            <div className={s.loggedUser}>
                <Avatar size={'60px'}
                        isCircle={true}
                        source={avatar
                            ? avatar
                            : ava}/>
                <div className={s.login}>
                    {isLogin
                        ? <div>
                            <p>{login}</p>
                            <button onClick={logOutHandler}>Log Out</button>
                        </div>
                        : <p>Login</p>}
                </div>
            </div>
        </div>
    );
};

type AvatarPropsType = {
    source: string
    size: string
    isCircle: boolean
}

export const Avatar: React.FC<AvatarPropsType> = React.memo(({size, isCircle, source}) => {
    const divStyle = {
        backgroundImage: `url(${source})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: size,
        height: size,
        borderRadius: isCircle ? '50%' : '',
    }

    return (
        <section style={divStyle}>
        </section>
    )
})