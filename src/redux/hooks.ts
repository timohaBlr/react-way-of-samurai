import store, {rootReducer} from "./redux-store";

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = typeof store.dispatch