import {profileReducer} from "./reducers/profile-reducer";
import {dialogsAddReducer} from "./reducers/dialogs-add-reducer";
import {combineReducers, legacy_createStore as createStore} from 'redux'
import {usersReducer} from "./reducers/users-reducer";
import {authReducer} from "./reducers/auth-reduser";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsAddReducer,
    usersPage: usersReducer,
    authentication: authReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)


export default store;