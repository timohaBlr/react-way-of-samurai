import React from 'react';
import {ReduxStoreType} from "./redux/redux-store";
import {StateType} from "./redux/store";

type ContainerType = {
    store: ReduxStoreType
}
const Container = (props: ContainerType) => {
    const state = props.store.getState() as StateType
    return (
        <div>
            <h1>{state.profilePage.user.name}</h1>
        </div>
    );
};

export default Container;