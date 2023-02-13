import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message";
import {DialogItem} from "./DialogItem";
import {DialogsInitialStateType} from "../../redux/reducers/dialogs-add-reducer";
import {NewMessage} from "./NewMessage";

type DialogsPropsType = {
    dialogsPage: DialogsInitialStateType
    addMessage: (message: string)=> void
}

export const Dialogs = (props: DialogsPropsType) => {

    return (
        <div className={s.dialogs_wrapper}>
            <div className={s.dialogs}>
                {props.dialogsPage.dialogs.map(dialog =>
                    <DialogItem
                        user={dialog.user}
                        id={dialog.id}
                        key={dialog.id}
                    />
                )}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messages.map(message =>
                    <Message
                        message={message.message}
                        id={message.id}
                        key={message.id}
                    />
                )}
                <div>
                    <NewMessage addMessage={props.addMessage}/>
                </div>
            </div>
        </div>
    );
};

