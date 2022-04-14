import React, { useState,useEffect } from "react";
import Worker from "./Worker";
import base_url from "../api/workerboot";
import axios from "axios";
const Allworker=()=>{

      //function calling to server
  const getAllWorker=()=>{
    axios.get(`${base_url}/worker`).then(
        (response)=>{
            //success call
            //console.log(response);
            console.log(response.data);
            setWorker(response.data);
        },
        (error)=>{
            //for erroe
            console.log(error);
            
        }
    )
};

//calling loading course function
useEffect(()=>{
    getAllWorker();
},[]);



    const [ worker , setWorker ]=useState([]);

    const updateworker=(WorkerId)=>{
        setWorker(worker.filter((c)=>c.WorkerId!=WorkerId));
    }

    return(
        <div>
          <center>  <h1><b>WELCOME TO OUR SERVICES</b></h1></center>
            <h4> <center> All worker || Services</center> 
            </h4>
           
            {
                worker.length > 0 ? 
                worker.map((item) =>  <Worker key={item} Worker worker={item} update={updateworker}/>  )
                 : "No worker"
            }
            
        </div>
    );
};

export default Allworker;
