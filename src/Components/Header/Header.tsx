import React, {useEffect, useState} from 'react';
import s from './Header.module.css'
import {instance} from "../../Api/api";
import {useDispatch, useSelector} from "react-redux";
import {DataType, InitialStateType, setAuthorisedUsedAC} from "../../redux/reducers/auth-reduser";
import {AppRootStateType} from "../../redux/redux-store";

export const Header = () => {
    const dispatch = useDispatch()
    const loginedUser = useSelector<AppRootStateType, InitialStateType>(state => state.
        authentication)
    useEffect(() => {
        instance.get('/auth/me')
            .then(response => {
                if (response) {
                    dispatch(setAuthorisedUsedAC(response.data.data))
              /*  instance.get('/profile/'+String(loginedUser.id))
                    .then(response=> {
                        if (response) {
                            let ava  = response.data.
                        }
                    })*/
                }
            })
    }, [])
    return (
        <div>
            <img src={'https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg'}
                 alt={'logo'}/>
            Header
            <div className={s.login}>{loginedUser.isLogin?loginedUser.login : <p>Login</p>}</div>

        </div>
    );
};

export default Header;