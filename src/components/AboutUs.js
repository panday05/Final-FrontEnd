import React from 'react';
import './AboutUs.css';

export default function AboutUs() {

	return (
		<>
		<div class="container-fluid py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <img class="img-fluid rounded mb-5 mb-lg-0" src="555-610.png" alt="no pic"/>
                </div>
                <div class="col-lg-7">
                    <p class="section-title pr-5"><span class="pr-2">Learn About Us</span></p>
                    <h1 class="mb-4">Best Home Services For You</h1>
                    <p><b>WorkersForYou</b> offers you in house dedicated workers to suit both Commercial & Residential needs. A full description of our services is offered below.
						 We offer weekly, monthly, hourly home worker service intervals with long-term contracts.</p>
                    <div class="row pt-2 pb-4">
                        <div class="col-6 col-md-4">
                            <img class="img-fluid rounded" src="images (1).jpg" alt=""/>
                        </div>
                        <div class="col-6 col-md-8">
                            <ul class="list-inline m-0">
                                <li class="py-2 border-top border-bottom"><i class="fa fa-check text-primary mr-3"></i>Easy to access</li>
                                <li class="py-2 border-bottom"><i class="fa fa-check text-primary mr-3"></i>Multiple services at one place</li>
                                <li class="py-2 border-bottom"><i class="fa fa-check text-primary mr-3"></i>Verified Workers</li>
                            </ul>
                        </div>
                    </div>
                    <a href="" class="btn btn-primary mt-2 py-2 px-4">Learn More</a>
                </div>
            </div>
        </div>
    </div>
			
			
		</>
	)
}
