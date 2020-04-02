import React from 'react';
import s from './Users.module.css';
import nobody from '../../assets/images/nobody.png'
import {NavLink} from "react-router-dom";

function User({user}, onToggleFollow) {
    return (
        <>
            {
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small ? user.photos.small : nobody} alt={user.name}/>
                    </NavLink>
                    <div className={s.content}>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                        <div>{'user.location.city'}</div>
                        <div>{'user.location.country'}</div>
                        <button onClick={() => onToggleFollow(user.id, user.isFollowed)}>
                            {user.isFollowed ? 'Отписаться' : 'Подписаться'}
                        </button>
                    </div>
                </div>

            }
        </>
    )
}

export default User