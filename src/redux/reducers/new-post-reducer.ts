const UPDATE_TEXT_AREA = 'UPDATE_TEXT_AREA'
const ADD_POST = 'ADD_POST'

type ActionsType = UpdateNewPostTextType | AddNewPostType
type AddNewPostType = ReturnType<typeof addNewPostAC>
type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextAC>
export type ProfileInitialStateType = {
    user: UserType
    posts: Array<PostsType>
    newPostText: string
}
export type UserType = {
    name: string
    dateOfBirth: string
    city: string
    education: string
    website: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

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
export const newPostReducer = (state: ProfileInitialStateType = initialState, action: ActionsType): ProfileInitialStateType => {
    switch (action.type) {
        case UPDATE_TEXT_AREA:
            return {...state, newPostText: action.payload.value};
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    message: state.newPostText,
                    likesCount: 5,
                }],
                newPostText: ''
            };
        default:
            return state;
    }
}

export const addNewPostAC = () => {
    return {type: ADD_POST} as const
}
export const updateNewPostTextAC = (value: string) => {
    return {
        type: UPDATE_TEXT_AREA,
        payload: {
            value
        }
    } as const
}
