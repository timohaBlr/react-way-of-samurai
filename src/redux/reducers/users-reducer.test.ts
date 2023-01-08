import {changeFollowStatusAC, UsersInitialStateType, usersReducer} from "./users-reducer";
import {v1} from "uuid";

const initialUserId1 = v1()
const initialUserId2 = v1()
const usersPage: UsersInitialStateType = {
    users: [
        {
            id: initialUserId1,
            name: 'Timofey G.',
            photos: {
                large: undefined,
                small: 'https://fliist.com/uploads/user/avatar/350/avatar_1x_350_1583313611_avatar.png'
            },
            status: 'I am a react-redux developer',
            followed: true,
            location: {
                country: "Belarus",
                city: 'Minsk',
            },
        },
        {
            id: initialUserId2,
            name: 'Barsik',
            photos: {
                large: undefined,
                small: 'https://fliist.com/uploads/user/avatar/350/avatar_1x_350_1583313611_avatar.png'
            },
            status: 'I am very pretty kitten=)',
            followed: false,
            location: {
                country: "Belarus",
                city: 'Bobruisk',
            },
        },
    ],
}
test('follow status should be changed', () => {
    const newUsers = usersReducer(usersPage, changeFollowStatusAC(initialUserId2))

    expect(newUsers).not.toBe(usersPage)
    expect(newUsers.users[1].followed).toBeTruthy()
    expect(usersPage.users[1].followed).toBeFalsy()
    expect(newUsers.users[1].location.city).toBe(usersPage.users[1].location.city)
})