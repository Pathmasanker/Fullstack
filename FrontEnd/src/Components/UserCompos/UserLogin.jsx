import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import '../../App.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';



//this component for user login
toast.configure();
const notify = (msg) => {

    toast.success(msg, {

        position: 'top-center', autoClose: 2500, hideProgressBar: true, closeOnClick: false,

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


    userEmail: "",

    userPassword: "",

}



function UserLogin() {


    const [db, setDb] = useState(initialValue);


    const history = useHistory();


    const onValueChange = (e) => {

        setDb({ ...db, [e.target.name]: e.target.value });

        console.log(db);

    }
   
    async function userPresent(data) {
        if (data.userEmail.length <= 2) {
            alert("Email Should be more than 2 characters")
        }
        if (!(data.userEmail.includes("@"))) {
            alert("Email required and it shoud be contain @ ")
        }
        else if (data.userPassword.length <= 2) {
            alert("Password Should be more than 2 characters")
        }
        else {
           
            let check_data = await fetch("http://localhost:8096/user/users");
            let check = await check_data.json();
            let flag = false;
            console.log(check);
            for (let i = 0; i < check.length; i++) {
               
                if (check[i].userEmail === data.userEmail && check[i].userPassword === data.userPassword) {
                    flag = true;
                   
                    localStorage.setItem('UName', check[i].userName);
                    localStorage.setItem('UId', check[i].userId);
                    localStorage.setItem('UEmail', check[i].userEmail);
                    localStorage.setItem('UPhone', check[i].userPhone);
                }
            }
            if (flag === true) {
               
                
                notify('Login success', {
                    position: "top-center",
                });
              
                history.push("/userhome")
            }
            else {
                notifyErr("Please Enter corect username and password")
            }
        }
    }
    return (
     
            <div >
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">User Login</Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel style={{ color: 'blue' }}>Enter Email</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="userEmail" value={db.userEmail} />
                        </FormControl>
                        <FormControl>
                            <InputLabel style={{ color: 'blue' }}>Enter Password</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="userPassword" value={db.userPassword} type="password" />
                        </FormControl>
                        <Box my={3}>
                        
                            <Button variant="contained" onClick={() => userPresent(db)}  align="center">Login</Button>
                           
                            <br></br>
                           
                            <h5 style={{ color: 'black' }}>For SignUp__<span><NavLink to="/userregister">Register</NavLink></span> </h5>
                            <br></br><br></br>

                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}

export default UserLogin;