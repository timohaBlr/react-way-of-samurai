import {newPostReducer} from "./reducers/new-post-reducer";
import {dialogsAddReducer} from "./reducers/dialogs-add-reducer";
import {combineReducers, legacy_createStore as createStore} from 'redux'
import {usersReducer} from "./reducers/users-reducer";

export const rootReducer = combineReducers({
    profilePage: newPostReducer,
    dialogsPage: dialogsAddReducer,
    usersPage: usersReducer,
})


export const store = createStore(rootReducer)


export default store;