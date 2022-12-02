import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    author: number  //temperary
    likesCount: number
}
const Post = (props: PostPropsType) => {
    return (
        <div className={s.wrapper}>
            <div className={s.ava}>ava</div>
            <div className={s.text}>{props.message}
                <div className={s.likes}>Likes count: {props.likesCount}<button>Like!</button></div>
            </div>

        </div>
    );
};

export default Post;