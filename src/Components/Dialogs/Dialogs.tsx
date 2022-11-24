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
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const func = () => {
        alert(newPostElement.current?.value)
    }
    return (
        <div className={s.dialogs_wrapper}>
            <div className={s.dialogs}>
                {props.state.dialogs.map(dialog => <DialogItem user={dialog.user} id={dialog.id}/>)}

            </div>
            <div className={s.messages}>
                {props.state.messages.map(message =>  <Message message={message.message}
                id={message.id}/>)}
                <div><textarea ref={newPostElement}></textarea></div>
                <button onClick={func}>x</button>
            </div>
        </div>
    );
};

export default Dialogs;