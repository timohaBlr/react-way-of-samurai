import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {addPost, updateTextArea, StateType} from "./redux/State";



let renderPage =(state: StateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updateTextArea={updateTextArea}
            /* user={state.profilePage.user}
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
      posts={state.profilePage.posts}  */ />,
        document.getElementById('root')
    );
}
store.subscribe(renderPage)
renderPage(store.getState())


