import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import base_url from '../api/workerboot'
import { useState } from 'react'
import UserDashboard from './UserDashboard'
import { useNavigate } from 'react-router'

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'


const UserLogin = () => {
 
  let navigate = useNavigate();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const handleEmail=(e)=>{
      setEmail(e.target.value)
  }
  const handlePassword = (e) =>{
      setPassword(e.target.value)
  }
  let data = {
    email : email,
    password : password
  }

  const handleform =(e)=>{
    console.log(data);
    handleFormSubmit(data);
    e.preventDefault();
  }

  const handleFormSubmit = (data) =>{
  
    axios.post(`${base_url}/userlogin`,data).then(
      (Response)=>{
        console.log(Response.data);
        if (Response.data==="success") {
          alert("loging successfully")
          let path = '/userdashboard';
          navigate(path);
        }else{
          alert ("Incorrect Email/Password, please check your email and password");
        }   
      },
      (error)=>{
        console.log(error);      
      }
    );
  };
  

  return (
    <>
      {UserDashboard ? (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">

          <CContainer>
            <CRow className="justify-content-center">
              <CCol md={8}>
                <CCardGroup>
                  <CCard className="p-4">
                    <CCardBody>
                      <CForm onSubmit={handleform}>

                        <h1>User Login</h1>
                        <p className="text-medium-emphasis">Sign In to your account</p>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <CIcon icon={cilUser} />
                          </CInputGroupText>
                          <CFormInput placeholder="email" autoComplete="email" value={email}
                          onChange={handleEmail}
                          required
                          />
                        </CInputGroup>
                        <CInputGroup className="mb-4">
                          <CInputGroupText>
                            <CIcon icon={cilLockLocked} />
                          </CInputGroupText>
                          <CFormInput
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            value={password}
                            onChange={handlePassword}
                            required
                          />
                        </CInputGroup>
                        <CRow>
                          <CCol xs={6}>
                            <CButton color="primary" className="px-4" type='submit'>Login</CButton>
                          </CCol>
                          <CCol xs={6} className="text-right">
                            <CButton color="link" className="px-0">
                              Forgot password?
                            </CButton>
                          </CCol>
                        </CRow>
                      </CForm>
                    </CCardBody>
                  </CCard>
                  <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                    <CCardBody className="text-center">
                      <div>
                        <h2>Sign up</h2>
                        <Link to="/userregister">
                          <CButton color="primary" className="mt-3" active tabIndex={-1} >
                            Register Now!
                          </CButton>
                        </Link>
                      </div>
                    </CCardBody>
                  </CCard>
                </CCardGroup>
              </CCol>
            </CRow>
          </CContainer>
        </div>
       ) : (
        <UserDashboard />
      )} 
    </>
  )
}

export default UserLogin