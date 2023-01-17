import {profileReducer} from "./reducers/profile-reducer";
import {dialogsAddReducer} from "./reducers/dialogs-add-reducer";
import {combineReducers, legacy_createStore as createStore} from 'redux'
import {usersReducer} from "./reducers/users-reducer";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsAddReducer,
    usersPage: usersReducer,
})


export const store = createStore(rootReducer)


export default store;