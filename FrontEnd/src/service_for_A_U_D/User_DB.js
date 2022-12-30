import axios from 'axios';


//this component for login and reg then and message and delete booking

const adduser = "http://localhost:8096/user/insert";

const addBookings="http://localhost:8096/booking/insert";
const approvedelete ="http://localhost:8096/booking/delete";
const allbookings="http://localhost:8096/booking/bookings";

const addmsg="http://localhost:8096/umessage/insert";
const allmsg="http://localhost:8096/umessage/messages"



export const addUser = async (user) => {
    return await axios.post(adduser,user);
}
//----------------------------------------------------------------

export const addBooking = async (booking) => {
    return await axios.post(addBookings,booking);
}


export const getallBookings = async (id) => {
    id = id || '';
    return await axios.get(`${allbookings}/${id}`);
}
export const deleteDoctor = async (id) => {
    return await axios.delete(`${approvedelete}/${id}`);
}

//---------------------------------------------------------------------------------------

export const addMsg = async (message) => {
    return await axios.post(addmsg,message);
}

export const getallUserMsgs = async (id) => {
    id = id || '';
    return await axios.get(`${allmsg}/${id}`);
}