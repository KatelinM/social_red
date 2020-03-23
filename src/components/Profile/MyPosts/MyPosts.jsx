import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let newPostEl = React.createRef();

    const onPostChange = () => {
        let text = newPostEl.current.value;
        props.postChange(text)
    };
    const onAddPost = () => {
        props.addPost()
    };

    return (
        <div>
            My posts
            <div>
                <textarea
                    ref={newPostEl}
                    value={props.data.newPostText}
                    onChange={ onPostChange }/>
                <button onClick={ onAddPost }>Add post</button>
            </div>
            <div className={s.posts}>
                {props.data.posts.map((p,i) => <Post key={i} message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
};

export default MyPosts;