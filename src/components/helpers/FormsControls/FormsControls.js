import React from 'react';
import s from './FormsControls.module.css';

const Input = ({input, meta:{touched, error}, ...props}) => {
    let hasError = touched && error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <input {...input} {...props} type="text"/>
            {hasError && <div>{error}</div>}
        </div>
    )
};

const TextArea = ({input, meta:{touched, error}, ...props}) => {
    let hasError = touched && error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <textarea {...input} {...props}
                      cols="30" rows="10">
            </textarea>
            {hasError && <div>{error}</div>}
        </div>
    )
};

export {Input}
export {TextArea}
