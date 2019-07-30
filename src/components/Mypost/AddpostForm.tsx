import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLength, minLengthCreator} from "../../Utilites/Validation/validation";
import {Textarea} from "../Common/ValidationForm/ValidationTextarea";


const maxLength5 = maxLength(5);
const minLength = minLengthCreator(2);

const AddpostForm = (props: any) => {
    return (

        <form onSubmit={props.handleSubmit}>

            <div>
                <Field component={Textarea} placeholder={"enter you new post"}
                       validate={[maxLength5,minLength ]} name={"addNewPost"} type={"text"}/>



            </div>

            <div>
                <button> add post </button>
            </div>

        </form>

    )
};

export const AddPostReduxForm = reduxForm ({form: 'addNewPOst'}) (AddpostForm);


// export default AddpostForm;