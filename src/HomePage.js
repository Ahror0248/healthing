import React from 'react';
import Navbar from "./Components/Navbar";
import {Box, Container, Grid} from "@material-ui/core";
import {useStyles} from "./Components/Classes";
import Header from "./Components/Header";
import Main from "./Components/Main";

const HomePage = () => {
    const classes = useStyles();
    return (
        <div className={classes.containerFluid}>
            <Grid container justifyContent={"center"}>
                <Grid item lg={12} md={12} sm={12}>
                    <Header/>
                    <Main/>
                </Grid>
            </Grid>
        </div>
    );
};

export default HomePage;