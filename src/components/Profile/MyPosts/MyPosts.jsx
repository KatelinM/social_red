import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validator";
import {TextArea} from "../../helpers/FormsControls/FormsControls";
import formStyle from "../../helpers/FormsControls/FormsControls.module.css";


let maxLength = maxLengthCreator(5);
let minLength = minLengthCreator(2);

let PostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="post"
                   name="post"
                   component={TextArea}
                   type="text"
                   validate={[required, maxLength, minLength]}
            />
        </div>
        <button type="submit">Add post</button>
    </form>
};

PostForm = reduxForm({
    // a unique name for the form
    form: 'post'
})(PostForm);

const MyPosts = (props) => {
    let submit = (data) => {
        props.addPost(data.post)
    };

    return (
        <div>
            My posts
            <div>
                <PostForm onSubmit={submit}/>
            </div>
            <div className={s.posts}>
                {props.data.posts.map((p, i) => <Post key={i} message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
};

export default MyPosts;