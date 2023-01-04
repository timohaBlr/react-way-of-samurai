import {v1} from "uuid";

export type UsersInitialStateType = {
    users: UserType[]
}
export type UserType = {
    id: string
    name: string
    ava: string
    description: string
    location: LocationType
    followed: boolean
}
type LocationType = {
    country: string
    city: string
}
type ActionTypes = ChangeFollowStatusType
type ChangeFollowStatusType = ReturnType<typeof changeFollowStatusAC>
const CHANGE_FOLLOW_STATUS = 'CHANGE_FOLLOW_STATUS'
const initialUserId = v1();
const initialState: UsersInitialStateType = {
    users: [
        {
            id: initialUserId,
            name: 'Timofey G.',
            ava: 'https://fliist.com/uploads/user/avatar/350/avatar_1x_350_1583313611_avatar.png',
            description: 'I am a react-redux developer',
            followed: true,
            location: {
                country: "Belarus",
                city: 'Minsk',
            },
        },
        {
            id: v1(),
            name: 'Barsik',
            ava: 'https://fliist.com/uploads/user/avatar/350/avatar_1x_350_1583313611_avatar.png',
            description: 'I am very pretty kitten=)',
            followed: false,
            location: {
                country: "Belarus",
                city: 'Bobruisk',
            },
        },
    ],
}
export const usersReducer = (state: UsersInitialStateType = initialState,
                             action: ActionTypes): UsersInitialStateType => {
    switch (action.type) {
        case CHANGE_FOLLOW_STATUS:
            const userId = action.payload.userId
            return {
                ...state,
                users: state.users.map(user => user.id === userId
                    ? {...user, followed: !user.followed}
                    : user)
            };
        default:
            return state;
    }
}

export const changeFollowStatusAC = (userId: string) => {
    return {
        type: CHANGE_FOLLOW_STATUS,
        payload: {
            userId,
        },
    } as const
}