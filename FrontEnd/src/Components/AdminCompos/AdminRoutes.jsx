import '../../App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminWelcome from './AdminNavbar';
import CreateDoctors from './CreateDoctors';
import CreateUsers from './CreateUsers';
import AllDoctors from './AllDoctors';
import UpdateDoctor from './UpdateDoctor';
import AdminAllowAppoinments from './AdminAllowAppoinments';
import ApproveConfirm from './AllowAppoinments';
import AdminDetails from './AdminDetails';

import HomeNavbar from '../Main_Page/MainRoutesPage';
import BookedAppoinments from './BookedAppoinments';
import MsgAdmin from './MsgAdmin';
import ReplyMessage from './AdminReplyMsg';
import AdminLogout from './AdminLogout';
import UserCrud from './UserCrud';
import AdminCrud from './AdminCrud';
import UpdateUsers from './UpdateUsers';

import AdminLogin from './AdminLogin';


//this component for Admin all routing paths



function AdminRoutes() {
  return (
    <Router>
      <AdminWelcome />
      <Switch>
       
        <Route path="/AdminLogin" component={AdminLogin} exact />
        <Route path="/" component={HomeNavbar} exact />
        <Route path="/logout" component={AdminLogout} exact />
        <Route path="/BookedAppoinments" component={BookedAppoinments} exact />
        <Route path="/profile" component={AdminDetails} exact />
        <Route path="/CreateDoctors" component={CreateDoctors} exact />
        <Route path="/CreateUsers" component={CreateUsers} exact />
        <Route path="/MsgAdmin" component={MsgAdmin} exact />
        <Route path="/AllDoctors" component={AllDoctors} exact />
      
        <Route path="/update/:id" component={UpdateDoctor} exact />
        <Route path="/updateuser/:id" component={UpdateUsers} exact />
        <Route path="/oreply/:id" component={ReplyMessage} exact />
        <Route path="/bookingapprove" component={AdminAllowAppoinments} exact />
        <Route path="/approved/:id" component={ApproveConfirm} exact />   
        <Route path="/usercrud" component={UserCrud} exact />
      
        <Route path="/admincrud" component={AdminCrud} exact />
       
      </Switch>
    </Router>
  );
}

export default AdminRoutes;
