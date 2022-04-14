import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, Navbar } from "reactstrap";
import { useNavigate } from 'react-router';
import { CButton } from '@coreui/react';
export default function UserDashboard() {

  let navigate = useNavigate();
  function logout()
  {
      let path = '/';
      navigate(path);
  }

  return (
      <>
    <div>
      <h1><center>UserDashboard</center></h1>
     


      <ListGroup>
        <Link  className="list-group-item list-group-item-action" tag="a" to="/services" action>View Services</Link>
        <Link  className="list-group-item list-group-item-action" tag="a" to="/allworker" action>View Workers</Link>
        <Link  className="list-group-item list-group-item-action" tag="a" to="/update" action>update</Link>
        
        <form onSubmit={logout}>
        <CButton className='text-center' color="success" type='submit'>Logout</CButton>
        </form>
      </ListGroup>
      </div>

   

   
    </>
  )
}



