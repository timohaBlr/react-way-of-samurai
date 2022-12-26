import React from 'react';
import NewPost from "./NewPost/NewPost";
import Post from "./Posts/Post";
import {ActionType, PostsType} from "../../redux/State";


type MyPostsPropsType = {
    posts: Array<PostsType>
    textArea: string
    dispatch: (action: ActionType) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    return (
        <div>
            <h3>My posts:</h3>
            <div><NewPost textArea={props.textArea}
                          dispatch={props.dispatch}
            /></div>
            {props.posts.map(post =>
                <div key={post.id}><Post message={post.message}
                                         author={post.id}
                                         likesCount={post.likesCount}/></div>)}

        </div>

    );
};

export default MyPosts;