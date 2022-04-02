import React from "react";
import {Button} from "@mui/material";

import '../Button.scss';

const ButtonRefuse = ({children, onClick}) => {
    return (
        <Button onClick={onClick} className="btn btn--refuse" variant="contained" color="error" size={"large"} disableElevation>{children}</Button>
    )
}

export default ButtonRefuse;