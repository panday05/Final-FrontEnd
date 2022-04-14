import React from 'react'
import axios from 'axios'
import base_url from '../../api/workerboot'
import { useState } from 'react'
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

const UserRegistration = () => {


  let navigate = useNavigate();
  const postData = (data) => {
    axios.post(`${base_url}/user`, data).then(
      (Response) => {
        console.log(Response);
        console.log("success");
        let path = '/UserLogin';
        navigate(path);
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };

  const [user, setUser] = useState({});
  const [userlogin,setUserLogin]=useState({});
  const adduser={
    "name":user.name,
    "email":user.email,
    "password":user.password,
    "phoneNo":user.phoneNo,
     "address":user.address,
     "login":
     {
         "email":userlogin.email,
         "password":userlogin.password
     }
  }
  //form handler
  const handleform = (e) => {
    console.log(adduser);
    postData(adduser);
    e.preventDefault();

  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleform}>
                  <h1>User Registration</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>

                    {/* <CFormInput placeholder="id" autoComplete="id"
                      onChange={(e) => {
                        setUser({ ...user, id: e.target.value })
                      }} /> */}
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>

                    <CFormInput placeholder="Username" autoComplete="username"
                      onChange={(e) => {
                        setUser({ ...user, name: e.target.value }) 
                      }} required/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="email"
                      onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                        setUserLogin({...userlogin,email:e.target.value});
                      }} required />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"

                      onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                        setUserLogin({...userlogin,password:e.target.value});
                      }} required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>

                    <CFormInput placeholder="phone number" autoComplete="phoneNo"
                      onChange={(e) => {
                        setUser({ ...user, phoneNo: e.target.value })
                      }} required/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>

                    <CFormInput placeholder="address" autoComplete="address"
                      onChange={(e) => {
                        setUser({ ...user, address: e.target.value })

                      }} required/>
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" type='submit'
                    // onClick={routechange}
                    >Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default UserRegistration;


// import React, { useState } from "react";
// import { Form, Alert } from "react-bootstrap";
// import UserLogin from "../UserLogin";

// function UserRegistration() {
//   const [id, setId] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [flag, setFlag] = useState(false);
//   const [userlogin, setUserLogin] = useState(true);
  


//   function handleFormSubmit(e) {
//     e.preventDefault();

//     if (!name || !email || !password || !phone || !address) {
//       setFlag(true);
//     } else {
//       setFlag(false);
//       localStorage.setItem("sanskarEmail", JSON.stringify(email));
//       localStorage.setItem(
//         "sanskarPassword",
//         JSON.stringify(password)
//       );
//       console.log("Saved in Local Storage");

//       setUserLogin(!userlogin);
//     }
//   }

//   function handleClick() {
//     setUserLogin(!userlogin);
//   }

 
  

//   return (
//     <>
 
//         <div >
//           {" "}
//           {userlogin ? (
//             <form onSubmit={handleFormSubmit}>
//               <h3 className="text-center">User's Registration Form</h3>
              
//               <div className="form-group">
//                 <label>Id</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Enter your id"
//                   name="id"
//                   onChange={(event) => setId(event.target.value)}
//                 />
//               </div>
               
//               <div className="form-group">
//                 <label>Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Enter Full Name"
//                   name="name"
//                   onChange={(event) => setName(event.target.value)}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder="Enter email"
//                   onChange={(event) => setEmail(event.target.value)}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Password</label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder="Enter password"
//                   onChange={(event) => setPassword(event.target.value)}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Phone No.</label>
//                 <input
//                   type="Phone"
//                   className="form-control"
//                   placeholder="Enter contact no"
//                   onChange={(event) => setPhone(event.target.value)}
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Address</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Enter your address"
//                   onChange={(event) => setAddress(event.target.value)}
//                 />
//               </div>

//               {/* <div className="form-group w-25">
//                 <label>Choose your Profession</label>
//                 <Form.Control
//                   as="select"
//                   onChange={(event) => setProfession(event.target.value)}
//                 >
//                   <option>Select</option>
//                   <option>Artist</option>
//                   <option>Photographer</option>
//                   <option>Team Player</option>
//                   <option>Full Stack</option>
//                 </Form.Control>
//               </div> */}

//               <button type="submit" className="btn btn-dark btn-lg btn-block">
//                 Register
//               </button>
//               <p onClick={handleClick} className="forgot-password text-right">
//                 Already registered{" "}log in?
                
//               </p>
//               {flag && (
//                 <Alert color="primary" variant="danger">
//                   I got it you are in hurry! But every Field is important!
//                 </Alert>
//               )}
//             </form>
//           ) : (
//             <UserLogin />
//           )}
//         </div>
    
//     </>
//   );
// }

// export default UserRegistration;