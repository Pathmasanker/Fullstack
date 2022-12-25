import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import '../../App.css'
import Typography from '@mui/material/Typography';



//this component for main navbar for application

const useStyles = makeStyles({
    header: {
        backgroundColor: "lightviolet",
      
    },

    making: {
        
        paddingLeft: 70,
        fontfamily : 'cursive',
        fontSize: '13px',
        textDecoration: 'none',
        color: 'white',
        
        

    },
  
});

const MainNavbar = () => {
    const classes = useStyles();
    
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar >
                <NavLink to="/" className={classes.making}> <h1>⚕️<i>FRACTO</i></h1></NavLink>
               
                
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    
    
    </Typography>
                <NavLink to="/user" className={classes.making}><h2><i>User_L/R</i></h2></NavLink>
                <NavLink to="/AdminLogin" className={classes.making}> <h2><i>Admin_L/R</i></h2></NavLink>
                <NavLink to="/DeanLogin" className={classes.making}> <h2><i>Dean_L</i></h2></NavLink>
           
        </Toolbar>
        </AppBar>


    )
}

export default MainNavbar;