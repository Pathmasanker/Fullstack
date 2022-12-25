import axios from 'axios';


//this server for  operation of send message and admins funtions and crud users  

const addadmin="http://localhost:8090/admin/insert"
const alladmin="http://localhost:8090/admin/admins"
const deleteadmin="http://localhost:8090/admin/delete"
const updateadmin="http://localhost:8090/admin/update"


const approveinsert="http://localhost:8090/approve/insert"
const approveappoinments="http://localhost:8090/approve/doctors"
const approvedelete="http://localhost:8090/approve/delete";


const addmsg="http://localhost:8090/omessage/insert"
const allmsg="http://localhost:8090/omessage/messages"

//Crud for User
const adduser = "http://localhost:8096/user/insert";
const allusers = "http://localhost:8096/user/users";
const deleteuser = "http://localhost:8096/user/delete";
const updateuser = "http://localhost:8096/user/update";
//----------------------------------------------------------------------------------
//userCrud
export const addUser = async (user) => {
    return await axios.post(adduser,user);
}

export const getallUsers = async (id) => {
    id = id || '';
    return await axios.get(`${allusers}/${id}`);
}
export const deleteusers = async (id) => {
    return await axios.delete(`${deleteuser}/${id}`);
}

export const editUsers = async (id, user) => {
    return await axios.put(`${updateuser}/${id}`,user);
}

//--------------------------------------------------------------------------------------
//Admin Crud

export const getallAdmin = async (id) => {
    id = id || '';
    return await axios.get(`${alladmin}/${id}`);
}

export const addAdmin = async (admin) => {
    return await axios.post(addadmin,admin);
}

export const deleteAdmins = async (id) => {
    return await axios.delete(`${deleteadmin}/${id}`);
}

export const editAdmins = async (id, admin) => {
    return await axios.put(`${updateadmin}/${id}`,admin);
}

//---------------------------------------------------------------------------

export const addApprove = async (approve) => {
    return await axios.post(approveinsert,approve);
}

export const getallWaitingApprove = async (id) => {
    id = id || '';
    return await axios.get(`${approveappoinments}/${id}`);
}

export const deleteWaitingAppoinment = async (id) => {
    return await axios.delete(`${approvedelete}/${id}`);
}

//-----------------------------------------------------------------------------------

export const addAdminMsg = async (msg) => {
    return await axios.post(addmsg,msg);
}

export const getallAdminmsgs = async (id) => {
    id = id || '';
    return await axios.get(`${allmsg}/${id}`);
}