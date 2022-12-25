import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';

//this component for user logout

const notify = (msg) => {

    toast.success(msg, {

        position: 'top-right', autoClose: 2500, hideProgressBar: true, closeOnClick: false,

        pauseOnHover: true, draggable: false, progress: undefined, theme: 'colored'

    });

}

const UserLogout = () => {

    const history=useHistory()
   
    notify("Logout Successfully")
    
    history.push("/")

   
}

export default UserLogout;