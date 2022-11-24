import ReactDOM from "react-dom";
import App from "../App";

import React from "react";
import {addPost, StateType} from "./State";


export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            /* user={state.profilePage.user}
     dialogs={state.dialogsPage.dialogs}
     messages={state.dialogsPage.messages}
     posts={state.profilePage.posts}*//>,
        document.getElementById('root')
    );
}