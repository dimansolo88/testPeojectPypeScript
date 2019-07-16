import p from "./Dialogs.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={p.send}>

                <Field component={"textarea"} name={"dialogSendMessage"} placeholder={"enter you message"}/>

                <div className={p.send}>

                    <button>send message</button>

                </div>

            </div>


        </form>


    )
};


export const AddMessageReduxForm = reduxForm ({form: 'dialog-message-form'}) (AddMessageForm);

// export default AddMessageForm;

