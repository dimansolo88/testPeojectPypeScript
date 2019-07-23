import React from 'react';
import style from './texareaValidation.module.css'


export const Textarea = ({meta, input, ...props}) => {
    return (
        <div className={ meta.error && meta.touched  && style.showError}>

            <textarea  {...input} {...props} />

            <div>

                {meta.error && meta.touched && <span> {meta.error} </span> }

            </div>

        </div>
    )
};