import React from 'react';
import {AddItemForm} from "../../../Common/AddItemForm/AddItemForm";


type NewPostPropsType = {
    updateTexArea: (value: string) => void
    addPost: () => void
    textArea: string
}


export const NewPost = React.memo((props: NewPostPropsType) => {
    const buttonOnClickHandler = () => {
        props.addPost()
    }
    const onChangeHandler = (value: string) => {
        props.updateTexArea(value)
    }
    return (
        <div>
            <AddItemForm onClick={buttonOnClickHandler}
                         onChange={onChangeHandler}
                         title={'Send'}
                         value={props.textArea}
            />
        </div>
    );
});
