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
import {DialogsType, MessagesType, PostsType, StateType, UserType} from "./redux/State";

type AppPropsType = {
    state: StateType
    addPost:(postText:string)=> void
    /*user: UserType
    dialogs:Array<DialogsType>
    messages: Array<MessagesType>
    posts: Array<PostsType>*/
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <div className={'header'}><Header/></div>
                <div className={'navbar'}><Navbar/></div>
                <div className={'content'}>
                    <Routes>
                        <Route path="/profile" element={<Profile state={props.state.profilePage}
                                                                 addPost={props.addPost}
                            /*user={props.user}
                            posts={props.posts}*/
                        />}/>
                        <Route path="/dialogs" element={<Dialogs state={props.state.dialogsPage}
                            /*dialogs={props.dialogs}
                            messages={props.messages}*/
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
