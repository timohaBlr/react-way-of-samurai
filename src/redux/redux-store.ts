import {profileReducer} from "./reducers/profile/profile-reducer";
import {dialogsAddReducer} from "./reducers/dialogs-add-reducer";
import {Action, AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import {usersReducer} from "./reducers/users/users-reducer";
import {authReducer} from "./reducers/auth-reduser";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {appReducer} from "./reducers/app/app-reducer";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsAddReducer,
    usersPage: usersReducer,
    authentication: authReducer,
    app: appReducer,
})

const middlewareEnhancer = applyMiddleware<AppDispatchType, AppRootStateType>(thunkMiddleware)
const composedEnhancers = composeWithDevTools(middlewareEnhancer)
export const store = createStore(rootReducer, composedEnhancers)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatchType = ThunkDispatch<AppRootStateType, void, AnyAction>
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunk<A extends Action, ReturnType = void> = ThunkAction<
    ReturnType, AppRootStateType, unknown, A>
export type AppAsyncThunk<A extends Action, ReturnType = Promise<void>> = ThunkAction<
    ReturnType,
    AppRootStateType,
    unknown,
    A>


export default store;

// @ts-ignore
window.store = store // for debugging