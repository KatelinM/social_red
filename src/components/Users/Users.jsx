import React from 'react';
import s from './Users.module.css';
import nobody from '../../assets/images/nobody.png'
import {NavLink} from "react-router-dom";
import Paginator from "../Paginator/Paginator";
import User from "./User";

function Users(props) {
    const onToggleFollow = (id, isFollowed) => {
        props.toggleFollowThunkCreator(id, isFollowed)
    };

    return (
        <>
            <Paginator totalItemsCount={props.totalUsersCount}
                       usersPerPage={props.usersPerPage}
                       currentPage={props.currentPage}
                       onPaginationClicked={props.onPaginationClicked}/>
            {
                props.users.map(user => <User user={user} onToggleFollow={onToggleFollow}/>)
            }
        </>
    )
}

export default Users