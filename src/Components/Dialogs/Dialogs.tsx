import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message";
import {DialogItem} from "./DialogItem";
import {dialogsPageType, DialogsType, MessagesType} from "../../redux/State";

type DialogsPropsType = {
    state: dialogsPageType
    /*dialogs: Array<DialogsType>
    messages: Array<MessagesType>*/
}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs_wrapper}>
            <div className={s.dialogs}>
                {props.state.dialogs.map(dialog => <DialogItem user={dialog.user} id={dialog.id}/>)}

            </div>
            <div className={s.messages}>
                {props.state.messages.map(message =>  <Message message={message.message}
                id={message.id}/>)}

            </div>
        </div>
    );
};

export default Dialogs;