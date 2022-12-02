import React from 'react';

type NewPostPropsType = {
    addPost: (postText: string) => void
    updateTextArea: (value: string) => void
    textArea: string
}
const NewPost = (props: NewPostPropsType) => {
    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const buttonOnClickHandler = () => {
        props.addPost(newPostElement.current?.value!)
    }
    const onChangeHandler = () => {
        if (newPostElement.current?.value) {
            props.updateTextArea(newPostElement.current.value)
        }
    }
    return (
        <div>
            <textarea ref={newPostElement}
                      onChange={onChangeHandler}
                      value={props.textArea}/>
            <button onClick={buttonOnClickHandler}>Send</button>
        </div>
    );
};

export default NewPost;