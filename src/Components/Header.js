import React from 'react';
import Navbar from "./Navbar";
import {useStyles} from "./Classes";
import {Box, Button, Card, CardActions, CardContent, Grid, Typography} from "@material-ui/core";
import BurgerImg from "../assets/img/BurgerTransparent.png"
import PizzaImg1 from "../assets/img/pizzaTransparent.png"
import ClabSandwich from "../assets/img/ClabSandwich.png"
import Fire from "../assets/img/olov.png"
import Rocket from "../assets/img/raketa.png"

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.Header}>
            <Navbar/>

            <section id={"Header"} style={{marginTop: "68px"}}>
                <Grid container>
                    <Grid item xs={1} lg={0} xl={0}/>
                    <Grid item xs={10} lg={10} xl={10}>
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Grid xs={5}>
                                <Typography className={classes.HeaderTitle}>
                                    Siz izlagan mazali ta'mlar
                                </Typography>

                                <Box width={"85%"}>
                                    <Typography style={{fontSize: "18px", lineHeight: "32px", marginTop: "14px"}}>
                                        When an unknown printer took a galley of type
                                        scrambled it to make a type specimen
                                    </Typography>
                                </Box>

                                <Box display={"flex"} mt={"109px"}>
                                    <Card className={classes.CustomCard}>
                                        <CardActions style={{padding: "15px"}}>
                                            <Button variant={"text"} style={{borderRadius: "19px", background: "rgba(255, 255, 255, 0.3)",textTransform:"none",display:"flex",alignItems:"flex-end"}}>
                                                <img src={Fire} style={{marginRight:"5px"}} alt=""/>
                                                Yangi
                                            </Button>
                                        </CardActions>
                                        <CardContent>
                                            <Box display={"flex"} justifyContent={"space-around"}>

                                                <Box ml={2} mr={-2}>
                                                    <Typography>
                                                    <pre style={{
                                                        color: "#E76A06",
                                                        lineHeight: "34px",
                                                        fontSize: "34px",
                                                        fontWeight: "bold",
                                                        marginLeft: "5px",
                                                        overflowY:"hidden"
                                                    }}>
                                                        PIT <br/> -SA
                                                    </pre>
                                                    </Typography>
                                                </Box>


                                                <Box>
                                                    <img src={PizzaImg1} alt=""/>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>

                                    <Card className={classes.CustomCard}>
                                        <CardActions style={{padding: "15px"}}>
                                            <Button variant={"text"} style={{borderRadius: "19px", background: "rgba(255, 255, 255, 0.3)",textTransform:"none",display:"flex",alignItems:"flex-end"}}>
                                                <img src={Rocket} style={{marginRight:"10px"}} alt=""/>
                                                Ko'p sotilgan
                                            </Button>
                                        </CardActions>
                                        <CardContent>
                                            <Box display={"flex"} justifyContent={"space-around"}>

                                                <Box ml={2} mr={-2}>
                                                    <Typography>
                                                    <pre style={{
                                                        color: "#FC96F7",
                                                        lineHeight: "34px",
                                                        fontSize: "34px",
                                                        fontWeight: "bold",
                                                        marginLeft: "5px",
                                                        overflowY:"hidden"
                                                    }}>
                                                        KOM <br/> -BO
                                                    </pre>
                                                    </Typography>
                                                </Box>


                                                <Box>
                                                    <img src={ClabSandwich} alt=""/>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>
                            <Grid xs={7}>
                                <Box display={"flex"} height={"100%"} justifyContent={"center"} alignItems={"center"}>
                                    <img src={BurgerImg} width={721} style={{transform: "scale(1.2)"}} height={623}
                                         alt=""/>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={1} lg={1} xl={1}/>

                </Grid>
            </section>

        </div>


    );
};

export default Header;