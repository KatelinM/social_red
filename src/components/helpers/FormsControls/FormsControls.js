import React from 'react';
import s from './FormsControls.module.css';

const Input = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <input {...input} {...props} type="text"/>
            {hasError && <div>{meta.error}</div>}
        </div>
    )
};

const TextArea = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <textarea {...input} {...props}
                      cols="30" rows="10">
            </textarea>
            {hasError && <div>{meta.error}</div>}
        </div>
    )
};

export {Input}
export {TextArea}
