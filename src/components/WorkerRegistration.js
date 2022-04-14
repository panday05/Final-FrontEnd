import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import base_url from '../api/workerboot'
import WorkerLogin from './WorkerLogin'
import UserLogin from './UserLogin'
import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router'


import {
  CButton,
  CCard,
  CCardBody,
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
import { Link } from 'react-router-dom'

const WorkerRegistration = () => {

  // let navigate =useNavigate();
  // const routeChange=()=>{
  //   let path='/WorkerLogin';
  //   navigate(path);
  // }



  let navigate = useNavigate();
  const postData = (data) => {
    axios.post(`${base_url}/worker`, data).then(
      (Response) => {
        console.log(Response);
        console.log("success");


        let path = '/WorkerLogin';
        navigate(path);
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };

  const [Worker, setWorker] = useState({});
  //form handler
  const handleFormSubmit = (e) => {
    console.log(addworker);
    postData(addworker);
    e.preventDefault();
  }

  const [workerlogin, setWorkerLogin ] = useState({});
  const [workerservice, setService ] = useState({});
  const addworker = {
    "name": Worker.name,
    "email": Worker.email,
    "password": Worker.password,
    "phoneNumber": Worker.phoneNumber,
    "address": Worker.address,
    "adharNumber":Worker.adharNumber,
    "services": Worker.services,
    "login":
    {
      "email": workerlogin.email,
      "password":workerlogin.password
    },
    "service":
    {
        "workerId":workerservice.id,
        "serviceType":workerservice.service
    }
  }


  return(
    <>
  {
    WorkerLogin?(
        <div className = "bg-light min-vh-100 d-flex flex-row align-items-center" >

        <CContainer>

          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm onSubmit={handleFormSubmit} enctype="multipart/form-data">
                    <h1>Worker Register</h1>
                    <p className="text-medium-emphasis">Create your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="id" autoComplete="id" name="id"
                        onChange={(e) => {
                          setService({ ...workerservice, id: e.target.value })
                        }} />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="name" autoComplete="name" name="name"
                        onChange={(e) => {
                          setWorker({ ...Worker, name: e.target.value })
                        }} required />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput placeholder="Email" autoComplete="email" name="email"
                        onChange={(e) => {
                          setWorker({ ...Worker, email: e.target.value });
                          setWorkerLogin({...workerlogin,email:e.target.value});
                        }} required />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="password"
                        onChange={(e) => {
                          setWorker({ ...Worker, password: e.target.value });
                          setWorkerLogin({...workerlogin,password:e.target.value});
                        }} required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="phoneNumber"
                        name="phoneNumber"
                        placeholder="phoneNumber"
                        autoComplete="phoneNumber"
                        onChange={(e) => {
                          setWorker({ ...Worker, phoneNumber: e.target.value })
                        }} required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="services"
                        name="services"
                        placeholder="services"
                        autoComplete="services"
                        onChange={(e) => {
                          setWorker({ ...Worker, services: e.target.value });
                         setService({...workerservice,service:e.target.value});
                        }} required
                      />

                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        name="address"
                        placeholder="address"
                        autoComplete="address"
                        onChange={(e) => {
                          setWorker({ ...Worker, address: e.target.value })
                        }} required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="adharNumber"
                        name="adharNumber"
                        placeholder="adharNumber"
                        autoComplete="adharNumber"
                        onChange={(e) => {
                          setWorker({ ...Worker, adharNumber: e.target.value })
                        }} required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="file"
                        name="wphoto" multiple="multiple" accept="wphoto/png, wphoto/jpeg "
                        placeholder="image"
                        autoComplete="wphoto"
                        onChange={(e) => {
                          setWorker({ ...Worker, wphoto: e.target.value })
                        }}
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton color="success" type='submit'
                      // onClick={routeChange}
                      >Create Account</CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>


        </div >
      ) : (
  <WorkerLogin />
)}
    </>
  )
}

export default WorkerRegistration