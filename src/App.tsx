import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Header} from "./Components/Header/Header";
import {Routes, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {ProfileContainer} from "./Components/Profile/ProfileContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {Login} from "./Components/Login/Login";
import {initial, setAuthorisedUserTC} from "./redux/reducers/auth-reduser";
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import {Preloader} from "./Components/Common/Preloader/Preloader";
import {selectAppReady} from "./redux/reducers/app/selectors";


function App() {
    const dispatch = useAppDispatch()
    const appReady = useAppSelector(selectAppReady)
    useEffect(() => {
        dispatch(setAuthorisedUserTC())
    }, [dispatch])
    if (!appReady) {
        return <Preloader/>
    } else return (<div className="App">
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
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
