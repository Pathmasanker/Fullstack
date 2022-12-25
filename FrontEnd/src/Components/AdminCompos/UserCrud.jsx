import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { getallUsers,deleteusers} from '../../service_for_A_U_D/Admin_DB';
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
        
        const response = await getallUsers();
        
        console.log(response);
        
        setUser(response.data);
    }

  
    const deleteUsers = async (id) => {
        await deleteusers(id);
      
        getUser();
    }

  

        const history = useHistory();
    const userscreate = ()=>{
        
        history.push("/CreateUsers");
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
                      
                            if (!(data.adminName === localStorage.getItem('AName'))) {
                                return (
                                    <TableRow className={classes.trow} key={data.userId}>
                                        <TableCell>{data.userName}</TableCell>
                                        <TableCell>{data.userEmail}</TableCell>
                                        <TableCell>{data.userPhone}</TableCell>
                                        <TableCell>{data.userPassword}</TableCell>
                                     
                                        <TableCell>
                                         
                                            <Button variant="contained"  style={{ margin: '0px 20px' }} component={Link} to={`/updateuser/${data.userId}`}>Update</Button>
                                        
                                            <Button variant="contained"  style={{ margin: '0px 20px' }} onClick={() => deleteUsers(data.userId)}>Delete</Button>

                                            <Button onClick={userscreate} variant="contained" style={{ margin: '0px 20px' }} >AddUsers</Button>
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

export default UserCrud;
