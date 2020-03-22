import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostAC, updateNewPostAC} from "../../redux/profileReducer";

const MyPosts = (props) => {
    let newPostEl = React.createRef()
    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const onPostChange = () => {
        let text = newPostEl.current.value;
        props.dispatch(updateNewPostAC(text))
    };

    return (
        <div>
            My posts
            <div>
                <textarea
                    ref={newPostEl}
                    value={props.data.newPostText}
                    onChange={ onPostChange }/>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={s.posts}>
                {props.data.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}

export default MyPosts;