import React, {useState,useEffect } from 'react';
import {usePosition} from './usePosition';

function Getambee  ({watch, settings}) {   
    const limit="1";
    const {
      latitude,
      longitude,
      error,
    } = usePosition(watch, settings);
    const [soil_temperature, settemp] = useState(0);
    const [soil_moisture, setmoist] = useState(0); 
    const loader = !latitude && !error ? (
      <>
        <div>Trying to fetch location...</div>
        <br/>
      </>
    ) : null;
    
    useEffect(() => {  
      if (!latitude) return;   
        fetch(`https://api.ambeedata.com/soil/latest/by-lat-lng?lat=${latitude}&lng=${longitude}&limit=${limit}`,
        {
            method:'GET',
            headers:{
                'x-api-key':'tLWZol1niJ1yw0nVa312H9xOVxr0UpcS8OK36sBr',
                'accept':'application/json'
            },    
        }).then((result)=>{
            result.json().then((res)=>{
                console.log("a" ,res);
                settemp(res.data[0].soil_temperature);
                setmoist(res.data[0].soil_moisture);
            })
        })
    },[latitude,longitude]);
  
  return (
    <div>
      latitude: {latitude}<br/>
      longitude: {longitude}<br/>
      temprature: {soil_temperature}<br/>
      moisture: {soil_moisture}<br/>
    </div>
  );
};
export default Getambee;