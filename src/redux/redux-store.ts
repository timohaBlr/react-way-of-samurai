import {newPostReducer} from "./reducers/new-post-reducer";
import {dialogsAddReducer} from "./reducers/dialogs-add-reducer";
import {combineReducers, legacy_createStore as createStore} from 'redux'

let reducers = combineReducers({
    profilePage: newPostReducer,
    dialogsPage: dialogsAddReducer
})

export type ReduxStoreType = ReturnType<typeof createStore> // kostil?
export const store = createStore(reducers)


export default store;