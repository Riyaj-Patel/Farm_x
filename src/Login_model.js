import React, {useState, useEffect } from 'react';
import './Login.css';
import {useDispatch, useSelector} from 'react-redux';
import {login} from './actions/acc';
import Navibar from './Navbar';
//import { Redirect } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';


function Login_model(props) {

  const [loginData,setLoginData]=useState({ 
    email:'',   
    password:''
});
const dispatch=useDispatch();
const [msg, setMsg] = useState(null);
const [submitted, setSubmitted] = useState(false);
const [successLogin,setSuccess]=useState(false);

//const isAuthenticated  = useSelector(state => {console.log(state.acc.isAuthenticated)});
const clear = () => {
        
  setLoginData({   email:'',   
  password:''});
  setMsg(null);
  
};
const error = useSelector((state) => {
    // setMsg(state.error.msg);
    if (Object.keys(state.error.msg).length === 0) {
        return;
      }
    else{
      return state.error.msg;
    }
});

const success = useSelector((state) => {
  if (Object.keys(state.acc).length === 0) {
    return;
  }
  else{
    return state.acc;
    
  }  
});

useEffect(() =>{ 

  if(submitted){
  console.log("check after submission",success.isAuthenticated,successLogin);
  if(success.isAuthenticated){
    setSuccess(true);
  }
  //clearErrors(); 
  }
  
}, [success,submitted,successLogin]);


useEffect(() =>{ 

 
  if(submitted && error){
    setSuccess(false);
      setMsg(error.msg);
      setSubmitted(false);
      console.log("error",error);
      //clearErrors();
     }
   
}, [error,submitted]);
  

 function handleSubmit(e) {
  e.preventDefault();
  setSubmitted(true);
  setSuccess(false);
  if (
      loginData.email && 
     
      loginData.password 
      ) {
      dispatch(login(loginData));
  } clear();

  
}
    return (
        <>
        <Navibar />
        {msg ?  <div className="alert alert-danger" role="alert">
    {msg}
     </div> :null}
           
  <section className="myform-area">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-8">
                          <div className="form-area login-form">
                              <div className="form-content ">
                                  {/* <h2>Login</h2>
                                   */}
                                    <img
                                    src={process.env.PUBLIC_URL + "bg1.jpg"}
                                    className="img-fluid"
                                    alt="imags"
                                  />
                                 <h3>Don't have acccount!</h3>
                                 <Link
                                    className="reg-btn myform-btn myform-button" data-toggle="modal" data-target="#exampleModalCenter">

                                    <AccountCircleIcon />
                            Register Now!

                            </Link>
                              </div>
                              <div className="form-input">
                                  <h2>Login Form</h2>
                                  <form onSubmit={handleSubmit}>
                                      <div className="form-group">
                                          <input type="email"  name="email" required    value={loginData.email}
                                            onChange={
                                              (e) =>setLoginData(
                                                  {...loginData,email:e.target.value}
                                                  )
                                      }/>
                                          <label>Email</label>
                                      </div>
                                      <div className="form-group">
                                          <input type="password"  name="password" required value={loginData.password}
                                        onChange={
                                          (e) =>setLoginData(
                                              {...loginData,password:e.target.value}
                                              )
                                        } />
                                          <label>password</label>
                                      </div>
                                      <div className="myform-button">
                                          <button className="myform-btn" type="submit">Login
                                    {submitted?
                                    <span className="spinner-border spinner-border-sm"></span>

                                    :null} </button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        </>
    );
}

// const mapDispatchToProps = dispatch => ({
//   login: userInfo => dispatch(login(userInfo))
// })


export default Login_model;