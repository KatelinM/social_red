import React, {Component} from 'react';
import s from './Users.module.css';
import * as axios from "axios";
import nobody from '../../assets/images/nobody.png'

class Users extends Component {

    getUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPerPage}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    };

    componentDidMount() {
        this.getUsers()
    };

    render() {
        const onToggleFollow = (id) => {
            this.props.toggleFollow(id)
        };

        let buttonsCount = Math.ceil(this.props.totalUsersCount / this.props.usersPerPage);
        let puginationsButton = [];
        for (var i = 1; i <= buttonsCount; i++) {
            puginationsButton.push(i)
        }

        let onPaginationClicked = (num) => {
            this.props.setCurrentPage(num)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPerPage}&page=${num}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        };

        return (
            <>
                <div className="">
                    {
                        puginationsButton.map(num => {
                            return <span key={num}
                                         className={this.props.currentPage === num ? s.selected : null}
                                         onClick={() => onPaginationClicked(num)}>
                                {num}
                            </span>
                        })
                    }
                </div>
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