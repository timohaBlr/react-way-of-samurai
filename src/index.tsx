import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost} from "./redux/State";



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

