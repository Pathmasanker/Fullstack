import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button, Select, MenuItem } from '@material-ui/core';
import { addDoctor } from '../../service_for_A_U_D/Doctors_DB';
import { useHistory } from 'react-router-dom';
import '../../App.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//this component for create Doctors

toast.configure();
const notify = (msg) => {

    toast.success(msg, {

        position: 'top-right', autoClose: 2500, hideProgressBar: true, closeOnClick: false,

        pauseOnHover: true, draggable: false, progress: undefined, theme: 'colored'

    });

}

const initialValue = {
    doctorImg:"",
    doctorName: "",
    spType: "",
    price: "",
    rating: "",
   
    location: "",
    adminName: localStorage.getItem('AName'),
    time: "",
    date: "",

}

const CreateDoctors = () => {

    const [doctor, setDoctor] = useState(initialValue);
    const { doctorImg,doctorName, spType, rating,price,location, date, time } = doctor;

  
    const history = useHistory();
   
    const onValueChange = (e) => {
        
        setDoctor({ ...doctor, [e.target.name]: e.target.value });
       
        console.log(doctor);
    }

   
    const addDoctorDetails = async () => {
      
        await addDoctor(doctor);
       
        notify("Doctor Added Successfully")
       
        history.push('/AllDoctors');
    }

    return (
       
        <div className='c'>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">Create Doctors</Typography>
                    <FormGroup>
                    <FormControl>
                            <InputLabel>Doctor Img</InputLabel>
                            <Input onChange={(e) => onValueChange(e)}  name="doctorImg" value={doctorImg} />
                        </FormControl>

                        <FormControl>
                            <InputLabel>Doctor Name</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="doctorName" value={doctorName} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>specialization of Doctor</InputLabel>
                            <Select value={spType} onChange={(e) => onValueChange(e)} name="spType">
                                <MenuItem value={"Dentist"}>Dentist</MenuItem>
                                <MenuItem value={"Gynecologist/obstetrician"}>Gynecologist/obstetrician</MenuItem>
                                <MenuItem value={"General Physician"}>General Physician</MenuItem>
                                <MenuItem value={"Dermatologist"}>Dermatologist</MenuItem>
                                <MenuItem value={"Ear-nose-throat (ent) Specialist"}>Ear-nose-throat (ent) Specialist</MenuItem>
                                <MenuItem value={"Ayurveda"}>Ayurveda</MenuItem>
                            </Select>
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
                            <InputLabel>Fee</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="price" value={price} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Date For Appoinments</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="date" value={date} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Time Slot For Appoinment</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="time" value={time} />
                        </FormControl>
                        <Box my={3}>

                           
                            <Button variant="contained" onClick={() => addDoctorDetails()}  align="center">Add Doctors</Button>
                            <p></p>
                            <Button onClick={() => history.push("/welcome")} variant="contained"  align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                            
                            <br></br><br></br>
                          

                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}


export default CreateDoctors;