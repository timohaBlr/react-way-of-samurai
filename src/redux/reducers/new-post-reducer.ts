import {ActionType, profilePageType} from "../State";

export const UPDATE_TEXT_AREA = 'UPDATE_TEXT_AREA'
export const ADD_POST = 'ADD_POST'
export const buttonActionCreator = () => {
    return {type: ADD_POST}
}
export const textAreaActionCreator = (value: string) => {
    return  {type: UPDATE_TEXT_AREA, value: value}
}

export const newPostReducer = (state: profilePageType, action: ActionType) => {
    switch (action.type) {
        case 'UPDATE_TEXT_AREA':
            state.newPostText = action.value!;
            return state;
        case 'ADD_POST':
            state.posts.push({
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 5,
            });
            state.newPostText = '';
            return state;
        default: return state;
    }
}