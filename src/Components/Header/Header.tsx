import React, {useEffect} from 'react';
import s from './Header.module.css'
import {fetching_API} from "../../Api/api";
import {useDispatch, useSelector} from "react-redux";
import {InitialStateType, setAuthorisedUsedAC} from "../../redux/reducers/auth-reduser";
import {AppRootStateType} from "../../redux/redux-store";
import logo from './../../images/logo.svg'
import {Logo} from "./Logo";

export const Header = () => {
    const dispatch = useDispatch()
    const loginedUser = useSelector<AppRootStateType, InitialStateType>(state => state.authentication)

    useEffect(() => {

        fetching_API.getUserToken()
            .then(data => {
                dispatch(setAuthorisedUsedAC(data))
            })
            .catch(err => {
                console.log(err)
            })
            .finally()
        //          instance.get('/profile/'+String(loginedUser.id))
        //              .then(response=> {
        //                  if (response) {
        //                      let ava  = response.data
        //                  }
        //              })
        //          }
        //      })
    }, [])
    return (
        <div>
            <Logo/>
            Header
            <div className={s.login}>{loginedUser.isLogin ? loginedUser.login : <p>Login</p>}</div>

        </div>
    );
};

export default Header;