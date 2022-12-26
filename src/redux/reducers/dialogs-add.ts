import {ActionType, dialogsPageType} from "../State";

export const UPDATE_TEXT_AREA = 'UPDATE_TEXT_AREA'
export const ADD_POST = 'ADD_POST'
export const buttonActionCreator = () => {
    return {type: ADD_POST}
}
export const textAreaActionCreator = (value: string) => {
    return {type: UPDATE_TEXT_AREA, value: value}
}

export const dialogsAddReducer = (state: dialogsPageType, action: ActionType) => {
    switch (action.type) {
        case 'UPDATE_TEXT_AREA':
            state.newMessage = action.value!;
            return state;
        case 'ADD_POST':
            state.messages.push({
                id: state.messages.length + 1,
                message: state.newMessage,
            });
            state.newMessage = '';
            return state;
        default:
            return state;
    }
}