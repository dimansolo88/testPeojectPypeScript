import React from 'react';
import {Field, reduxForm} from "redux-form";


const AddpostForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>

            <div>
                <Field component={"textarea"} placeholder={"enter you new post"} name={"addNewPost"} type={"text"}/>



            </div>

            <div>
                <button> add post </button>
            </div>

        </form>

    )
};

export const AddPostReduxForm = reduxForm ({form: 'addNewPOst'}) (AddpostForm);


// export default AddpostForm;