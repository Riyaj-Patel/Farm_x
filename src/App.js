import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/animate.css/animate.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import "./index.css";
import Homepage from "./Homepage";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Profile from './Profile';
//import { clearMessage } from "./actions/errorAction";

import { history } from "./helper/history";
import Login_model from './Login_model';

function App() {


  return (
  
  
    <Router history={history}>
         <Switch>
        <Route exact path="/"  component={Homepage}    />
         <Route exact path="/about"  component={About}    />
          <Route exact path="/service"  component={Services}    />
           <Route exact path="/contact"  component={Contact}    />
           <Route exact path ="/login" component={Login_model} />
           <Route exact path="/profile" component={Profile} />       
           <Redirect  to="/" />
    </Switch>
    </Router>
    
   
  );
}

export default App;
