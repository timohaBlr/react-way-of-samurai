import React from 'react';
import NewPost from "./NewPost/NewPost";
import Post from "./Posts/Post";
import { PostsType} from "../../redux/store";


type MyPostsPropsType = {
    posts: Array<PostsType>
    textArea: string
    updateTexArea: (value: string) => void
    addPost: () => void
}

const MyPosts = (props: MyPostsPropsType) => {

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
                          likesCount={post.likesCount}/></div>)}

        </div>

    );
};

export default MyPosts;

