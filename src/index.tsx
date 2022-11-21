import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./redux/State";



ReactDOM.render(
    <App
    user={state.profilePage.user}
    dialogs={state.dialogsPage.dialogs}
    messages={state.dialogsPage.messages}
    posts={state.profilePage.posts}/>,
    document.getElementById('root')
);