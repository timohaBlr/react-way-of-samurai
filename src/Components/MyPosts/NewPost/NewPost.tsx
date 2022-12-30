import React from 'react';


type NewPostPropsType = {
    updateTexArea: (value: string) => void
    addPost: () => void
    textArea: string

}


const NewPost = (props: NewPostPropsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const buttonOnClickHandler = () => {
        props.addPost()
    }
    const onChangeHandler = () => {

        if (newPostElement.current?.value) {
            props.updateTexArea(newPostElement.current.value)
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