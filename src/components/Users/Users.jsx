import React from 'react';
import s from './Users.module.css';

const Users = (props) => {

    const onToggleFollow = (id) => {
        props.toggleFollow(id)
    };

    return (
        <>
            {
                props.userPage.users.map(u => <div>
                        <img src={u.img}/>
                        <div className={s.content}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                            <button onClick={() => onToggleFollow(u.id)}>{u.isFollowed ? 'Отписаться' : 'Подписаться'}</button>
                        </div>
                    </div>
                )
            }
        </>
    )
};

export default Users