import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import {Routes, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {ProfileContainer} from "./Components/Profile/ProfileContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";

type AppPropsType = {}

function App(props: AppPropsType) {
    return (
        <div className="App">
            <div className={'header'}><Header/></div>
            <div className={'navbar'}><Navbar/></div>
            <div className={'content'}>
                <Routes>
                    <Route path={'/*'} element={<ProfileContainer/>}/>
                    <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                    <Route path="/dialogs" element={<DialogsContainer/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
