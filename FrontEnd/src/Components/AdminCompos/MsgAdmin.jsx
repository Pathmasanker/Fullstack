import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../../App.css'
import { getallUserMsgs } from '../../service_for_A_U_D/User_DB';


//this component for message admin to user
const useStyle = makeStyles({
    table: {
        width: '80%',
        margin: '50px 10px 200px 80px',

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


const MsgAdmin = () => {

    const classes = useStyle();

    const [message, setMessage] = useState([]);
    useEffect(() => {
       
        getMessages();
    }, [])

    
    const getMessages = async () => {
        
        const response = await getallUserMsgs();
       
        console.log(response);
        
        setMessage(response.data);
    }
    return (
       
             <div >
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>UserName</TableCell>
                        <TableCell>Message</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        message.map((data) => {
                            if (data.adminName === localStorage.getItem('AName')) {
                                return (
                                    <TableRow className={classes.trow} key={data.msgId}>
                                        <TableCell>{data.userName}</TableCell>
                                        <TableCell>{data.message}</TableCell>
                                        <TableCell>
                                          
                                            <Button variant="contained" style={{ margin: '0px 20px' }} component={Link} to={`/oreply/${data.msgId}`}>Reply</Button>
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

export default MsgAdmin;
