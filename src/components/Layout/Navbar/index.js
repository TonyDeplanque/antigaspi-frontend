import React from "react";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss"

const Navbar = () => {
    return (
        <AppBar position="fixed" color="primary" enableColorOnDark>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="info"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <FontAwesomeIcon icon={faBars} size="lg"/>
                </IconButton>
                <Typography className="logo" color={"white"} variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    Antigaspi
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar