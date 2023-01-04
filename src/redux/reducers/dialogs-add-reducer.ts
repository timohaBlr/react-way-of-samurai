const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE'

type ActionsType = UpdateNewMessageType | AddNewMessageType
type AddNewMessageType = ReturnType<typeof addNewMessageAC>
type UpdateNewMessageType = ReturnType<typeof updateNewMessageAC>
export type DialogsInitialStateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessage: string
}
export type DialogsType = {
    id: number
    user: string
}
export type MessagesType = {
    id: number
    message: string
}

const initialState: DialogsInitialStateType = {
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

export const dialogsAddReducer = (state: DialogsInitialStateType = initialState, action: ActionsType): DialogsInitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessage: action.payload.value};
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: state.messages.length + 1,
                    message: state.newMessage,
                }],
                newMessage: ''
            };
        default:
            return state;
    }
}

export const addNewMessageAC = () => {
    return {type: ADD_MESSAGE} as const
}
export const updateNewMessageAC = (value: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        payload: {
            value
        }
    } as const
}