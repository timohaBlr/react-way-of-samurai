import React from 'react';
import {NewPost} from "./NewPost/NewPost";
import {Post} from "./Post/Post";
import {
    addNewPostAC,
    PostsType,
    updateNewPostTextAC
} from "../../../redux/reducers/profile-reducer";
import {connect} from "react-redux";
import {AppDispatchType, AppRootStateType} from "../../../redux/redux-store";


type MyPostsPropsType = {
    posts: Array<PostsType>
    textArea: string
    updateTexArea: (value: string) => void
    addPost: () => void
}

const MyPosts = React.memo((props: MyPostsPropsType) => {

    return (
        <div>
            <h3>My posts:</h3>
            <div>
                <NewPost textArea={props.textArea}
                         updateTexArea={props.updateTexArea}
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
    textArea: string
}
export type MapDispatchToPropsType = {
    addPost: () => void
    updateTexArea: (value: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsTypeType => {
    return {
        textArea: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addNewPostAC())
        },
        updateTexArea: (value) => {
            dispatch(updateNewPostTextAC(value))
        },
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
