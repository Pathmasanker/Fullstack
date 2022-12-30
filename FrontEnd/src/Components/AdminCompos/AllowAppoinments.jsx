import React, { useEffect, useState } from 'react';

import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import {deleteWaitingAppoinment } from '../../service_for_A_U_D/Admin_DB';
import { getallWaitingApprove } from '../../service_for_A_U_D/Admin_DB'
import { addBooking } from '../../service_for_A_U_D/User_DB';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



//this component for conform the allow appoinments
toast.configure();
const notify = (msg) => {

    toast.success(msg, {

        position: 'top-right', autoClose: 2500, hideProgressBar: true, closeOnClick: false,

        pauseOnHover: true, draggable: false, progress: undefined, theme: 'colored'

    });

}



const initialValue = {

    doctorName: "",
    spType: "",
    price: "",
    rating: "",
   
    location: "",
    time: "",
    date: "",

}



const AllowAppoinments = () => {

    const [doctor, setDoctor] = useState(initialValue);
    const { doctorName, spType, price,rating, location, date, time, userName } = doctor;
    
    const { id } = useParams();
    useEffect(() => {

       
        loadDoctorData();

      

    }, []);

  
    const loadDoctorData = async () => {

        
        const response = await getallWaitingApprove(id);
       
        setDoctor(response.data);
    }
 
    const history = useHistory();
   
    const onValueChange = (e) => {
        setDoctor({ ...doctor, [e.target.name]: e.target.value });
       
        console.log(doctor);
    }
   
    const ApproveBooking = async () => {
        
        addBooking(doctor);
        
        deleteWaitingAppoinment(id);
       
        notify('Approved Successfully !!!!!!!')
       
        history.push("/myvehbookings")

    }
    return (
       
        <div>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">Doctor Appoinment Conform</Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>User_Name</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="userName" value={userName} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>DoctorName</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="doctorName" value={doctorName} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>specialization_Type</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="spType" value={spType} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Location</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="location" value={location} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Rating</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="rating" value={rating} />
                        </FormControl>
                        
                        <FormControl>
                            <InputLabel>Price</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="price" value={price} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Date</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="date" value={date} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Time_Slot</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="time" value={time} />
                        </FormControl>

                        <Box my={3}>

                            
                            <Button variant="text" onClick={() => ApproveBooking()}  align="center">Allow Appoinment </Button>
                            <Button onClick={() => history.push("/bookingapprove")} variant="text" align="center" style={{ margin: '0px 20px' }}>Back</Button>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}

export default AllowAppoinments;