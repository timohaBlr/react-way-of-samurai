import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";


let renderPage = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}
                /* state={state}
                 dispatch={store.dispatch.bind(store)}*/
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderPage();
store.subscribe(()=>renderPage())



