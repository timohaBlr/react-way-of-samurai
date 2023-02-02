import {profileReducer} from "./reducers/profile-reducer";
import {dialogsAddReducer} from "./reducers/dialogs-add-reducer";
import {Action, applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import {usersReducer} from "./reducers/users-reducer";
import {authReducer} from "./reducers/auth-reduser";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsAddReducer,
    usersPage: usersReducer,
    authentication: authReducer,
})

const middlewareEnhancer = applyMiddleware(thunkMiddleware)
const composedEnhancers = composeWithDevTools(middlewareEnhancer)
export const store = createStore(rootReducer, composedEnhancers)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatchType = ThunkDispatch<RootState, void, Action>
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunk<A extends Action, ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, A>
export type AppAsyncThunk<A extends Action, ReturnType = Promise<void>> = ThunkAction<ReturnType, RootState, unknown, A>


export default store;

// @ts-ignore
window.store = store // for debugging