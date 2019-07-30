import React from 'react';
import style from './texareaValidation.module.css'


// @ts-ignore
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

//@ts-ignore
export const Input = ({meta, input, ...props}) => {
    return (
        <div className={ meta.error && meta.touched  && style.showError}>

            <input  {...input} {...props} />

            <div>

                {meta.error && meta.touched && <span> {meta.error} </span> }

            </div>

        </div>
    )
};