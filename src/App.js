import React, {Suspense} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Diologs/Dialogs";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Loader from "./components/Loader/Loader";
import withLazy from "./components/hoc/withLazy";

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path="/" render={() => <ProfileContainer/>}/>

                    <Route path="/dialogs" render={() => <Dialogs/>}/>

                    {/*<Route path="/profile" component={Profile}/>*/}
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => withLazy(UsersContainer)}/>
                    <Route path="/login" render={() => withLazy(Login)}/>

                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;