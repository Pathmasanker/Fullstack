import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles } from '@material-ui/core';
import '../../App.css'
import { getallBookings } from '../../service_for_A_U_D/User_DB';


//this component for booked appoinments list

const useStyle = makeStyles({
    table: {
        width: '80%',
        margin: '50px 100px 100px 140px',
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

const BookedAppoinments = () => {

    const classes = useStyle();

    const Oname = localStorage.getItem('AName');

    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        
        getDoctor();
    }, [])

    //getting vehicle bookings
    const getDoctor = async () => {
       
        const response = await getallBookings();
       
        console.log(response);
        
        setDoctor(response.data);
    }



    return (
        
            <div>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Username</TableCell>
                        <TableCell>DoctorName</TableCell>
                        <TableCell>specializationType</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Rating</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Time_Slot</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                       
                        doctor.map((data) => {
                           
                            if (data.adminName === Oname) {
                                return (
                                    <TableRow className={classes.trow} key={data.doctorId}>
                                        <TableCell>{data.userName}</TableCell>
                                        <TableCell>{data.doctorName}</TableCell>
                                        <TableCell>{data.spType}</TableCell>
                                        <TableCell>{data.location}</TableCell>
                                        <TableCell>{data.rating}</TableCell>
                                        <TableCell>{data.date}</TableCell>
                                        <TableCell>{data.time}</TableCell>
                                        <TableCell>{data.price}</TableCell>
                                        <TableCell>
                                            Appionted
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

export default BookedAppoinments;
