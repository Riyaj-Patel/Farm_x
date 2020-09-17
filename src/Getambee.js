import React, { Component } from 'react';

import axios from 'axios';

const URL ='https://api.ambeedata.com/latest/by-postal-code';
const API_KEY = 'tLWZol1niJ1yw0nVa312H9xOVxr0UpcS8OK36sBr';
const postalCode="453771";
const countryCode="IN";
const limit="10";


export class Getambee extends Component {
   constructor(){
       super()
       this.state={
           data:false
       }
   }
  
   componentDidMount(){
    let URL =`https://api.ambeedata.com/latest/by-postal-code?postalCode=${postalCode}&countryCode=${countryCode}&limit=${limit}"`
    fetch(URL,{
        method:'GET',
        headers:{
            'x-api-key':'tLWZol1niJ1yw0nVa312H9xOVxr0UpcS8OK36sBr',
            'accept':'application/json'
        },
        
        
        
    }).then((result)=>{
        result.json().then((res)=>{
            console.log(res)
        })
    })

   }

    render(){
        return(
            <div>
                hello
            </div>
        )
    }
}


export default Getambee;