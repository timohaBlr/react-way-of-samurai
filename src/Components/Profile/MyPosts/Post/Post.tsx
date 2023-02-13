import React from 'react';
import s from './Post.module.css'
import {SuperButton} from "../../../Common/Button/SuperButton";
import {PostType} from "../../../../redux/reducers/profile/types";

type PostPropsType = {
    post: PostType
    addLike: (postId: number) => void
}
export const Post: React.FC<PostPropsType> = React.memo(({addLike, post}) => {
    const {id, message, likesCount} = post
    const onClickHandler = () => {
        addLike(id)
    }
    return (
        <div className={s.wrapper}>
            <div className={s.ava}>ava</div>
            <div className={s.text}>{message}
                <div className={s.likes}>Likes count: {likesCount}
                    <SuperButton
                        onClick={onClickHandler}
                    >Like!</SuperButton>
                </div>
            </div>

        </div>
    );
});
