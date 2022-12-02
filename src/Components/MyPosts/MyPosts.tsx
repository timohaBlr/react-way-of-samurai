import React from 'react';
import NewPost from "./NewPost/NewPost";
import Post from "./Posts/Post";
import {PostsType} from "../../redux/State";


type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (postText: string) => void
    updateTextArea: (value: string) => void
    textArea: string
}

const MyPosts = (props: MyPostsPropsType) => {

    return (
        <div>
            <h3>My posts:</h3>
            <div><NewPost addPost={props.addPost}
                          textArea={props.textArea}
                          updateTextArea={props.updateTextArea}
            /></div>
            {props.posts.map(post =>
                <div key={post.id}><Post message={post.message}
                                         author={post.id}
                                         likesCount={post.likesCount}/></div>)}

        </div>

    );
};

export default MyPosts;