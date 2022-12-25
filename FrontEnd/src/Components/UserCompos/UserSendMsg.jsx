import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import '../../App.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addMsg, getallBookings } from '../../service_for_A_U_D/User_DB';

//this component for user send msg to admin

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

const FirstUserMessage = () => {

    const [messages, setMessages] = useState(initialValue);
    const { adminName, message } = messages;

   
    const { id } = useParams();

    useEffect(() => {
       
        loadMesData();
    }, []);

    
    const loadMesData = async () => {
       
        const response = await getallBookings(id);
        
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
            message: messages.message

        }
        await addMsg(usermessage);
        notify("Message Sent Successfully")
        history.push('/booking');
    }

    return (
   
        <div >
            <Container maxWidth="sm">
                <Box my={5}>
                    <Typography variant="h5" align="center">Send Message to Admin</Typography>
                    <FormGroup>
                        <FormControl>
                            <InputLabel>AdminName</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="adminName" value={adminName} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Type Message</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name="message" value={message} />
                        </FormControl>
                        <Box my={3}>
                          
                            <Button variant="contained" onClick={() => sendMsg()}  align="center">Send Message</Button>
                            <Button onClick={() => history.push("/booking")} variant="contained"  align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                        </Box>
                    </FormGroup>
                </Box>
            </Container>
        </div>
    )
}

export default FirstUserMessage;