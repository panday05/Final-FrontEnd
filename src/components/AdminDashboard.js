import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from "reactstrap";

export default function AdminDashboard() {
  return (
      <>
    <div>
      <h1><center>AdminDashboard</center></h1>
      
      <ListGroup>
      <Link  className="list-group-item list-group-item-action" tag="a" to="/" action>Back To Home</Link>
      <Link  className="list-group-item list-group-item-action" tag="a" to="/allworkeradmin" action>View Workers</Link>
      <Link  className="list-group-item list-group-item-action" tag="a" to="/services" action>View Services</Link>
      <Link  className="list-group-item list-group-item-action" tag="a" to="/add-services" action>Add Services</Link>
        
        
       

      </ListGroup>
      </div>

   

   
    </>
  )
}


