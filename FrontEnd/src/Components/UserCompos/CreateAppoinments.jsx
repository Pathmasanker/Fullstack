import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button, Select, MenuItem } from '@material-ui/core';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles } from '@material-ui/core';
import { getallDoctors,getHighRating } from '../../service_for_A_U_D/Doctors_DB';
import { Link } from 'react-router-dom';


//this component for create appoinments for doctor

import '../../App.css'
const useStyle = makeStyles({
    table: {
        width: '100%',

    },
    thead: {
        '& > *': {
            background: 'pink',
            color: '#FFFFFF',
            fontSize: '16px'
        }
    },
    trow: {
        '& > *': {
            fontSize: '16px'
        }
    }
})

const initialValue = {

    spType: "",
   
    location: "",
    date: "",

}

 
const CreateAppoinments = () => {

    const [appoinment, setAppoinment] = useState(initialValue);


    const classes = useStyle();

    const [doctor, setDoctor] = useState([]);


    const getDoctor = async () => {
      
        const response = await getallDoctors();
        
        console.log(response);
        
        setDoctor(response.data);
    }
 
    // const SortedDoctors = async () => {
        
    //     const response = await getallDoctorsSort();
      
    //     console.log(response);
       
    //     setDoctor(response.data);
    // }
    const HighRating = async () => {
        
        const response = await getHighRating();
       
        console.log(response);
       
        setDoctor(response.data);
    }
   
    const onValueChange = (e) => {
        setAppoinment({ ...appoinment, [e.target.name]: e.target.value });
        console.log(appoinment);
    }
    return (
        
        <div className='b'>
            <Container maxWidth="sm">
                <Box my={5}>
                    
                    <Typography variant="h5" align="center">Make An Appoinment</Typography>

                    <FormGroup>

                        <FormControl>
                            <inputlabel>Date</inputlabel>
                            <input   onChange={(e) => onValueChange(e)} type="search" name="date" value={appoinment.date} />
                        </FormControl>
                        <FormControl>
                            <inputlabel>Location</inputlabel>
                            <input onChange={(e) => onValueChange(e)} type="search" name="location" value={appoinment.location} />
                        </FormControl>
                       
                        <FormControl>
                            <inputlabel>specialization_Type</inputlabel>
                            <Select value={appoinment.spType} onChange={(e) => onValueChange(e)} name="spType">
                            <MenuItem value={"Dentist"}>Dentist</MenuItem>
                                <MenuItem value={"Gynecologist/obstetrician"}>Gynecologist/obstetrician</MenuItem>
                                <MenuItem value={"General Physician"}>General Physician</MenuItem>
                                <MenuItem value={"Dermatologist"}>Dermatologist</MenuItem>
                                <MenuItem value={"Ear-nose-throat (ent) Specialist"}>Ear-nose-throat (ent) Specialist</MenuItem>
                                <MenuItem value={"Ayurveda"}>Ayurveda</MenuItem>

                            </Select>
                        </FormControl>
                        <Box my={3}>
                          
                            <center>
                            <Button variant="contained" onClick={() => getDoctor()}  align="center">Search</Button>
                            </center>
                            <br></br><br></br>
                        </Box>
                    </FormGroup>
                    
                </Box>
            </Container>
            <div className='taxi'>
           
            <center>
   
            </center>
            
            <Button variant="contained" onClick={() => HighRating()}  align="center" className='sort'>High Rating </Button>
           
            </div>
            
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>DoctorName</TableCell>
                        <TableCell>specialization_Type</TableCell>
                        <TableCell>Fee</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Rating</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Time_Slot</TableCell>
                        <TableCell>Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {
             
                        doctor.map((data) => {
                          
                            if (data.location === appoinment.location && data.date === appoinment.date && data.spType === appoinment.spType) {
                                return (
                                    <TableRow className={classes.trow} key={data.doctorId}>
                                        <TableCell>{data.doctorName}</TableCell>
                                        <TableCell>{data.spType}</TableCell>
                                        <TableCell>{data.price}</TableCell>
                                        <TableCell>{data.location}</TableCell>
                                        <TableCell>{data.rating}</TableCell>
                                        <TableCell>{data.date}</TableCell>
                                        <TableCell>{data.time}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" style={{ margin: '0px 20px' }} component={Link} to={`/confirm/${data.doctorId}`}>Book Appoinment</Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default CreateAppoinments;