import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';

import { Link } from 'react-router-dom';
import { getallWaitingApprove } from '../../service_for_A_U_D/Admin_DB'
import { getallAdmin } from '../../service_for_A_U_D/Admin_DB'

import '../../App.css'


//this component for allow the appointments for user

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


const AdminAllowAppoinments = () => {

   
    const Oname = localStorage.getItem('AName');
    const classes = useStyle();
    const [doctor, setdoctor] = useState([]);
    useEffect(() => {
        
        getdoctor();
    }, [])

    
    const getdoctor = async () => {
        
        const response = await getallWaitingApprove();
       
        console.log(response);

        setdoctor(response.data);
    }



    

        
    
        const [admin, setAdmin] = useState([]);
        
        useEffect(() => {
           
            getAdmin();
        }, [])
    
       
        const getAdmin = async () => {
          
            const response = await getallAdmin();
          
            console.log(response);
           
            setAdmin(response.data);
        }
    



    return (
        
            <div >
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>UserName</TableCell>
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
                           
                            if ((data.adminName === Oname)) {
                                return (<TableRow className={classes.trow} key={data.doctorId}>
                                    <TableCell>{data.userName}</TableCell>
                                    <TableCell>{data.doctorName}</TableCell>
                                    <TableCell>{data.spType}</TableCell>
                                    <TableCell>{data.price}</TableCell>
                                    <TableCell>{data.location}</TableCell>
                                    <TableCell>{data.rating}</TableCell>
                             
                                    <TableCell>{data.date}</TableCell>
                                    <TableCell style={{ color: '#ffffff' }}>{data.time}</TableCell>
                                    <TableCell>
                                            Waiting for your Allow<br />
                                       
                                        <Button variant="contained"  style={{ margin: '0px 20px' }} component={Link} to={`/approved/${data.doctorId}`}>Allow_Appoinment</Button>
                                    </TableCell>
                                </TableRow>)
                            }
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AdminAllowAppoinments;
