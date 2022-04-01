import React from "react";
import './Input.scss'

const FormInput = (props) => {
    const { type, name, id, label, placeholder } = props;
    const inputAttributes = {type, name, id, label, placeholder}
    return (
        <div className="form-control">
            { label && <label htmlFor={id}>{label}</label> }
            <input {...inputAttributes}/>
        </div>
    )
}

export default FormInput;