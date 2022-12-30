import {ActionsType, profilePageType} from "../store";


export const UPDATE_TEXT_AREA = 'UPDATE_TEXT_AREA'
export const ADD_POST = 'ADD_POST'

export type ButtonActionType = ReturnType<typeof buttonActionCreator>
export type TextAreaActionType = ReturnType <typeof textAreaActionCreator>

const initialState = {
        user:
            {
                name: 'Timofey',
                dateOfBirth: 'February',
                city: 'Minck',
                education: 'BSMU',
                website: 'https://timohablr.github.io/homeworks/',
            },
        posts: [
            {id: 1, message: 'Hello', likesCount: 4},
            {id: 2, message: 'Bonjour', likesCount: 5},
            {id: 3, message: 'Privet', likesCount: 6},
        ],
        newPostText: '',
    };
export const newPostReducer = (state: profilePageType = initialState, action: ActionsType) => {
       switch (action.type) {
        case 'UPDATE_TEXT_AREA':
            state.newPostText = action.value;
            return state;
        case 'ADD_POST':
            state.posts.push({
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 5,
            });
            state.newPostText = '';
            return state;
        default:
            return state;
    }
}

export const buttonActionCreator = () => {
    return {type: 'ADD_POST' } as const
}
export const textAreaActionCreator = (value: string) => {

    return {type: 'UPDATE_TEXT_AREA', value: value} as const
}
