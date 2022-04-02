import React from "react";
import {Button} from "@mui/material";
import '../Button.scss';

const ButtonSuccess = ({children, type}) => {
    return (
        <Button type={type || 'button'} className="btn btn--success" variant="contained" color="form" size={"large"} disableElevation>{children}</Button>
    )
}

export default ButtonSuccess;