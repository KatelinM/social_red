import React from 'react';
import { Field, reduxForm } from 'redux-form'

let LoginForm = props => {
  return <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Field placeholder="email" name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field placeholder="password" name="password" component="input" type="password" />
      </div>
      <div>
        <label htmlFor="remember">Password</label>
        <Field name="remember" component="input" type="checkbox" />
      </div>
      <button type="submit">Submit</button>
    </form>
};

LoginForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm);

const Login = () => {
    let submit = (data) => {console.log(data)}
    return <>
        <h1>Login</h1>
        <LoginForm onSubmit={submit}/>
    </>
};

export default Login