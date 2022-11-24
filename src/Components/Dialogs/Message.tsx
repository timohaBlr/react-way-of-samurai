import React, {LegacyRef, RefObject} from 'react';
import s from './Dialogs.module.css'



type MessagePropsType = {
    message: string
    id: number
}

export const Message = (props: MessagePropsType) => {

    return (<div>
        <div key={props.id} className={s.message}>{props.message}</div>

        </div>
        )
}
