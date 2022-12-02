let renderPage = (state: StateType) => {
}

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
}
export type StateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
export type StoreType = {
    _subscriber: (state: StateType ) => void
    _state: StateType
    getState: () => StateType
    subscribe: (observer: StateType) => void
    updateTextArea: (value: string) => void
    addPost: (postText: string) => void
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
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer:(state: StateType ) => void) {
        this._subscriber = observer;
    },
    updateTextArea(value: string) {
        this._state.profilePage.newPostText = value;
        let state = this.getState
        this._subscriber(state);
    }, addPost(postText: string) {
        this._state.profilePage.posts.push({
            id: this._state.profilePage.posts.length, message: postText, likesCount: 5,
        });
        this._state.profilePage.newPostText = '';
        let state = this.getState()
        this._subscriber(state);
    }
}
/*const subscriber = () => {
    let state = store.getState();
    rerenderEntireTree(state)
}
store.subscribe(subscriber)*/

const state: StateType = store.getState();


const state1: StateType = {
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
    }
}

export const addPost = (postText: string) => {
    let likesCount = +prompt('likes?', '5')!
    state.profilePage.posts.push({
        id: state.profilePage.posts.length,
        message: postText,
        likesCount: likesCount
    })
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}
export const updateTextArea = (value: string) => {
    console.log(value)
    state.profilePage.newPostText = value;
    rerenderEntireTree()
}
/*export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer
}*/
export default store;
