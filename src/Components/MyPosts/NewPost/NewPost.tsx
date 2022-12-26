import React from 'react';
import { buttonActionCreator, textAreaActionCreator} from "../../../redux/reducers/new-post-reducer";
import {ActionType} from "../../../redux/State";

type NewPostPropsType = {

    textArea: string
    dispatch: (action: ActionType) => void
}


const NewPost = (props: NewPostPropsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const buttonOnClickHandler = () => {
        props.dispatch(buttonActionCreator())
    }
    const onChangeHandler = () => {

        if (newPostElement.current?.value) {

            props.dispatch(textAreaActionCreator(newPostElement.current.value))
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