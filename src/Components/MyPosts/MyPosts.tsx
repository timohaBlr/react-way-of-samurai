import React from 'react';
import NewPost from "./NewPost/NewPost";
import Post from "./Posts/Post";
import {PostsType} from "../../redux/State";


type MyPostsPropsType = {
    posts: Array<PostsType>
}

const MyPosts = (props: MyPostsPropsType) => {

    return (
        <div>
            <h3>My posts:</h3>
            <div><NewPost/></div>
            {props.posts.map(post => <div><Post message={post.message}
                                                autor={post.id}
                                                likesCount={post.likesCount}/></div>)}

        </div>

    );
};

export default MyPosts;