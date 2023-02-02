import React, {useEffect} from 'react';
import s from './Header.module.css'
import { setAuthorisedUsedTC} from "../../redux/reducers/auth-reduser";
import ava from './../../images/ava.png'
import {Logo} from "./Logo";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";

export const Header = () => {
    const dispatch = useAppDispatch()
    const loggedUser = useAppSelector(state => state.authentication)


    useEffect(() => {
        dispatch(setAuthorisedUsedTC())
    }, [dispatch])
    return (
        <div className={s.header}>
            <div>
                <Logo/>
            </div>
            <div className={s.loggedUser}>
                <Avatar size={'60px'} isCircle={true} source={loggedUser.avatar? loggedUser.avatar: ava}/>
                <div className={s.login}>
                    {loggedUser.isLogin
                        ? loggedUser.login
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