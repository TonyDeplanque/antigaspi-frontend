import React from "react";
import './Modal.scss'
import {Button, ThemeProvider} from "@mui/material";
import theme from "../../../config/theme";
import ButtonRefuse from "../Button/ButtonRefuse";
import ButtonSuccess from "../Button/ButtonSuccess";

const Modal = (props) => {
    const { onClose, children, title } = props;
    return (
        <div>
            <div className="modal" onClick={onClose}>
            </div>
            <div className="modal__container">
                <div className="modal__container__title">
                    { title}
                </div>
                <div className="modal__container__content">
                    { children }
                </div>
            </div>
        </div>
    )
}

export default Modal;