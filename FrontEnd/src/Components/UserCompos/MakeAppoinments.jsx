import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../../App.css'
import { getallBookings } from '../../service_for_A_U_D/User_DB';
import { deleteDoctor } from '../../service_for_A_U_D/User_DB';

//this component for after booing cancel and message
const useStyle = makeStyles({
    table: {
        width: '90%',
        margin: '30px 0px 0px 20px',
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


const MakeAppoinments = () => {

    const classes = useStyle();

   
    const Uname = localStorage.getItem('UName');
    const [booking, setBooking] = useState([]);
    useEffect(() => {
       
        getBooking();
    }, [])

   
    const getBooking = async () => {
      
        const response = await getallBookings();
       
        console.log(response);
       
        setBooking(response.data);
    }

    const deleteDoctors = async (id) => { 
        await deleteDoctor(id);
       
        getBooking();
    }
    return (
        
        <div>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Admin_Name</TableCell>
                        <TableCell>Doctor_Name</TableCell>
                        <TableCell>specialization_Type</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>rating</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Time_Slot</TableCell>
                        <TableCell>Fee</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Query</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        booking.map((data) => {
                          
                            if (data.userName === Uname) {
                                return (
                                    <TableRow className={classes.trow} key={data.doctorId}>
                                        <TableCell>{data.adminName}</TableCell>
                                        <TableCell>{data.doctorName}</TableCell>
                                        <TableCell>{data.spType}</TableCell>
                                        <TableCell>{data.location}</TableCell>
                                        <TableCell>{data.rating}</TableCell>
                                        <TableCell>{data.date}</TableCell>
                                        <TableCell>{data.time}</TableCell>
                                        <TableCell style={{ color: '#ffffff' }}>{data.price}</TableCell>
                                        <TableCell style={{ color: '#ffffff' }}>
                                            Appointed
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="contained"  style={{ margin: '0px 20px' }} component={Link} to={`/message/${data.doctorId}`}>SendMessage</Button>
                                            <p></p>
                                            <Button variant="contained"  style={{ margin: '0px 20px' }} onClick={() => deleteDoctors(data.doctorId)}>CancelBooking</Button>
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

export default MakeAppoinments;
