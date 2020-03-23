import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let newMessageEl =React.createRef()
    let addMessage = () => {
        console.log(newMessageEl.current.value)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.data.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)}
            </div>
            <div className={s.massages}>
                <Message message='555555555'/>
                <Message message='4'/>
                <Message message='3'/>
                <div>
                    <textarea ref={newMessageEl}></textarea>
                    <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;