import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message";
import {DialogItem} from "./DialogItem";
import {ActionType, dialogsPageType} from "../../redux/State";
import {buttonActionCreator, textAreaActionCreator} from "../../redux/reducers/dialogs-add";

type DialogsPropsType = {
    state: dialogsPageType
    dispatch: (action: ActionType) => void

}

export const Dialogs = (props: DialogsPropsType) => {
    const onClickAddHandler = () => {
        props.dispatch(buttonActionCreator())
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let value = e.currentTarget.value
        if (value) {
            props.dispatch(textAreaActionCreator(value));
        }
    }
    return (
        <div className={s.dialogs_wrapper}>
            <div className={s.dialogs}>
                {props.state.dialogs.map(dialog =>
                    <DialogItem
                        user={dialog.user}
                        id={dialog.id}
                    />
                )}
            </div>
            <div className={s.messages}>
                {props.state.messages.map(message =>
                    <Message
                        message={message.message}
                        id={message.id}
                    />
                )}
                <textarea onChange={onChangeHandler} value={props.state.newMessage}> </textarea>
                <button onClick={onClickAddHandler}>Add</button>
            </div>
        </div>
    );
};

export default Dialogs;