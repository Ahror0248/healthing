import React from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    IconButton, makeStyles, Tab,
    Tabs,
    Typography
} from "@material-ui/core";
import {Database} from "./Database";
import {useStyles} from "./Classes";
import {Add} from "@material-ui/icons";
import TuneIcon from '@material-ui/icons/Tune';
import PropTypes from "prop-types";
import Mapper from "../Actions/Mapper";

const Main = () => {

    function TabPanel(props) {
        const {children, value, index, ...other} = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
        },
        CustomCard: {
            width: "255px",
            height: "200px",
            borderRadius: "12px",
            '&:nth-child(1)': {
                background: "linear-gradient(315.49deg, #FFC85C 1.32%, #F1B301 96.68%)",
            },
            '&:nth-child(2)': {
                background: "#800A7A",
                marginLeft: "30px"
            }


        },
        CustomCards: {
            width: "540px",
            margin: "30px",
            border: "1px solid rgba(151, 151, 151, 0.181927)",
            padding: "30px",
            boxSizing: "border-box",
            display: "flex",
        },
        CustomButton: {
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "none",
            flexDirection: "column",
            color: "#fff",
            backgroundColor: "#F1B301",
            fontSize: "32px",
            padding: "0"
        },
        IconButton: {
            background: "#F1B301",
            color: "#fff",
            transition: "all 0.2s linear",
            '&:hover': {
                transform: "scale(1.1)",
                background: "#F1B301",
                color: "#fff",
            }
        },
        FilterButton: {
            textTransform: "none",
            // background: "#F1B301",
            // color: "#fff",
            borderRadius: "27px",
            padding: "10px",
            transition: "all 0.2s linear",
            '&:active': {
                background: "#F1B301",
            },
            '&:hover': {
                transform: "scale(1.1)",
                background: "#F1B301",
                color: "#fff",
            },
            '&:last-child': {
                textTransform: "none",
                background: "#948f8f",
                color: "#fff",
                borderRadius: "27px",
                padding: "10px",
                transition: "all 0.2s linear",
                '&:hover': {
                    transform: "scale(1.1)",
                    background: "#948f8f",
                    color: "#fff",
                },
            },

        }
    }));

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section id={"Main"} style={{marginTop: "68px"}}>
            <Grid container>
                <Grid item xs={1} lg={0} xl={0}/>
                <Grid item xs={10} lg={10} xl={10}>
                    <Grid container xs={12}>

                        <Box display={"flex"} width={"100%"} ml={4} justifyContent={"space-between"}>
                            {/*<Button component={"NavLink"} to={"/hi"} className={classes.FilterButton}>Barchasi</Button>*/}
                            {/*<Button component={"NavLink"} to={"/hi2"} className={classes.FilterButton}>Pitsalar</Button>*/}
                            {/*<Button component={"NavLink"} to={"/h3i"} className={classes.FilterButton}>Burgerlar</Button>*/}
                            {/*<Button component={"NavLink"} to={"/hi5"} className={classes.FilterButton}>Kombo</Button>*/}
                            {/*<Button component={"NavLink"} to={"/hi6"} className={classes.FilterButton}>Salatlar</Button>*/}
                            {/*<Button component={"NavLink"} to={"/hi7"} className={classes.FilterButton}>Ichimliklar</Button>*/}
                            {/*<Button component={"NavLink"} to={"/hi8"} className={classes.FilterButton}>Filtr<TuneIcon style={{width:"16.7px"}} color={"secondary"}/></Button>*/}

                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant={"fullWidth"}
                                centered
                            >
                                <Tab label="Barchasi"/>
                                <Tab label="Pitsa"/>
                                <Tab label="Burger"/>
                                <Tab label="Kombo"/>
                                <Tab label="Salatlar"/>
                                <Tab label="Ichimliklar"/>
                            </Tabs>
                        </Box>

                        <TabPanel value={value} index={0}>
                            <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"}>
                                <Mapper type={"Pizza"}/>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"}>
                                <Mapper type={"Burger"}/>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={2}>

                        </TabPanel>
                        <TabPanel value={value} index={3}>

                        </TabPanel>
                        <TabPanel value={value} index={4}>

                        </TabPanel>
                        <TabPanel value={value} index={5}>

                        </TabPanel>


                    </Grid>

                </Grid>
                <Grid item xs={1} lg={1} xl={1}/>

            </Grid>
        </section>
    );
};

export default Main;