import React from 'react';

type NewPostPropsType = {
    addPost: (postText: string) => void
}
const NewPost = (props: NewPostPropsType) => {
    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const buttonOnClickHandler = () => {
        props.addPost(newPostElement.current?.value!)

    }
    return (
        <div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={buttonOnClickHandler}>Send</button>
        </div>
    );
};

export default NewPost;