import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button, } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getallAdmin, editAdmins } from '../../service_for_A_U_D/Admin_DB';
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
    adminName: "",
    adminEmail: "",
    adminPassword: "",
    adminPhone: "",

}

const UpdateUsers = () => {

    const [admin, setUser] = useState(initialValue);
    const { adminName,adminEmail,adminPassword,adminPhone} = admin;

   
    const { id } = useParams();

    useEffect(() => {
        
        loadUserData();
    }, []);

    
    const loadUserData = async () => {
        
        const response = await getallAdmin(id);
     
        setUser(response.data);
    }

   
    const history = useHistory();

 
    const onValueChange = (e) => {

        setUser({ ...admin, [e.target.name]: e.target.value });
        console.log(admin);
    }

    
    const editUserDetails = async () => {
      
        await editAdmins(id,admin);
        
        notify("Updated Successfully")
  
        history.push('/admincrud');
    }

    return (
     
        <div>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">Update Admins</Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>User_Name</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="adminName" value={adminName} />
                        </FormControl>
                        

                        <FormControl>
                            <InputLabel>User_Email</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="adminEmail" value={adminEmail} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>User_Paaword</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="adminPassword" value={adminPassword} />
                        </FormControl>
            
                        <FormControl>
                            <InputLabel>User_Phone</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="adminPhone" value={adminPhone} />
                        </FormControl>
                       
                        <Box my={3}>
                           
                            <Button variant="contained" onClick={() => editUserDetails()}  align="center">Update User_Details</Button>
                            <Button onClick={() => history.push("/admincrud")} variant="contained"  align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}


export default UpdateUsers;