import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {Input} from "../helpers/FormsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validator";
import formStyle from "../helpers/FormsControls/FormsControls.module.css";
import {connect} from "react-redux";
import {logIn} from "../redux/authReducer";
import {Redirect} from "react-router-dom";

let maxLength = maxLengthCreator(25);
let minLength = minLengthCreator(3);

let LoginForm = props => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <label htmlFor="email">Email</label>
            <Field placeholder="email"
                   name="email"
                   component={Input}
                   validate={[required, maxLength, minLength]}
                   type="email"/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <Field placeholder="password"
                   name="password"
                   component={Input}
                   validate={[required, maxLength, minLength]}
                   type="password"/>
        </div>
        <div>
            <label htmlFor="remember">Remember me</label>
            <Field name="remember"
                   component="input"
                   type="checkbox"/>
        </div>
        {
            props.error && <div className={formStyle['form-error']}>
                {props.error}
            </div>
        }
        <button type="submit">Submit</button>
    </form>
};

LoginForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);

const Login = (props) => {
    let submit = (data) => {
        props.logIn(data.email, data.password, data.rememberMe)
    };

    if (props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return <>
        <h1>Login</h1>
        <LoginForm onSubmit={submit}/>
    </>
};

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {logIn})(Login)