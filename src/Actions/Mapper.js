import React from 'react';
import {Database} from "../Components/Database";
import {Box, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import {useStyles} from "../Components/Classes";

const Mapper = (props) => {
    const Type = props;
    const classes = useStyles();
    return (
        <>
            {
                Database.map((item) => {

                    if (Type.type === item.type) {
                        return (
                            <Grid xs={6}>
                                <Card elevation className={classes.CustomCards}>
                                    <CardMedia>
                                        <img src={`${item.imgSrc}`} alt="imgSrcNotFound"/>
                                    </CardMedia>
                                    <Box display={"flex"} flexDirection={"column"}>
                                        <CardContent>
                                            <Box mb={1}>
                                                <Box display={"flex"} alignItems={"start"}>
                                                    <Typography style={{
                                                        marginBottom: "8px",
                                                        fontWeight: "bold"
                                                    }} variant={"h5"}>{item.title}</Typography>
                                                    <img style={{marginLeft: "10px"}}
                                                         src={`${item.titleImg}`} alt=""/>
                                                </Box>

                                                <Typography style={{
                                                    fontSize: "14px",
                                                    opacity: "0.4"
                                                }}>{item.description}</Typography>
                                            </Box>
                                        </CardContent>
                                        <CardActions>
                                            <Box display={"flex"} ml={1} width={"100%"}
                                                 justifyContent={"space-between"} alignItems={"center"}>
                                                <Typography variant={"h5"}>{item.price} UZS</Typography>
                                                <IconButton
                                                    className={classes.IconButton}><Add/></IconButton>
                                            </Box>
                                        </CardActions>
                                    </Box>
                                </Card>
                            </Grid>
                        )
                    }
                })
            }
        </>
    );
};

export default Mapper;