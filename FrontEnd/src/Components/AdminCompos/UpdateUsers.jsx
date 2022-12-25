import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button, } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getallUsers, editUsers } from '../../service_for_A_U_D/Admin_DB';
import '../../App.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//this component for update users
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

const UpdateUsers = () => {

    const [user, setUser] = useState(initialValue);
    const { userName,userEmail,userPassword,userPhone} = user;

   
    const { id } = useParams();

    useEffect(() => {
        
        loadUserData();
    }, []);

    
    const loadUserData = async () => {
        
        const response = await getallUsers(id);
     
        setUser(response.data);
    }

   
    const history = useHistory();

 
    const onValueChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    
    const editUserDetails = async () => {
      
        await editUsers(id,user);
        
        notify("Updated Successfully")
  
        history.push('/usercrud');
    }

    return (
     
        <div>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">Update Users </Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>User_Name</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="userName" value={userName} />
                        </FormControl>
                        

                        <FormControl>
                            <InputLabel>User_Email</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="userEmail" value={userEmail} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>User_Paaword</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="userPassword" value={userPassword} />
                        </FormControl>
            
                        <FormControl>
                            <InputLabel>User_Phone</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="userPhone" value={userPhone} />
                        </FormControl>
                       
                        <Box my={3}>
                           
                            <Button variant="contained" onClick={() => editUserDetails()}  align="center">Update User_Details</Button>
                            <Button onClick={() => history.push("/usercrud")} variant="contained"  align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}


export default UpdateUsers;