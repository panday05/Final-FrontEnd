import React, { useState } from 'react'
import { CButton } from '@coreui/react'
import base_url from '../api/workerboot'
import axios from 'axios';
import { useNavigate } from 'react-router';
export default function WorkerDashboard() {

    const [data, setData] = useState([]);
    const [id, setId] = useState();

    const getWorkerById = () => {
        axios.get(`${base_url}/worker/${id}`).then
            ((response) => {

                console.log(response.data);
                setData(response.data);

            }, (error) => {
                console.log(error);
            });

    }

    const formhandle =(e)=>{
        update(data);
        setData({name:"",password:"",email:"",phoneNumber:"",services:""})
        e.preventDefault();
    }

    const update =(data1)=>{
        axios.put(`${base_url}/worker`,data1).then(
            (response)=>{
                console.log(response.data);
            },(error)=>{
                console.log(error);
            }
        )
    }

    let navigate = useNavigate();
    function logout()
    {
        let path = '/';
        navigate(path);
    }

    return (
        <div>
            <div><h1><b><center>Worker Dashboard</center></b></h1></div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Home</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/allworker">View Workes <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/services">View Services</a>
                            </li>
                            <CButton className='mx-1 text-center' color="warning" type='button' onClick={logout} >logout</CButton>
                            
                        </ul>
                    </div>
                </nav>
            </div>
            <br></br>
            <form  onSubmit={formhandle}>
                {/* <input label="Search User"  ></input> */}


                <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="id"
                        onChange={(e) => { setId(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Edit Name" value={data.name} 
                     onChange={(e) => { setData({...data,name:e.target.value}) }}
                    />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Edit Password" value={data.password}
                      onChange={(e) => { setData({...data,password:e.target.value}) }}
                    />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Edit Email" value={data.email}
                      onChange={(e) => { setData({...data,email:e.target.value}) }}
                    />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Edit Service" value={data.services} 
                      onChange={(e) => { setData({...data,services:e.target.value}) }}
                    />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Edit Phone Number" value={data.phoneNumber} 
                      onChange={(e) => { setData({...data,phoneNumber:e.target.value}) }}
                    />
                </div>
                <div className='container text-center'>
                <CButton className='mx-1 text-center' color="success" type='submit' >Submit</CButton>

                <CButton className='mx-1 text-center' color="warning" type='button' onClick={() => { getWorkerById() }} >Search</CButton>

                </div>
            </form >

        </div >
    )
}
