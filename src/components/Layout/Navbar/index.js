import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";
import "./Navbar.scss"

const Navbar = () => {
    return (
        <AppBar className="navbar" position="fixed" color="primary" enableColorOnDark>
            <Toolbar>
                <Typography className="logo" color={"white"} variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    Antigaspi
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
