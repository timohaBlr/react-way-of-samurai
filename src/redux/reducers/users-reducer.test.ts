import {
    changeFollowStatusAC,
    initialState,
    toggleFollowingAC,
    UsersInitialStateType,
    usersReducer
} from "./users-reducer";
import {v1} from "uuid";

const initialUserId1 = v1()
const initialUserId2 = v1()
const usersPage: UsersInitialStateType =initialState
let startState: UsersInitialStateType;
beforeEach(()=> {
    startState = initialState
})
test('follow status should be changed', () => {
    const newUsers = usersReducer(usersPage, changeFollowStatusAC(initialUserId2))

    expect(newUsers).not.toBe(usersPage)
    expect(newUsers.users[1].followed).toBeTruthy()
    expect(usersPage.users[1].followed).toBeFalsy()
    expect(newUsers.users[1].location.city).toBe(usersPage.users[1].location.city)
})
test('requestin users shold be in changingFollowing array', () => {
    const userId1 = '1'
    const userId2 = '2'
    const activeSendStatusBefore = usersReducer(startState, toggleFollowingAC(userId2, true))

    const activeSendStatusAfter = usersReducer(activeSendStatusBefore, toggleFollowingAC(userId2, false))

    expect(startState).not.toBe(activeSendStatusBefore)
     expect(startState).toStrictEqual(activeSendStatusAfter)
    expect(activeSendStatusBefore.changingFollowing[0]).toBe(userId2)
    expect(activeSendStatusAfter.changingFollowing[0]).not.toBeDefined()
})