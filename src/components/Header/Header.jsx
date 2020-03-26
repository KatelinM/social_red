import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' alt=""/>
        <div className={s.login}>
            {
                props.isAuthorized ? props.authUserData.login : <NavLink to='/login'>login</NavLink>
            }
        </div>
    </header>
};

export default Header;