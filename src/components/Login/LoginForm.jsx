import React from 'react';
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {


    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} name={"login"} placeholder={"enter yor login or e mail"} type="text"/>

            </div>

            <div>
                <Field component={"input"} name={"password"} placeholder={"enter your password"} type="text"/>

            </div>

            <div>
                <Field component={"input"} name={"remember me"} type="checkbox"/> remember me

            </div>


            <div>
                <button> Sign In</button>

            </div>


        </form>


    )


};


export const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);


// export default LoginForm;