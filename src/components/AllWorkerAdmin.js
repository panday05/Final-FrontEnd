import React, { useState,useEffect } from "react";
import WorkerAdmin from "./WorkerAdmin";
import base_url from "../api/workerboot";
import axios from "axios";
import { Col, Row } from "reactstrap";
const AllWorkerAdmin=()=>{

      //function calling to server
  const getAllWorker=()=>{
    axios.get(`${base_url}/worker`).then(
        (response)=>{
            //success call
            //console.log(response);
            console.log(response.data);
            setWorkerAdmin(response.data);
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



    const [ worker , setWorkerAdmin ]=useState([]);

    const updateworkeradmin=(WorkerId)=>{
        setWorkerAdmin(worker.filter((c)=>c.workerId!=WorkerId));
    }

    return(
        <div>
          <center>  <h1><b>WELCOME TO OUR SERVICES</b></h1></center>
            <h4> <center> All worker || Services</center> 
            
            </h4>
           <Row>
            {
                worker.length > 0 ? 
                worker.map((item) =>  
                <Col md={4}> <WorkerAdmin key={item} WorkerAdmin worker={item} update={updateworkeradmin}/> 
                </Col>
                 )
                 : "No worker"}
         </Row>
        </div>
    );
};

export default AllWorkerAdmin;

