import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { getallAdmin} from '../../service_for_A_U_D/Admin_DB';
import { deleteAdmins} from '../../service_for_A_U_D/Admin_DB';
import '../../App.css'


//this component for CRUD for Users

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


const UserCrud = () => {

    const classes = useStyle();

    const [user, setUser] = useState([]);
    useEffect(() => {
        
        getUser();
    }, [])

    const getUser = async () => {
        
        const response = await getallAdmin();
        
        console.log(response);
        
        setUser(response.data);
    }

  
    const deleteadmins = async (id) => {
        await deleteAdmins(id);
      
        getUser();
    }

  

        const history = useHistory();
    const adminscreate = ()=>{
        
        history.push("/CreateAdmin");
    }

    return (

            <div>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>UserNAME</TableCell>
                        <TableCell>UserEmail</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Password</TableCell>
                        <TableCell>Edit_Menu</TableCell>
                     
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        
                        user.map((data) => {
                      
                           
                                return (
                                    <TableRow className={classes.trow} key={data.adminId}>
                                        <TableCell>{data.adminName}</TableCell>
                                        <TableCell>{data.adminEmail}</TableCell>
                                        <TableCell>{data.adminPhone}</TableCell>
                                        <TableCell>{data.adminPassword}</TableCell>
                                     
                                        <TableCell>
                                         
                                            <Button variant="contained"  style={{ margin: '0px 20px' }} component={Link} to={`/updateadmin/${data.adminId}`}>Update</Button>
                                        
                                            <Button variant="contained"  style={{ margin: '0px 20px' }} onClick={() => deleteadmins(data.adminId)}>Delete</Button>

                                            <Button onClick={adminscreate} variant="contained" style={{ margin: '0px 20px' }} >AddUsers</Button>
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

export default UserCrud;
