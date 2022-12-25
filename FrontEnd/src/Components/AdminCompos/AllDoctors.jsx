import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getallDoctors, deleteDoctor} from '../../service_for_A_U_D/Doctors_DB';
import '../../App.css'

//this component for All doctor CRUD

const useStyle = makeStyles({
    table: {
        width: '80%',
        margin: '50px 10px 200px 30px',

    },
    thead: {
        '& > *': {
            background: 'lightgreen',
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


const AllDoctors = () => {

    const classes = useStyle();

    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
       
        getDoctor();
    }, [])

   
    const getDoctor = async () => {
      
        const response = await getallDoctors();
      
        console.log(response);
       
        setDoctor(response.data);
    }

    
    const deleteDoctors = async (id) => {
        await deleteDoctor(id);
        getDoctor();
    }

    return (
     
            <div>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>DoctorName</TableCell>
                        <TableCell>specialization_Type</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Loction</TableCell>
                        <TableCell>Ratings</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Time_Slot</TableCell>
                        <TableCell>Fee</TableCell>
                        <TableCell>Edit_Menu</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                      
                        doctor.map((data) => {
                          
                            
                                return (
                                    <TableRow className={classes.trow} key={data.doctorId}>
                                        <TableCell>{data.doctorName}</TableCell>
                                        <TableCell>{data.spType}</TableCell>
                                        <TableCell><img src= {data.doctorImg} alt="doctor img" width="85px" height="80px" /></TableCell>
                                        <TableCell>{data.location}</TableCell>
                                        <TableCell>{data.rating}</TableCell>
                                        <TableCell>{data.date}</TableCell>
                                        <TableCell>{data.time}</TableCell>
                                        <TableCell>{data.price}</TableCell>
                                        <TableCell>
                                           
                                            <Button variant="contained"  style={{ margin: '0px 20px' }} component={Link} to={`/update/${data.doctorId}`}>Update</Button>
                                           
                                            <Button variant="contained"  style={{ margin: '0px 20px' }} onClick={() => deleteDoctors(data.doctorId)}>Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AllDoctors;
