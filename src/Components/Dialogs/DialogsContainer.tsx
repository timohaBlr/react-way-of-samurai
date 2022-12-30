import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from "./Message";
import {DialogItem} from "./DialogItem";
import {StateType} from "../../redux/store";
import {buttonActionCreator, textAreaActionCreator} from "../../redux/reducers/dialogs-add-reducer";
import {ReduxStoreType} from "../../redux/redux-store";

type DialogsPropsType = {
    store: ReduxStoreType
    /*state: dialogsPageType
    dispatch: (action: ActionsType) => void*/

}

export const DialogsContainer = (props: DialogsPropsType) => {
    const state = props.store.getState() as StateType
    const onClickAddHandler = () => {

        props.store.dispatch(buttonActionCreator())
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let value = e.currentTarget.value
        if (value) {
            props.store.dispatch(textAreaActionCreator(value));
        }
    }
    return (
        <div className={s.dialogs_wrapper}>
            <div className={s.dialogs}>
                {state.dialogsPage.dialogs.map(dialog =>
                    <DialogItem
                        user={dialog.user}
                        id={dialog.id}
                    />
                )}
            </div>
            <div className={s.messages}>
                {state.dialogsPage.messages.map(message =>
                    <Message
                        message={message.message}
                        id={message.id}
                    />
                )}
                <textarea onChange={onChangeHandler}
                          value={state.dialogsPage.newMessage}>
                </textarea>
                <button onClick={onClickAddHandler}>Add</button>
            </div>
        </div>
    );
};

export default DialogsContainer;