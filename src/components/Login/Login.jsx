import React from 'react';
import {LoginReduxForm} from "./LoginForm";
import style from "./login.module.css"



const Login = (props) => {

    const onSubmit = (data) => {
        // console.log(data)

    };



    return <div className={style.login} >

        <h1> Login </h1>
        <LoginReduxForm onSubmit={onSubmit}/>



    </div>
};


export default Login;