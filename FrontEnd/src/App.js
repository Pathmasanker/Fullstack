import './App.css';
import UserLogin from'./Components/UserCompos/UserLogin';
import UserRegister from './Components/UserCompos/UserRegister';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserHome from './Components/UserCompos/UserRoutes';
import AdminRegister from './Components/AdminCompos/AdminRegister';
import AdminLogin from './Components/AdminCompos/AdminLogin';
import AdminRoutes from './Components/AdminCompos/AdminRoutes';

        import HomeNavbar from './Components/Main_Page/MainRoutesPage';
        import ImageUpload from './Components/AdminCompos/ImageUpload';
        import AdminCrud from './Components/AdminCompos/AdminCrud';
        import CreateAdmin from './Components/AdminCompos/CreateAdmin';
        import UpdateAdmin from './Components/AdminCompos/UpdateAdmin';
        import DeanLogin from './Components/AdminCompos/DeanLogin';
     









function App() {
  return (
    <Router>
      
      <Switch>

   

       <Route path="/user" component={UserLogin} exact />
       <Route path="/AdminLogin" component={AdminLogin} exact />
       <Route path="/userregister" component={UserRegister} exact />
       <Route path="/AdminRegister" component={AdminRegister} exact />
      <Route path="/adminhome" component={AdminRoutes} exact />
      <Route path="/userhome" component={UserHome} exact />
      <Route path="/question" component={ImageUpload} exact />
     
      <Route path="/" component={HomeNavbar} exact />
      <Route path="/admincrud" component={AdminCrud} exact />
      <Route path="/createadmin" component={CreateAdmin} exact />
      <Route path="/updateadmin/:id" component={UpdateAdmin} exact />
      <Route path="/DeanLogin" component={DeanLogin} exact />
      


       
      </Switch>
    </Router>
  );
}

export default App;