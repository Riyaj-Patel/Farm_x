import React from "react";
import $ from 'jquery';
import Getambee from "./Getambee";
import Login from "./Login";
import Popper from '../node_modules/popper.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/animate.css/animate.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import "./index.css";
import Homepage from "./Homepage";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import {Switch, Route, Redirect} from "react-router-dom";

function App() {
  return (
    <>   
    <Switch>
        <Route exact path="/"  component={Homepage}    />
         <Route exact path="/about"  component={About}    />
          <Route exact path="/service"  component={Services}    />
           <Route exact path="/contact"  component={Contact}    />
           <Redirect to="/" />
    </Switch>
    </>
  );
}

export default App;
