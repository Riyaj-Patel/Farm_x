import React, { Component } from 'react';
import {usePosition} from './usePosition';
import axios from 'axios';


function Getambee  ({watch, settings}) {
      let  soil_temperature=null;
       let soil_moisture=null;
    
    const limit="1";
    const {
      latitude,
      longitude,
      timestamp,
      accuracy,
      error,
    } = usePosition(watch, settings);
  
    const loader = !latitude && !error ? (
      <>
        <div>Trying to fetch location...</div>
        <br/>
      </>
    ) : null;

  console.log(latitude);
  
        let URL =`https://api.ambeedata.com/soil/latest/by-lat-lng?lat=${latitude}&lng=${longitude}&limit=${limit}`
        fetch(URL,{
            method:'GET',
            headers:{
                'x-api-key':'tLWZol1niJ1yw0nVa312H9xOVxr0UpcS8OK36sBr',
                'accept':'application/json'
            },
            
            
            
        }).then((result)=>{
            result.json().then((res)=>{
                console.log("a" ,res)
                getresult(res)
            })
        })
       function getresult(res){                
                soil_moisture=res.data[0].soil_moisture;
                soil_temperature=res.data[0].soil_temperature;
                 
                 console.log("es",res.data[0]);
                }
    
  
  return (
    <div>
      latitude: {latitude}<br/>
      longitude: {longitude}<br/>
      error: {error}
      accuracy: {accuracy && `${accuracy}m`}<br/>
      temprature: {soil_temperature}<br/>
    </div>
  );
};
export default Getambee;
