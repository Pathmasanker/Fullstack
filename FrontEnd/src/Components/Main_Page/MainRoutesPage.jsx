import '../../App.css';
import Navbar from './MainNavbar';

import UserRegister from '../UserCompos/UserRegister';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserHome from '../UserCompos/UserRoutes';
import AdminRegister from '../AdminCompos/AdminRegister';
import AdminLogin from '../AdminCompos/AdminLogin';
import AdminRoutes from '../AdminCompos/AdminRoutes';

import '../../App.css';

import UserLogin from '../UserCompos/UserLogin';
import DeanLogin from '../AdminCompos/DeanLogin';

//this component for main home page routing paths
function MainRoutesPage() {





  return (
   
    <Router>
        <><Navbar /></>
        
      {/* <div style={myStyle}> */}
      <Switch>

      <Route path="/user" component={UserLogin} exact />
        <Route path="/AdminLogin" component={AdminLogin} exact />
        <Route path="/userregister" component={UserRegister} exact />
        <Route path="/AdminRegister" component={AdminRegister} exact />
        <Route path="/adminhome" component={AdminRoutes} exact />
        <Route path="/userhome" component={UserHome} exact />
        <Route path="/DeanLogin" component={DeanLogin} exact />
       
      </Switch>
      {/* </div> */}
      {/* <div className="taxi">
      <h1 style={{ color: 'lightblue' }}>**********************************************</h1>
      <h1 style={{ color: 'blue' }}>FRACTO!! we are here for your health</h1>
      <h1 style={{ color: 'Red' }}>_________👨‍⚕️24/7💊Service🩺_______</h1>
      <h1 style={{ color: 'lightblue' }}>***********************************************</h1>
         </div> */}
    </Router>
 
  );
}

export default MainRoutesPage;