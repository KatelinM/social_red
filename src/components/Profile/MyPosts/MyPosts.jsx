import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let newPostEl = React.createRef()
    const addPost = () => {
        props.addPost(newPostEl.current.value)
    }

    const onPostChange = () => {
        props.updateNewPostText(newPostEl.current.value)
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