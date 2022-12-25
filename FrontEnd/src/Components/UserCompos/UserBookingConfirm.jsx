import React, { useEffect, useState } from 'react';

import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { getallDoctors } from '../../service_for_A_U_D/Doctors_DB';


import { useHistory, useParams } from 'react-router-dom';
import { addApprove } from '../../service_for_A_U_D/Admin_DB';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



//this component for user booking conformation

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
    rating: "",
    price: "",
   
    
    location: "",
    time: "",
    date: "",

}



const WaitingConfirm = () => { 

    const [doctor, setDoctor] = useState(initialValue);
    const { doctorName, spType, price, rating, location, date, time } = doctor;
    
    const { id } = useParams();

    useEffect(() => {

       
        loadDoctorData();
    }, []);

    
    const loadDoctorData = async () => {

        
        const response = await getallDoctors(id);

       
        setDoctor(response.data);


    }
  
    const history = useHistory();
    const onValueChange = (e) => {
        setDoctor({ ...doctor, [e.target.name]: e.target.value });
        console.log(doctor);
    }
  
    const PlaceBook = async () => {
        const book = {
            userName: localStorage.getItem('UName'),
            doctorName: doctor.doctorName,
            spType: doctor.spType,
            price: doctor.price,
            rating: doctor.rating,
          
            location: doctor.location,
            date: doctor.date,
            time: doctor.time,
            adminName: doctor.adminName

        }
        await addApprove(book);
        notify('Doctor Booked Successfully !  Waiting for Owner Approval..')
        history.push("/waitingapprove")

    }
    return (

       
        <div>
            <Container maxWidth="sm">

                <Box my={5}>

                    <Typography variant="h5" align="center">User Appoinment Booking Conform</Typography>

                    <FormGroup>

                        <FormControl>
                            <InputLabel>Doctor_Name</InputLabel>
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
                            {/* this button is used to call PlaceBook() */}
                            <Button variant="text" onClick={() => PlaceBook()} align="center">Confirm Appoinment</Button>

                            <Button onClick={() => history.push("/CreateAppoinments")} variant="text" align="center" style={{ margin: '0px 20px' }}>Back</Button>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )

}

export default WaitingConfirm;