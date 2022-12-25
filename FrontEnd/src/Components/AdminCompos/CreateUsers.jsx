import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addUser } from '../../service_for_A_U_D/User_DB';
import { useHistory } from 'react-router-dom';
import '../../App.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';


//this component for Create User

toast.configure();
const notify = (msg) => {

    toast.success(msg, {

        position: 'top-right', autoClose: 2500, hideProgressBar: true, closeOnClick: false,

        pauseOnHover: true, draggable: false, progress: undefined, theme: 'colored'

    });

}

const initialValue = {
    userName: "",
    userEmail: "",
    userPassword: "",
    userPhone: "",

}

const CreateUsers = () => {

    const [user, setUser] = useState(initialValue);
    const { userName, userEmail, userPassword, userPhone } = user;

    const history = useHistory();

 
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    
    const addUserDetails = async () => {
        if (userName.length <= 2) {
            alert("Username required and it shoud be more than 2 characters")
        }
        else if (userEmail.length <= 2) {
            alert("Email required and it shoud be more than 2 characters")
        }
        else if (userPassword.length <= 2) {
            alert("Password required and it shoud be more than 2 characters")
        }
        else if (userPhone.length <= 2) {
            alert("Phone required and it shoud be more than 2 characters")
        }
        else {
            await addUser(user);
            notify("User Register Successfully!!!!!! Now You can Login")
            history.push('/user');
        }
    }

    return (
     
        <div>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">Create_User</Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>Full Name</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="userName" value={userName} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Email address</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="userEmail" value={userEmail} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Password</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="userPassword" value={userPassword} type="password" />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Mobile Number</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="userPhone" value={userPhone} />
                        </FormControl>
                        <Box my={3}>
                          
                            <Button variant="contained" onClick={() => addUserDetails()}  align="center">Adduser</Button>
                           
                            <br></br><br></br>
                           
                            
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}


export default CreateUsers;