import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addAdmin } from '../../service_for_A_U_D/Admin_DB';
import { useHistory } from 'react-router-dom';
import '../../App.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';



//this component for Admin Register

toast.configure();
const notify = (msg) => {

    toast.success(msg, {

        position: 'top-right', autoClose: 2500, hideProgressBar: true, closeOnClick: false,

        pauseOnHover: true, draggable: false, progress: undefined, theme: 'colored'

    });

}


const initialValue = {
    adminName: "",
    adminEmail: "",
    adminPhone: "",
    adminPassword: "",

}

const AdminRegister = () => {

    const [ admin, setAdmin] = useState(initialValue);
    const {  adminName,  adminEmail,  adminPhone,  adminPassword } =  admin;

    
    const history = useHistory();

   
    const onValueChange = (e) => {
        setAdmin({ ... admin, [e.target.name]: e.target.value });
        console.log( admin);
    }

   
    const addAdminDetails = async () => {

        
        if ( adminName.length <= 4) {
            alert("Username required and it shoud be more than 4 characters")
        }
        else if ( adminEmail.length <= 4) {
            alert("Email required and it shoud be more than 4 characters")
        }
         if (!( adminEmail.includes("@"))) {
            alert("Email required and it shoud be contain @ ")
        }
        else if ( adminPassword.length <= 2) {
            alert("Password required and it shoud be more than 2 characters")
        }
        else if ( adminPhone.length <= 8) {
            alert("Phone required and it shoud be more than 2 characters")
        }
        else {
            await addAdmin( admin);
            notify("Admin Register Successfully!!!!!! Now You can Login")
            history.push('/AdminLogin');
        }
    }
    return (
       
        <div >
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">Admin Register</Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>Full Name</InputLabel>

                            <Input onChange={(e) => onValueChange(e)} name="adminName" value={ adminName} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Email address</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="adminEmail" value={ adminEmail} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Password</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="adminPassword" value={ adminPassword} type="password" />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Mobile Number</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="adminPhone" value={ adminPhone} />
                        </FormControl>
                        <Box my={3}>
                          
                            <Button variant="contained" onClick={() => addAdminDetails()}  align="center">Register</Button>
                          
                            <br></br><br></br>
                            
                            <h5 style={{ color: 'black' }}>Already Have an Account __<span><NavLink to="/AdminLogin">LogIn</NavLink></span> </h5>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}


export default AdminRegister;