import React from 'react';
import {NewPost} from "./NewPost/NewPost";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/reducers/profile/types";
import {connect} from "react-redux";
import {AppDispatchType, RootState} from "../../../redux/redux-store";
import {addLikeAC, addPostAC} from "../../../redux/reducers/profile/actions";
import {selectPosts} from "../../../redux/selectors";


type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postText: string) => void
    addLike: (postId: number) => void
}

const MyPosts = React.memo((props: MyPostsPropsType) => {

    return (
        <div>
            <h3>My posts:</h3>
            <div>
                <NewPost
                    addPost={props.addPost}
                />
            </div>
            {props.posts.map(post => <Post key={post.id}
                                           post={post}
                                           addLike={props.addLike}/>
            )}
        </div>

    );
});

export type MapStatePropsTypeType = {
    posts: Array<PostType>
}
export type MapDispatchToPropsType = {
    addPost: (postText: string) => void,
    addLike: (postId: number) => void,
}

const mapStateToProps = (state: RootState): MapStatePropsTypeType => {
    return {
        posts: selectPosts(state),
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        addPost: (postText) => {
            dispatch(addPostAC(postText))
        },
        addLike: (postId) => {
            dispatch(addLikeAC(postId))
        },
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
