import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import './Button.scss'

const Button = (props) => {
    const { icon, onClick } = props;

    return (
        <button className="btn" onClick={onClick}>
            <FontAwesomeIcon icon={icon} size="lg"/>
        </button>
    )
}

export default Button;