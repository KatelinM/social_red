import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Diologs/Dialogs";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path="/dialogs" render={() => <Dialogs/>}/>

                    {/*<Route path="/profile" component={Profile}/>*/}
                    <Route path="/profile" render={() => <Profile/> }/>
                    <Route path="/users" render={() => <UsersContainer/> }/>

                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;