import {newPostReducer} from "./reducers/new-post-reducer";

export type UserType = {
    name: string
    dateOfBirth: string
    city: string
    education: string
    website: string
}
export type DialogsType = {
    id: number
    user: string
}
export type MessagesType = {
    id: number
    message: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type profilePageType = {
    user: UserType
    posts: Array<PostsType>
    newPostText: string
}
export type dialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessage: string
}
export type StateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
export type ActionType = {
    type: string
    value?: string
}
export type StoreType = {
    _subscriber: () => void
    _state: StateType
    getState: () => StateType
    subscribe: (observer: () => void) => void
    /*updateTextArea: (value: string) => void
    addPost: (postText: string) => void*/
    dispatch: (action: ActionType) => void
}


const store: StoreType = {
    _subscriber() {
    },
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
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
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    dispatch(action) {
        newPostReducer(this._state.profilePage, action)
        this._subscriber();
    },
}

export default store;

