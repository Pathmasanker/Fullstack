import axios from 'axios';

//this component for doctor crud and high rating getting 

const adddoctor="http://localhost:8090/doctor/insert"
const alldoctors = "http://localhost:8090/doctor/doctors";
const deletedoctor = "http://localhost:8090/doctor/delete";
const updatedoctor = "http://localhost:8090/doctor/update";
const sort="http://localhost:8090/doctor/sort"
const Hrating ="http://localhost:8090/doctor/Hrating"

//Doctor Crud And Filter

export const getallDoctors = async (id) => {
    id = id || '';
    return await axios.get(`${alldoctors}/${id}`);
}

export const addDoctor = async (doctor) => {
    return await axios.post(adddoctor,doctor);
}


export const editDoctor = async (id, doctor) => {
    return await axios.put(`${updatedoctor}/${id}`,doctor);
}


export const deleteDoctor = async (id) => {
    return await axios.delete(`${deletedoctor}/${id}`);
}



export const getallDoctorsSort = async (id) => {
    id = id || '';
    return await axios.get(`${sort}/${id}`);
}

export const getHighRating = async (id) => {
    id = id || '';
    return await axios.get(`${Hrating}/${id}`);
}
