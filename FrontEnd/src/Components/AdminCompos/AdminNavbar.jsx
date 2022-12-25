import React from 'react';
import { AppBar, makeStyles, Toolbar} from '@material-ui/core';

import { NavLink } from 'react-router-dom';

import '../../App.css'

import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core';

//this component for main navbar to admin

const useStyles = makeStyles({

    header: {
        backgroundColor: "DarkViolet",
    },
    making: {
        paddingLeft: 30,
        color: '#fff',
        fontSize: '18px',
        textDecoration: 'none',
    },
    logout: {
        paddingLeft: 100,
        color: 'white',
        fontSize: '18px',
        textDecoration: 'none',
    }
});






const AdminNavbar = () => {
    const classes = useStyles();


    const history = useHistory();

const Adminlogout = ()=>{
    
    history.push("/logout");
}


    
    return (
       
        <AppBar className={classes.header} position="static">
            <Toolbar >

                <NavLink to="/profile" className={classes.making}><em><h3><i>Admin_Details</i></h3></em></NavLink>
                <NavLink to="/CreateDoctors" className={classes.making}><em><h3><i>Add_Doctors</i></h3></em></NavLink>
                <NavLink to="/bookingapprove" className={classes.making}><h3><i>Appoinment_Approvment</i></h3><em></em></NavLink>
                <NavLink to="/BookedAppoinments" className={classes.making}><em><h3><i>Booked_Appoinments</i></h3></em></NavLink>
                <NavLink to="/AllDoctors" className={classes.making}><em><h3><i>Doctors_Storage</i></h3></em></NavLink>
                <NavLink to="/MsgAdmin" className={classes.making}><em><h3><i>Msg</i></h3></em></NavLink>
                <NavLink to="/usercrud" className={classes.making}><em><h3><i>UserEngage</i></h3></em></NavLink>
               
                <Button onClick={Adminlogout} className={classes.making}>LogOut</Button>

            </Toolbar>
        </AppBar>
       
    )
}
//exporting OwnerWelcome
export default AdminNavbar;