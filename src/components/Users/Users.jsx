import React from 'react';
import s from './Users.module.css';
import nobody from '../../assets/images/nobody.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

function Users(props) {
    const onToggleFollow = (id, isFollowed) => {
        props.toggleFollow(id);
        if (isFollowed) {
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "6c3b978f-8175-42d7-a35a-1aa93dfbec15",
                }
            })
                .then(response => {
                    if (response.data.resultCode == 0) {
                        props.toggleFollow(id);
                    }
                })
        } else {
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, null, {
                withCredentials: true,
                headers: {
                    "API-KEY": "6c3b978f-8175-42d7-a35a-1aa93dfbec15",
                }
            })
                .then(response => {
                    if (response.data.resultCode == 0) {
                        props.toggleFollow(id);
                    }
                })
        }
    }

    let buttonsCount = Math.ceil(props.totalUsersCount / props.usersPerPage);
    let puginationsButton = [];
    for (var i = 1; i <= buttonsCount; i++) {
        puginationsButton.push(i)
    }

    return (
        <>
            <div className="">
                {
                    puginationsButton.map(num => {
                        return <span key={num}
                                     className={props.currentPage === num ? s.selected : null}
                                     onClick={() => props.onPaginationClicked(num)}>
                                {num}
                            </span>
                    })
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small ? u.photos.small : nobody} alt={u.name}/>
                        </NavLink>
                        <div className={s.content}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                            <button onClick={() => onToggleFollow(u.id, u.isFollowed)}>
                                {u.isFollowed ? 'Отписаться' : 'Подписаться'}
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Users