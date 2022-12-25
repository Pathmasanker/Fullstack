import React from 'react';
import { AppBar, makeStyles, Toolbar} from '@material-ui/core';

import { NavLink } from 'react-router-dom';
import '../../App.css';

import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core';

//this component for user main navbar

const useStyles = makeStyles({

    header: {
        backgroundColor:"DarkViolet",
    },
    making: {
        paddingLeft: 50,
        color: '#fff',
        fontSize: '18px',
        textDecoration: 'none',
    },
    logout: {
        paddingLeft: 400,
        color: 'white',
        fontSize: '18px',
        textDecoration: 'none',
    }
});






const UserWelcome = () => {

    const history = useHistory();
const userlogout = ()=>{
    
    history.push("/ulogout");
}
   

    const classes = useStyles();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar >
            <NavLink to="/userprofile" className={classes.making}><em><h3><i>User_Details</i></h3></em></NavLink>
            <NavLink to="/SeeListOfDoctors" className={classes.making}><em><h3><i>AvailListOfDoctors</i></h3></em></NavLink>
                <NavLink to="/CreateAppoinments" className={classes.making}><em><h3><i>Make_Appoinment</i></h3></em></NavLink>
                
                <NavLink to="/waitingapprove" className={classes.making}><em><h3><i>Appoinment_Approvment</i></h3></em></NavLink>
                <NavLink to="/booking" className={classes.making}><em><h3><i>My_Appoinments</i></h3></em></NavLink>
                <NavLink to="/usermessages" className={classes.making}><em><h3><i>AdminReplyMsg</i></h3></em></NavLink>
                
                <Button onClick={userlogout} className={classes.making}>LogOut</Button>
            </Toolbar>
        </AppBar>
    )
    
}

export default UserWelcome;