import React from "react";
import {ReduxStoreType} from "./redux/redux-store";


const StoreContext = React.createContext({} as ReduxStoreType)

export default StoreContext;