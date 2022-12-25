import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { getallWaitingApprove, deleteWaitingAppoinment } from '../../service_for_A_U_D/Admin_DB'
import '../../App.css'



//this component for waiting approve and cancell appoinments
const useStyle = makeStyles({
    table: {
        width: '80%',
        margin: '50px 100px 100px 140px',
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

const AllWaitingAppoinments = () => { 

    const classes = useStyle();
  
    const Uname = localStorage.getItem('UName');
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
       
        getDoctor();
    }, [])

   
    const getDoctor = async () => {
      
        const response = await getallWaitingApprove();
     
        console.log(response);
        
        setDoctor(response.data);
    }

   
    const deleteWaitingDoctors = async (id) => {
        await deleteWaitingAppoinment(id);
        getDoctor();
    }

    return (

      
<div>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Doctor_Name</TableCell>
                        <TableCell>specialization_Type</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Rating</TableCell>
                       
                        <TableCell>Date</TableCell>
                        <TableCell>Time_Slot</TableCell>
                        <TableCell>Edit_Op</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {
                        doctor.map((data) => {
                            if (data.userName === Uname) {
                                return (

                                    <TableRow className={classes.trow} key={data.doctorId}>
                                        <TableCell>{data.doctorName}</TableCell>
                                        <TableCell>{data.spType}</TableCell>
                                        <TableCell>{data.price}</TableCell>
                                        <TableCell>{data.location}</TableCell>
                                        <TableCell>{data.rating}</TableCell>
                                 
                                        <TableCell>{data.date}</TableCell>
                                        <TableCell style={{ color: '#ffffff' }}>{data.time}</TableCell>



                                        <TableCell >
                                            Waiting for ADMIN Allow<br />
                                          
                                            <Button variant="contained"  style={{ margin: '0px 20px' }} onClick={() => deleteWaitingDoctors(data.doctorId)}>Cancel</Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        }


                        )
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AllWaitingAppoinments;
