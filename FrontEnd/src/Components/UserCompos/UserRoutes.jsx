import '../../App.css'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import UserWelcome from './UserNavbar';
import CreateAppoinments from './CreateAppoinments';
import SeeListOfDoctors from './SeeListOfDoctors';
import WaitingConfirm from './UserBookingConfirm';
import WaitAllowAppoinmets from './WaitAllowAppoinmets';
import AllBookings from './MakeAppoinments';
import UserProfile from './UserDetails';
import UserLogin from './UserLogin';
import MessagesUser from './MsgUser';
import UserReplyMessage from './UserReplyMsg';
import FirstUserMessage from './UserSendMsg';
import UserLogout from './UserLogout';


//this component for user main routing paths
function UserHome() {
  return (
    <Router>
   
      <UserWelcome />
      
     
        <Route path="/user" component={UserLogin} exact />
        <Route path="/ulogout" component={UserLogout} exact />
        <Route path="/userprofile" component={UserProfile} exact />
        <Route path="/CreateAppoinments" component={CreateAppoinments} exact />
        <Route path="/SeeListOfDoctors" component={SeeListOfDoctors} exact />
        <Route path="/usermessages" component={MessagesUser} exact />
        <Route path="/message/:id" component={FirstUserMessage} exact />
        <Route path="/ureply/:id" component={UserReplyMessage} exact />
        <Route path="/booking" component={AllBookings} exact />
        <Route path="/confirm/:id" component={WaitingConfirm} exact />
        <Route path="/waitingapprove" component={WaitAllowAppoinmets} exact />      
     
    </Router>
  );
}

export default UserHome;
