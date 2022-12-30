import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import {Routes, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import {ReduxStoreType} from "./redux/redux-store";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

type AppPropsType = {
    /*state: StateType
    dispatch: (action: ActionsType) => void*/
    store: ReduxStoreType
}

function App(props: AppPropsType) {
    return (
        <div className="App">
            <div className={'header'}><Header/></div>
            <div className={'navbar'}><Navbar/></div>
            <div className={'content'}>
                <Routes>
                    <Route path={'/*'} element={<ProfileContainer store={props.store}
                    />}/>
                    <Route path="/profile" element={<ProfileContainer store={props.store}
                    />}/>
                    <Route path="/dialogs" element={<DialogsContainer store={props.store}
                    />}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
