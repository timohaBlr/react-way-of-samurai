import React from 'react';
import {NewPost} from "./NewPost/NewPost";
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/reducers/profile/types";
import {connect} from "react-redux";
import {AppDispatchType, AppRootStateType} from "../../../redux/redux-store";
import { addPostAC} from "../../../redux/reducers/profile/actions";


type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (postText: string) => void
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
            {props.posts.map(post =>
                <div key={post.id}>
                    <Post message={post.message}
                          author={post.id}
                          likesCount={post.likesCount}/>
                </div>)}
        </div>

    );
});

export type MapStatePropsTypeType = {
    posts: Array<PostsType>
}
export type MapDispatchToPropsType = {
    addPost: (postText: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsTypeType => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        addPost: (postText) => {
            dispatch(addPostAC(postText))
        },
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
