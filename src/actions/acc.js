import {CREATE,LOGIN} from '../constants/actionType';
// import {useDispatch, useSelector} from 'react-redux';
//const apiURL='http://localhost:8000'
import {history} from '../helper/history';
// import * as api from '../api/index.js';
import axios from 'axios';
import { returnErrors } from './errorAction';

// export const getAcc =( ) => async(dispatch) =>{
//     try{
//         const {data} = await api.fetchAcc();
//         dispatch({
//             type:FETCH_ACC  ,payload:data
//         });
//     }
//     catch(error){
//         console.log(error.message);
//     }
// };


export const register =(acc) => async(dispatch) =>{
    console.log("at actions",acc);
    try{
            await axios.post('http://localhost:8000/signup/createAcc',acc)
            .then(res =>{
              // console.log("response",res)
                dispatch({
                  type: CREATE,
                  payload: res.data
                })
                // if(res.data.token){
            
                //   //console.log("response token",res.data.token);
                //   localStorage.removeItem("user");
                //   // window.location.reload();
                //   // history.push({pathname:'login',state: { detail: res.data }});
                 
                // }   
                
    })
              .catch(err => {
                dispatch(
                    returnErrors(err.response.data, err.response.status)
                  );                 
                
                });
            }
    catch(error)
        {
            console.log("err",error);
        }}



export const login =(acc) => async(dispatch) =>{
  try {
    await axios.post('http://localhost:8000/login',acc)
        .then(res =>{
          dispatch({
            type: LOGIN,
            payload: {user:res.data},
          });
          if(res.data.token){
            
            console.log("response token",res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data));
            //window.location.reload();
            history.push({pathname:'profile',state: { detail: res.data }});
           
          }
            
            return Promise.resolve();
        })
          .catch(err => {
            dispatch(
                returnErrors(err.response.data, err.response.status)
              );                 
              return Promise.reject();
            });
          }
    catch(error)
    {
        console.log("err",error);
    }}
        
          // return fetch("http://localhost:8000/login", {
          //   method: "POST",
          //   headers: {
          //     'Content-Type': 'application/json',
          //     Accept: 'application/json',
          //   },
          //   body: JSON.stringify({user})
          // })
            // .then(resp => resp.json())
            // .then(data => {
            //   if (data.message) {
            //     // Here you should have logic to handle invalid login credentials.
            //     // This assumes your Rails API will return a JSON object with a key of
            //     // 'message' if there is an error
            //   } else {
            //     localStorage.setItem("token", data.token)
            //     dispatch(loginUser(data.user))
            //   }
            // })
        




            // .then(async response => {
            //      const data = await response;
            //         console.log("respond data",data.request.status);
              
            //     // check for error response
            //     if (data.request.status==200) {
            //         // get error message from body or default to response status
            //         // const res = (data && data.message) || response.status;
            //         // return Promise.all(res);
            //         console.log(data.request.statusText);
            //     }
            //     else{
            //        console.log("errror message",data.message);
            //     }
    
            //     //this.setState({ postId: data.id })
            // })

        // const {data} = await api.createAccount(acc)
        //     .then(res=>res.json())
        //     .then(data =>{
        //                     if (data.message) {
        //                       console.warn("msg from backend",data.message);
        //                     } else {
        //                       localStorage.setItem("token", data.token)
        //                       console.log("access token",data.token)
        //                       //dispatch(loginUser(data.user));
        //                     }
        //                   })
        // dispatch({
        //     type:CREATE,
        //     payload:data
        // });
    


// export const loginAcc =(Acc) => async(dispatch) =>{
//     console.log("at actions",Acc);
//     try{
//         const {data} = await api.loginAccount(Acc);
//         // console.log("at data",data);
//         dispatch({
//             type:LOGIN,
//             payload:data
//         });
//     }
//     catch(error){
//         console.log(error.message);
//     }
// }




// export const register =user=>{
//     return dispatch => {
//         return fetch("http://localhost:8000/signup/createAcc", {
//           method: "POST",
//           headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//           },
//           body: JSON.stringify({user})
//         })
//           .then(resp => resp.json())
//           .then(data => {
//             if (data.message) {
//               console.warn("msg from backend",data.message);
//             } else {
//               localStorage.setItem("token", data.token)
//               dispatch(loginUser(data.user));
//             }
//           })
//       }
//     }
    
//     const loginUser = userObj => ({
//         type: 'LOGIN_USER',
//         payload: userObj
//     })
    
