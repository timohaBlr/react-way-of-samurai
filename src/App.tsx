import React from 'react';
import './App.css';
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import {ActionType, StateType} from "./redux/State";

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void

}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <div className={'header'}><Header/></div>
                <div className={'navbar'}><Navbar/></div>
                <div className={'content'}>
                    <Routes>
                        <Route path={'*'} element={<Profile state={props.state.profilePage}
                                                            dispatch={props.dispatch}
                        />}/>
                        <Route path="/profile" element={<Profile state={props.state.profilePage}
                                                                 dispatch={props.dispatch}
                        />}/>
                        <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage}
                                                                 dispatch={props.dispatch}
                        />}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
