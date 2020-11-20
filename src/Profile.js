import React, {useState, useEffect } from 'react';
import Navibar from './Navbar';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";



const Profile = () => {

const [currentUser,setuser]=useState(null); 
const User = useSelector((state) => {
    if (Object.keys(state.acc).length === 0) {
      return;
    }
    else{
      return state.acc;
      
    }  
  });


useEffect(() =>{ 
if (User && User.isAuthenticated){
  setuser(User.user);
  console.log("user at profile",User.user); 
}


}, [User]);


  // if (!currentUser) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <>
    <Navibar />
    { currentUser?
    
    <div className="container">
      <h2>profile</h2>
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.user.first_name}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
        {currentUser.token.substr(currentUser.token.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.user.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.user.email}
      </p>
      
    </div> :<div><span className="spinner-border spinner-border-sm"></span></div>}
    </>
  );
};

export default withRouter(Profile);