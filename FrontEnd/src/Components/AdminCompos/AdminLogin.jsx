import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import '../../App.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';


//this component for Admin LOgin

toast.configure();
const notify = (msg) => {

    toast.success(msg, {

        position: 'top-right', autoClose: 2500, hideProgressBar: true, closeOnClick: false,

        pauseOnHover: true, draggable: false, progress: undefined, theme: 'colored'

    });

}
const notifyErr = (msg) => {

    toast.error(msg, {

        position: 'top-right', autoClose: 2500, hideProgressBar: true, closeOnClick: false,

        pauseOnHover: true, draggable: false, progress: undefined, theme: 'colored'

    });

}

const initialValue = {


    adminEmail: "",

    adminPassword: "",

}



function AdminLogin() {


    const [db, setDb] = useState(initialValue);



    const history = useHistory();
    
    const onValueChange = (e) => {
        setDb({ ...db, [e.target.name]: e.target.value });
        console.log(db);
    }
  
    async function adminPresent(data) {
        if (data.adminEmail.length <= 2) {
            alert("Email Should be more than 2 characters")
        }
         if (!( data.adminEmail.includes("@"))) {
            alert("Email required and it shoud be contain @ ")
        }
        else if (data.adminPassword.length <= 2) {
            alert("Password Should be more than 2 characters")
        }
        else {
            
            let check_data = await fetch("http://localhost:8090/admin/admins");
            let check = await check_data.json();

            let flag = false;
           
            console.log(check);
            for (let i = 0; i < check.length; i++) {
               
                if (check[i].adminEmail === data.adminEmail && check[i].adminPassword === data.adminPassword) {
                    flag = true;
                   
                    localStorage.setItem('AName', check[i].adminName);
                    localStorage.setItem('AEmail', check[i].adminEmail);
                    localStorage.setItem('APhone', check[i].adminPhone);
                    localStorage.setItem('AId', check[i].adminId);
                }
            }
           
            if (flag === true) {
               
                notify("Login success")
                console.log(check);
               
                history.push("/adminhome")
            }
            else {
              
                notifyErr("Please Enter corect username and password")
            }
        }
    }
    return (
       
        <div>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center"><label>Admin Login</label></Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel style={{ color: 'blue' }}>Enter Email</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="adminEmail" value={db.adminEmail} />
                        </FormControl>
                        <FormControl>
                            <InputLabel style={{ color: 'blue' }}>Enter Password</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="adminPassword" value={db.adminPassword} type="password" />
                        </FormControl>
                        <Box my={3}>
                           
                            <Button variant="contained" onClick={() => adminPresent(db)}  align="center">Login</Button>
                            
                            <br />
                          
                            <h5 style={{ color: 'black' }}>For SignUp__<span><NavLink to="/AdminRegister">Register</NavLink></span> </h5>
                           
                            <br></br><br></br>
                            
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}


export default AdminLogin;