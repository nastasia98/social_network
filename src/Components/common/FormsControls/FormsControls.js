import styles from './FormsControls.module.css'
import React from "react";
import {requireField} from "../../../utils/validators/validators";
import {Field} from "redux-form";

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : ' ')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...Restprops} = props;
    return <FormControl {...props}><textarea {...input} {...Restprops} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...Restprops} = props;
    return <FormControl {...props}><input {...input} {...Restprops} /></FormControl>
}
