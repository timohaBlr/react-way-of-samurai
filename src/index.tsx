import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/State";


let renderPage =() => {
    ReactDOM.render(
        <App
            state={store.getState()}
            addPost={store.addPost.bind(store)}
            updateTextArea={store.updateTextArea.bind(store)}
            />,
        document.getElementById('root')
    );
}
//store.subscribe()
renderPage();
store.subscribe(renderPage)



