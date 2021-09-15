import React, {useState} from 'react';
import {AppBar, Box, Grid, IconButton, Toolbar, Typography} from "@material-ui/core";
import {useStyles} from "./Classes";
import {MaxWayIcon} from "../assets/CustomIcons";
import {CallOutlined, LocalMall} from "@material-ui/icons";
import {Link} from "react-router-dom";

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar position={"static"} elevation={0} color={"transparent"}>

                <Box my={2}>
                    <Toolbar>

                        <Grid container>
                            <Grid item xs={1} lg={0} xl={0}/>
                            <Grid item xs={10} lg={10} xl={10}>
                                <Box display={"flex"} justifyContent={"space-between"}>
                                    <IconButton className={classes.customIconButton}>
                                        <MaxWayIcon/>
                                    </IconButton>
                                    <Box display={"flex"} width={256} style={{marginRight:"-286px"}} justifyContent={"space-between"} alignItems={"center"}>
                                        <Typography><Link to={"/"} className={classes.Links} >Menyu</Link></Typography>
                                        <Typography><Link to={"/"} className={classes.Links} >Bolalar uchun</Link></Typography>
                                        <Typography><Link to={"/"} className={classes.Links} >Filiallar</Link></Typography>
                                    </Box>
                                    <Box display={'flex'} width={456} justifyContent={"space-around"} alignItems={"center"}>
                                        <Box display={'flex'} width={156} justifyContent={"space-around"} alignItems={"center"}>
                                            <CallOutlined color={"primary"}/>
                                            <Typography className={classes.textWhite}>(+99871)<span style={{fontSize:"22px",lineHeight:"5px"}}><br/>200-54-00</span></Typography>

                                        </Box>

                                        <Box display={'flex'} width={156} justifyContent={"space-evenly"} alignItems={"center"}>
                                            <LocalMall color={"primary"}/>
                                            <Typography className={classes.textWhite}>Korzina<span style={{fontSize:"22px",lineHeight:"5px"}}><br/>00 UZS</span></Typography>
                                        </Box>

                                    </Box>

                                </Box>

                            </Grid>
                            <Grid item xs={1} lg={1} xl={1}/>

                        </Grid>



                    </Toolbar>
                </Box>

        </AppBar>
    );
};

export default Navbar;