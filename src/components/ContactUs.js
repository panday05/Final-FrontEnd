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

    <main role="main">
      <header className="section background-dark">
        <div className="line">
          <h1 className="text-white margin-top-bottom-40 text-size-60 text-line-height-1">Contact Us</h1>

        </div>
      </header>
      <div className="section background-white">
        <div className="line margin-bottom-60">
          <div className="margin">
            <div className="s-12 m-12 l-4 margin-m-bottom">

            </div>
            <div className="s-12 m-12 l-4 margin-m-bottom">
              <div className="padding-2x block-bordered border-radius">
                <div className="float-left hide-s">
                  <i className="icon-sli-envelope icon3x text-primary"></i>
                </div>
                <div className="margin-left-70 margin-s-left-0 margin-bottom">
                  <h3 className="margin-bottom-0">E-mail</h3>
                  <p>samraddhi30oct@gmail.com<br></br>
                    pandeySurbhi@gmail.com<br></br>
                    vineet121@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="s-12 m-12 l-4 margin-m-bottom">
              <div className="padding-2x block-bordered border-radius">
                <div className="float-left hide-s">
                  <i className="icon-sli-phone icon3x text-primary"></i>
                </div>
                <div className="margin-left-70 margin-s-left-0">
                  <h3 className="margin-bottom-0">Phone Numbers</h3>
                  <p><span className="text-primary">9770325453</span><br></br>
                    Office: 704930113<br></br>
                    Office 2: 0798 6546 465 15
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                {/* <div className="s-12"> 
                  <input name="subject" className="subject" placeholder="Subject" title="Subject" type="text" />
                  <p className="subject-error form-error">Please enter the subject.</p>
                </div> */}
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
      
    
  </main >
  
  )
}
