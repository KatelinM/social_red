import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Diologs/Dialogs";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs/>}/>

                    {/*<Route path="/profile" component={Profile}/>*/}
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/> }/>
                    <Route path="/users" render={() => <UsersContainer/> }/>
                    <Route path="/login" render={() => <Login/> }/>

                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;