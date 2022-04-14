import React from 'react';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Testimonial from './components/Testimonial';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Registration from './components/Registration';
import Login from './components/Login';
//import Register from './components/register/Register';
import UserLogin from './components/UserLogin';
import UserRegistration from './components/userregister/UserRegistration';
import WorkerLogin from './components/WorkerLogin';
import WorkerRegistration from './components/WorkerRegistration';
import Worker from './components/Worker';
import Allworker from './components/AllWorker';
import AdminDashboard from './components/AdminDashboard';
import AllWorkerAdmin from './components/AllWorkerAdmin';
import Workeradmin from './components/WorkerAdmin';
import UserDashboard from './components/UserDashboard';
import Navbar from './components/Navbar';
import WorkerDashboard from './components/WorkerDashboard';

function App() {

  return (
    <>

      <Router>
        <Navbar />
        <div className='container-fluid '>
          <Routes>

          <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/aboutus' element={<AboutUs />}></Route>
            <Route exact path='/contactus' element={<ContactUs />}></Route>
            <Route exact path='/services' element={<Services />}></Route>
            <Route exact path='/testimonial' element={<Testimonial />}></Route>
            <Route exact path='/gallery' element={<Gallery />}></Route>

            <Route exact path='/registration' element={<Registration />}></Route>

            <Route exact path='/Login' element={<Login />}></Route>
            
            {/* <Route exact path="/register" name="Register Page" element={<Register />} /> */}

            <Route exact path='/UserLogin' element={<UserLogin />}></Route>
          
            <Route exact path='/admindashboard' element={<AdminDashboard />}></Route>
            <Route exact path='/Worker' element={<Worker />}></Route>
            <Route exact path='/allworker' element={<Allworker />}></Route>
            <Route exact path='/workeradmin' element={<Workeradmin />}></Route>
            <Route exact path='/allworkeradmin' element={<AllWorkerAdmin />}></Route>
            <Route exact path="/userregister" name="Register Page" element={<UserRegistration />} />

            <Route exact path='/workerlogin' element={<WorkerLogin />}></Route>
            <Route exact path="/workerregistration" name="Register Page" element={<WorkerRegistration />} />

            <Route exact path="/userdashboard" name="Register Page" element={<UserDashboard />} />

            <Route exact path="/workerdashboard" name="Register Page" element={<WorkerDashboard />} />

          </Routes>
        </div>
        {/* <a id="services"></a>
        <Services />
        <a id="aboutus"></a>
        <AboutUs />
        <a id="gallery"></a>
        <Gallery />
        <a id="contactus"></a>
        <ContactUs />
        <a id="testimonial"></a>
        <Testimonial />  */}
        <Footer />
      </Router>

    </>
  );
}

export default App;
