import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let newPostEl = React.createRef()
    const addPost = () => {
        console.log(newPostEl.current.value)
    }
    return (
        <div>
            My posts
            <div>
                <textarea ref={newPostEl}></textarea>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={s.posts}>
                {props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}

export default MyPosts;