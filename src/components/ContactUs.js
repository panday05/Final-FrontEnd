import React from 'react';
import { useState, useEffect } from 'react';
import './Contact.css';
import base_url from '../api/workerboot';
import axios from 'axios';



export default function ContactUs() {

  const [feedbackmsg, setfeedback] = useState({});
  const postData = (data) => {
    axios.post(`${base_url}/feedbackmsg`, data).then(
      (Response) => {
        console.log(Response);
        console.log("success");

      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  };

  //form handler
  const handleForm = (e) => {
    postData(feedbackmsg);
    e.preventDefault();
    setfeedback({ email: "", name: "", message: "" });

  }
  return (

    <div>
      <main role="main">

        <div className="section background-white">
          <h1 class="mb-7"><center><b>Contact Us</b></center></h1>
          <h4><center>Thanks for visiting & for booking pupose, Kindly contact us from below details</center></h4>
          <div class="container-fluid py-5">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-5">
                  <img class="img-fluid rounded mb-5 mb-lg-0" src="pic2.jpeg" alt="no pic" />
                </div>

                <div class="col-lg-7">

                  <div className='container my-2'>
                    <h2>Email</h2>

                    <h5>samraddhi30oct@gmail.com<br></br>

                      pandeySurbhi@gmail.com<br></br>

                      vineet121@gmail.com

                    </h5>
                  </div>
                  <div className='container my-2'>
                    <br></br>
                    <h2>Phone Number</h2>

                    <h5><span className="text-primary">9770325453</span><br></br>

                      Office: 704930113<br></br>

                      Office 2: 0798 6546 465 15

                    </h5>
                  </div>

                </div>
              </div>
            </div>
          </div>



          <div className='container my-3'>
            <div className="line">
              <div className="margin">

                <div className="s-12 m-12 l-6">
                  <h2 className="margin-bottom-10">Leave Message</h2>
                  <form name="contactForm" className="customform" method="post" onSubmit={handleForm}>
                    <div className="line">
                      <div className="margin">
                        <div className="s-12 m-12 l-6">
                          <input name="email" className="required email" placeholder="Your e-mail" title="Your e-mail" type="text"
                            onChange={(e) => {
                              setfeedback({ ...feedbackmsg, email: e.target.value })
                            }} />
                          <p className="email-error form-error">Please enter your e-mail.</p>
                        </div>
                        <div className="s-12 m-12 l-6">
                          <input name="name" className="name" placeholder="Your name" title="Your name" type="text"
                            onChange={(e) => {
                              setfeedback({ ...feedbackmsg, name: e.target.value })
                            }} />
                          <p className="name-error form-error">Please enter your name.</p>
                        </div>
                      </div>
                    </div>
                    <div className="s-12">
                      <textarea name="message" className="required message" placeholder="Your message" rows="3"
                        onChange={(e) => {
                          setfeedback({ ...feedbackmsg, message: e.target.value })
                        }}></textarea>
                      <p className="message-error form-error">Please enter your message.</p>
                    </div>
                    <div className="s-12"><button className="s-12 submit-form button background-primary text-white" type="submit">Submit </button>
                      {/* <div className="s-12"><button className="s-12 submit-form button background-primary text-white" >getFeedback</button></div> */}

                      <button className="s-12 submit-form button background-primary text-white ml-3" type="reset" onClick={(e) => {
                        setfeedback({});
                      }}>clear</button>
                    </div>
                  </form>

                </div>
              </div>
            </div>

          </div>
        </div>


      </main >
    </div>

  )
}
