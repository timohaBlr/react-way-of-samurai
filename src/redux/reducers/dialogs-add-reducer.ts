const ADD_MESSAGE = 'ADD_MESSAGE'

type ActionsType =  AddNewMessageType
type AddNewMessageType = ReturnType<typeof addNewMessageAC>
export type DialogsInitialStateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
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
};

export const dialogsAddReducer = (state: DialogsInitialStateType = initialState, action: ActionsType): DialogsInitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: state.messages.length + 1,
                    message: action.payload.message,
                }],
            };
        default:
            return state;
    }
}

export const addNewMessageAC = (message: string) => {
    return {
        type: ADD_MESSAGE,
        payload: {
            message,
        },
    } as const
}