import React from 'react';
import s from './AddItemForm.module.css'
import {SuperInputText} from "../Input/SuperInputText";
import {SuperButton} from "../Button/SuperButton";

type AddItemFormPropsType = {
    title? : string
    onChange: (value: string)=> void
    onClick: ()=> void
    onEnter?: ()=> void
    value: string
}
export const AddItemForm = React.memo((props: AddItemFormPropsType) => {
    return (
        <div className={s.wrapper}>
            <div>
                <SuperInputText value={props.value} onChangeText={props.onChange} onEnter={props.onEnter}/>
            </div>
            <div className={s.button}>
                <SuperButton onClick={props.onClick}>{props.title}</SuperButton>
            </div>


        </div>
    );
});

