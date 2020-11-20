import React, {useState, useEffect } from 'react';
import './Navbar.css';
import {connect} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';
import {register} from './actions/acc';
import {clearErrors} from './actions/errorAction';


const SignupModel = () => {
    const [user, setUser]=useState({
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        password:'',
        address:'',
        dob:''
    });

    const dispatch=useDispatch();
    const [submitted, setSubmitted] = useState(false);
    const [msg, setMsg] = useState(null);
    const [Sucessmsg, setsMsg] = useState(null);
  

    const error = useSelector((state) => {
        if (Object.keys(state.error.msg).length === 0) {
            return;
          }
        else{          
        // Check for register error
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
      // Check for register error
      if(submitted){if (success){
        setsMsg("Account Successfully Created!Login now...!!");
        }}
    }, [success,submitted]);
      
    useEffect(() =>{ 
      // Check for register error
      if(submitted){if (error){
          setMsg(error.error);
          console.log("error",error);
          }
      }}, [error,submitted]);
    const clear = () => {  
      setUser({   first_name:'',
      last_name:'',
      email:'',
      phone:'',
      password:'',
      address:'',
      dob:''});
      setMsg(null);
      setsMsg(null);
    };

    function handleChange(e) {
      clearErrors();
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
      e.preventDefault();
      setSubmitted(true);

      if (user.first_name && 
          user.last_name && 
          user.email && 
          user.phone && 
          user.password && 
          user.address && user.dob) {
          dispatch(register(user))
          .then(() => {
        
            setSubmitted(false);
          })
          .catch(() => {
          
            setSubmitted(false);
          }); 
      }
      clear();      
    }
    return (
        <>
          <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            {msg ?  <div className="alert alert-danger" role="alert">
              {msg}
              </div> :Sucessmsg ? <div className="alert alert-success" role="alert">
              {Sucessmsg}
              </div> :null}
              <div className="modal-header">            
              <h2 className="modal-title" >Sign Up</h2>
                
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              
              <div className="modal-body">
              <div className="signup-form">
          <form onSubmit={handleSubmit} >
		
		
          <div className="form-group">
        <div className="row">
                  <div className="col"><input 
                  type="text" 
                  className="form-control" 
                  name="first_name" 
                  placeholder="First Name" 
                  required="required"
                  value={user.first_name}
                  onChange={handleChange}
                  
                  />
                  {submitted && !user.firstName &&
                          <div className="invalid-feedback">First Name is required</div>
                      }
                  </div>
				<div className="col">
                    <input 
                    type="text" 
                    className="form-control" 
                    name="last_name" 
                    placeholder="Last Name" 
                    required="required" 
                    value={user.last_name}
                    onChange={handleChange}
                    />
                    {submitted && !user.last_name &&
                        <div className="invalid-feedback">Last Name is required</div>
                    }
                    </div>
			  </div>        	
        </div>
        <div className="form-group">
                  <input 
                  type="email" 
                  className="form-control" 
                  name="email" 
                  placeholder="Email" 
                  required="required"
                  value={user.email}
                  onChange={handleChange}
                      />
                      {submitted && !user.email &&
                              <div className="invalid-feedback">Email is required</div>
                          }
              </div>
        <div className="form-group">
            <input 
            type="text" 
            className="form-control" 
            name="phone" 
            placeholder="Contact Number" 
            required="required"
            value={user.phone}
            onChange={handleChange}
             />
             {submitted && !user.phone &&
                        <div className="invalid-feedback">Contact Number is required</div>
                    }
        </div>
        <div className="form-group">
            <input 
            type="password" 
            className="form-control" 
            name="password" 
            placeholder="Password" 
            required="required" 
            value={user.password}
            onChange={handleChange}
            />
            {submitted && !user.password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
        </div>

		<div className="form-group">
            <input 
            type="text" 
            className="form-control" 
            name="address" 
            placeholder="address" 
            required="required" 
            value={user.address}
            onChange={handleChange}
            />
            {submitted && !user.address &&
                        <div className="invalid-feedback">Address is required</div>
                    }
        </div>        
        <div className="form-group">
            <input 
            type="date" 
            className="form-control" 
            name="dob" 
            placeholder="Date of Birth" 
            required="required" 
            value={user.dob}
            onChange={handleChange}
            />
            {submitted && !user.dob &&
                        <div className="invalid-feedback">Date of Birth is required</div>
                    }
        </div>      
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">
                {submitted?
                 <span className="spinner-border spinner-border-sm"></span> 
                 :null}
              
              <span>Sign-UP</span>
            </button>
          </div>   
              </div>
              
            
            </form>
            </div>
          </div>
        </div>
        </div>
        
</div>  
        </>
    );
};

const mapDispatchToProps = dispatch => ({
    register: userInfo => dispatch(register(userInfo))
  })
  
  export default connect(null, mapDispatchToProps)(SignupModel);
  