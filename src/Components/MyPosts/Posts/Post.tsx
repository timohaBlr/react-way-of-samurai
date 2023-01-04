import React from 'react';
import s from './Post.module.css'
import {SuperButton} from "../../Common/Button/SuperButton";

type PostPropsType = {
    message: string
    author: number  //temperary
    likesCount: number
}
export const Post = React.memo((props: PostPropsType) => {
    return (
        <div className={s.wrapper}>
            <div className={s.ava}>ava</div>
            <div className={s.text}>{props.message}
                <div className={s.likes}>Likes count: {props.likesCount}
                    <SuperButton>Like!</SuperButton>
                </div>
            </div>

        </div>
    );
});
