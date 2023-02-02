import {authReducer, initialState, setAuthorisedUserAC} from "./auth-reduser";

test('authorised user data should be set', () => {
    const data = {
        id: 2,
        email: '1212@gmail.com',
        login: 'asdasd',
        avatar: '',
    }
    const authorised = authReducer(initialState, setAuthorisedUserAC(data))

    expect(initialState).not.toBe(authorised)
    expect(authorised.isLogin).toBeTruthy()
    expect(authorised.login).toBeDefined()
})
