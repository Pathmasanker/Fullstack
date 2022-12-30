import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles } from '@material-ui/core';

import { getallDoctors} from '../../service_for_A_U_D/Doctors_DB';
import '../../App.css'

//this component for see the list of doctors available


const useStyle = makeStyles({
    table: {
        width: '80%',
        margin: '50px 10px 200px 30px',

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
