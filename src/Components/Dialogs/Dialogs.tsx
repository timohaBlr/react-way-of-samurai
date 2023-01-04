import React from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message";
import {DialogItem} from "./DialogItem";
import {AddItemForm} from "../Common/AddItemForm/AddItemForm";
import {DialogsInitialStateType} from "../../redux/reducers/dialogs-add-reducer";

type DialogsPropsType = {
    dialogsPage: DialogsInitialStateType
    addMessage: ()=> void
    updateTextArea: (value: string)=> void
}

export const Dialogs =React.memo( (props: DialogsPropsType) => {

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
                    <AddItemForm onClick={props.addMessage}
                                 onChange={props.updateTextArea}
                                 title={'Add'}
                                 value={props.dialogsPage.newMessage}
                    />
                </div>
            </div>
        </div>
    );
});


