import React from 'react';

import { Link } from 'react-router-dom';
import { Grid, Typography, Button, makeStyles } from '@material-ui/core/';
import Cart from './Cart';

const useStyles = makeStyles((theme) => ({
    button: {
        color: "orange",
        fontSize: "25px",
        backgroundColor: "blue",
        marginTop: "7px",
    },
    container: {
        marginBottom: "30px",    
    },

    h4 :{
        color: "orange",
    },
  }));

const Header = () => {
   
    const classes = useStyles();

    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12} className={classes.container}>
            <Typography variant='h3' className={classes.h4}>
                Star Funko 
            </Typography>
            <Link to="/">
                <Button className={classes.button}>Home</Button>
            </Link>
            <Link to="/contato">
                <Button className={classes.button}>Contato</Button>
            </Link>
            <Cart />   
        </Grid>
    )
};

export default Header;
