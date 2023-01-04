import {addNewPostAC,  newPostReducer} from "./reducers/new-post-reducer";
import {dialogsAddReducer} from "./reducers/dialogs-add-reducer";

 type UserType = {
    name: string
    dateOfBirth: string
    city: string
    education: string
    website: string
}
 type dialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessage: string
}
type DialogsType = {
    id: number
    user: string
}
 type MessagesType = {
    id: number
    message: string
}
type PostsType = {
    id: number
    message: string
    likesCount: number
}
type profilePageType = {
    user: UserType
    posts: Array<PostsType>
    newPostText: string
}
export type StateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}



type StoreType = {
    _subscriber: (state: StateType) => void
    _state: StateType
    getState: () => StateType
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: any) => void
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
        dialogsAddReducer(this._state.dialogsPage, action)
        this._subscriber(this._state);
    },
}
store.dispatch(addNewPostAC())

export default store;

