import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button, Select, MenuItem } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getallDoctors, editDoctor } from '../../service_for_A_U_D/Doctors_DB';
import '../../App.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//this component for Update doctors
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
    raing: "",
    
    location: "",
    time: "",
    date: "",
    adminName: ""

}

const UpdateDoctor = () => {

    const [doctor, setDoctor] = useState(initialValue);
    const { doctorName, spType,location, price, rating,date, time } = doctor;

   
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

 
    const editDoctorDetails = async () => {
       
        await editDoctor(id, doctor);
        
        notify("Updated Successfully")
        
        history.push('/allvehicles');
    }

    return (
       
        <div>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">Update Doctor </Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>Doctor_Name</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="doctorName" value={doctorName} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>specialization_Type</InputLabel>
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
                            <InputLabel>Raing</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="rating" value={rating} />
                        </FormControl>
            
                        <FormControl>
                            <InputLabel>Enter Fee</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="price" value={price} />
                        </FormControl>
                        
                        <FormControl>
                            <InputLabel>Update Date</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="date" value={date} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Update Time_Slot</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="time" value={time} />
                        </FormControl>
                        <Box my={3}>
                          
                            <Button variant="contained" onClick={() => editDoctorDetails()}  align="center">Update Doctor_Details</Button>
                            <Button onClick={() => history.push("/allvehicles")} variant="contained"  align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}


export default UpdateDoctor;