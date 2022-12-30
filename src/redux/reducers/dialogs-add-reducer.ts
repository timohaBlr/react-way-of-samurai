import {ActionsType, dialogsPageType} from "../store";

export const UPDATE_TEXT_AREA = 'UPDATE_TEXT_AREA'
export const ADD_POST = 'ADD_POST'

const initialState = {
    dialogs: [
        {id: 1, user: 'Andrew'},
        {id: 2, user: 'Matthew'},
        {id: 3, user: 'Ludwig'},
        {id: 4, user: 'Aleksandr'},
        {id: 5, user: 'Mike'},
        {id: 6, user: 'Barsik'},
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?!'},
        {id: 3, message: 'Do you know react?'},
        {id: 4, message: 'May be Rest API?'},
    ],
    newMessage: '',
};

export const dialogsAddReducer = (state: dialogsPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'UPDATE_TEXT_AREA':
            state.newMessage = action.value;
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

export const buttonActionCreator = () => {
    return {type: 'ADD_POST'} as const
}
export const textAreaActionCreator = (value: string) => {
    return {type: 'UPDATE_TEXT_AREA', value: value} as const
}
