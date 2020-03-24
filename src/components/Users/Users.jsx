import React from 'react';
import s from './Users.module.css';
import nobody from '../../assets/images/nobody.png'

function Users(props) {
    const onToggleFollow = (id) => {
        props.toggleFollow(id)
    };

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
                        <img src={u.photos.small ? u.photos.small : nobody} alt={u.name}/>
                        <div className={s.content}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                            <button onClick={() => onToggleFollow(u.id)}>
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