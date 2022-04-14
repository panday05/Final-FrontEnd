import React from 'react'
import './Testimonial.scss'
import $ from 'jquery'
export default function Testimonial() {

  $(document).on('ready' ,function(){
    $(".testimonial .indicators li").on('click',function(){
      var i = $(this).index();
      var targetElement = $(".testimonial .tabs li");
      targetElement.eq(i).addClass('active');
      targetElement.not(targetElement[i]).removeClass('active');
              });
              $(".testimonial .tabs li").on( 'click',function(){
                  var targetElement = $(".testimonial .tabs li");
                  targetElement.addClass('active');
                  targetElement.not($(this)).removeClass('active');
              });
          });
  $(document).on('ready',function(){
      $(".slider .swiper-pagination span").each(function(i){
          $(this).text(i+1).prepend("0");
      });
  });


  return (
    <div>

      <section class="testimonial">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-none d-lg-block">
              <ol class="carousel-indicators tabs">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">
                  <figure>
                    <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png" class="img-fluid" alt="" />
                    <figcaption><b>Samraddhi Khare</b></figcaption>
                  </figure>
                </li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1">
                  <figure>
                    <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png" class="img-fluid" alt="" />
                    <figcaption><b>Surbhi pandey</b></figcaption>
                  </figure>
                </li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2">
                  <figure>
                    <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png" class="img-fluid" alt="" />
                    <figcaption><b>Vineet Singh</b></figcaption>
                  </figure>
                </li>
              </ol>
            </div>
            <div class="col-lg-6 d-flex justify-content-center align-items-center">
              <div id="carouselExampleIndicators" data-interval="false" class="carousel slide" data-ride="carousel">
                <h3>WHAT OUR CLIENTS SAY</h3>
                <h1>TESTIMONIALS</h1>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="quote-wrapper">
                      <p>We have an expert team for house cleaning at an affordable rates. Because our company is more than a business. Each person brings something different to the team, 
                        but always following a core of values ​​that we all share</p>
                      
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="quote-wrapper">
                      <p></p>
                      
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="quote-wrapper">
                      <p>I have tried a lot of food delivery services but Plate is something out of this world! Their food is really healthy and it tastes great, which is why I recommend this company to all my friends!</p>
                     
                    </div>
                  </div>
                </div>
                <ol class="carousel-indicators indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
