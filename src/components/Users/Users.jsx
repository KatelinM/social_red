import React, {Component} from 'react';
import s from './Users.module.css';
import * as axios from "axios";
import nobody from '../../assets/images/nobody.png'

class Users extends Component {
    userMock = [
        {
            id: 1,
            img: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/03/Rick-and-Morty-Worlds-SM.jpg?q=50&fit=crop&w=960&h=500',
            name: "Anna",
            status: "I'm happy",
            location: {city: 'Minsk', country: 'Bel'},
            isFollowed: false
        },
        {
            id: 2,
            img: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/03/Rick-and-Morty-Worlds-SM.jpg?q=50&fit=crop&w=960&h=500',
            name: "Alex",
            status: "I'm happy",
            location: {city: 'Minsk', country: 'Bel'},
            isFollowed: false
        },
        {
            id: 3,
            img: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/03/Rick-and-Morty-Worlds-SM.jpg?q=50&fit=crop&w=960&h=500',
            name: "Taylor",
            status: "I'm happy",
            location: {city: 'Minsk', country: 'Bel'},
            isFollowed: false
        },
        {
            id: 4,
            img: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/03/Rick-and-Morty-Worlds-SM.jpg?q=50&fit=crop&w=960&h=500',
            name: "Swift",
            status: "I'm happy",
            location: {city: 'Minsk', country: 'Bel'},
            isFollowed: false
        },
    ];

    getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=3&pageNumber=3')
            .then(response => this.props.setUsers(response.data.items))
    };

    componentDidMount() {
        this.getUsers()
    };

    render() {
        const onToggleFollow = (id) => {
            this.props.toggleFollow(id)
        };

        return (
            <>
                {
                    this.props.users.map(u => <div key={u.id}>
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
}

export default Users