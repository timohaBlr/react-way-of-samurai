import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemProsType = {
   user: string
    id: number
}


export const DialogItem = (props: DialogItemProsType) => {
    const path = '/dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.user}</NavLink>
        </div>
    )
}
