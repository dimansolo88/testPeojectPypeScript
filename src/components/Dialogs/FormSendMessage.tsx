import p from "./Dialogs.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLength, minLengthCreator} from "../../Utilites/Validation/validation";
import {Textarea} from "../Common/ValidationForm/ValidationTextarea";


const maxlength5 = maxLength(5);
const minLength2 = minLengthCreator(2);


const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={p.send}>

                <Field  component={Textarea} validate={[maxlength5,minLength2]} name={"dialogSendMessage"}
                        placeholder={"enter you message"}/>


                <div className={p.send}>

                    <button>send message</button>

                </div>

            </div>


        </form>


    )
};


export const AddMessageReduxForm = reduxForm ({form: 'dialog-message-form'}) (AddMessageForm);

// export default AddMessageForm;

