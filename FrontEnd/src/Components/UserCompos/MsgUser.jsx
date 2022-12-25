import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../../App.css'
import { getallAdminmsgs } from '../../service_for_A_U_D/Admin_DB';


//this component for reply message to admin
const useStyle = makeStyles({
    table: {
        width: '80%',
        margin: '50px 10px 200px 80px',

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


const MsgUser = () => {

    const classes = useStyle();

    const [message, setMessage] = useState([]);
    useEffect(() => {
       
        getMessages();
    }, [])


    const getMessages = async () => {
       
        const response = await getallAdminmsgs();
        
        console.log(response);
       
        setMessage(response.data);
    }

    return (

     
<div>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>

                        <TableCell>AdminName</TableCell>
                        <TableCell>Message</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {
                       
                        message.map((data) => {
                           
                            if (data.userName === localStorage.getItem('UName')) {
                                return (
                                    <TableRow className={classes.trow} key={data.msgId}>
                                        <TableCell>{data.adminName}</TableCell>
                                        <TableCell>{data.message}</TableCell>
                                        <TableCell>
                                            <Button variant="contained"  style={{ margin: '0px 20px' }} component={Link} to={`/ureply/${data.msgId}`}>Reply</Button>
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

export default MsgUser;
