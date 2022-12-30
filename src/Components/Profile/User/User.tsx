import React from 'react';
import s from './User.module.css'
import {UserType} from "../../../redux/store";


type UserPropsType = {
    user:UserType
}
export const User = (props:UserPropsType) => {
        return (
        <div className={s.wrapper}>
            <span className={s.ava}><img src={require('../../../images/ava.png')} alt={'bla'}/></span>
            <span className={s.info}>
                <div>User name: {props.user.name}</div>
                <div>Date of birth:{props.user.dateOfBirth}</div>
                <div>City:{props.user.city}</div>
                <div>Education:{props.user.education}</div>
                <div>Website:{props.user.website}</div>
            </span>
        </div>
    );
};

export default User;