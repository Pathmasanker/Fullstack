import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import '../../App.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addMsg } from '../../service_for_A_U_D/User_DB';
import { getallAdminmsgs } from '../../service_for_A_U_D/Admin_DB';


//this component for user sent reply to admin
toast.configure();
const notify = (msg) => {

    toast.success(msg, {

        position: 'top-right', autoClose: 2500, hideProgressBar: true, closeOnClick: false,

        pauseOnHover: true, draggable: false, progress: undefined, theme: 'colored'

    });

}


const initialValue = {
    adminName: "",
    message: "",
}

const UserReplyMessage = () => {

    const [messages, setMessages] = useState(initialValue);
    const { adminName, umessage } = messages;

    
    const { id } = useParams();

    useEffect(() => {
       
        loadMsgData();
    }, []);
    
    const loadMsgData = async () => {
      
        const response = await getallAdminmsgs(id);
       
        setMessages(response.data);
    }

    const history = useHistory();

 
    const onValueChange = (e) => {

        setMessages({ ...messages, [e.target.name]: e.target.value });
        console.log(messages);
    }

  
    const sendMsg = async () => {
        const usermessage = {
            adminName: messages.adminName,
            userName: messages.userName,
            message: messages.umessage

        }
        await addMsg(usermessage);
        notify("Message Sent Successfully")
        history.push('/usermessages');
    }

    return (
        // <div className='bgaddveh' style={myComponent}>
        <div>
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">Give Reply to Owner</Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>AdminName</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="adminName" value={adminName} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Type Message</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="umessage" value={umessage} />
                        </FormControl>
                        <Box my={3}>
                         
                            <Button variant="contained" onClick={() => sendMsg()} align="center">Send Reply</Button>
                            <Button onClick={() => history.push("/usermessages")} variant="contained" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}


export default UserReplyMessage;