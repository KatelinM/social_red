import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Diologs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {console.log(props)
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path="/dialogs" render={() => <Dialogs data={props.appState.dialogsPage}/>}/>

                    {/*<Route path="/profile" component={Profile}/>*/}
                    <Route path="/profile" render={() => <Profile data={props.appState.profilePage}
                                                                  addPost={props.addPost}
                                                                  updateNewPostText={props.updateNewPostText}/> }/>

                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;