import React, { useEffect, useState } from "react";

const TestimonialSection = () => {
  const [testimonial, setTestimonial] = useState([]);

  const [testimonialtext, setTestimonialText] = useState([]);

  useEffect(() => {
    fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/testimonialtext`)
      .then((res) => res.json())
      .then((info) => setTestimonialText(info));
  }, []);

  useEffect(() => {
    fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/testimonials`)
      .then((res) => res.json())
      .then((info) => setTestimonial(info));
  }, []);


  const divStyle = {
    backgroundImage: "url(img/testimonial/test-bg-aliments.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#fff7f5",
  };

  return (

    <>

<div className="testimonial__area section-padding">
  <img className="testimonial__area-shape dark-n" src="assets/img/shape/testimonial.png" alt />
  <img className="testimonial__area-shape light-n" src="assets/img/shape/testimonial-dark.png" alt />
  <div className="container">
    <div className="row mb-70 align-items-end">
      <div className="col-xl-8 col-lg-8 lg-mb-30">
        {
          testimonialtext.map(a=>  <div className="testimonial__area-title lg-t-center">
          <span className="subtitle-one">{a.testimonialText}</span>
          <h2>{a.testimonialHeading}</h2>						
        </div>)
        }
       
      </div>
      <div className="col-xl-4 col-lg-4">
        <div className="testimonial__area-button t-right lg-t-center">
          
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-12">
        <div className="swiper testimonial__area-slider">
          <div className=" ">
            {
              testimonial.map(e=> <div className="testimonial__area-item swiper-slide">
              <div className="testimonial__area-item-client">
                <div className="testimonial__area-item-icon">
                  <i className="fal fa-quote-right" />
                </div>
                <div className="testimonial__area-item-client-image">
                  <img src={e.image} alt />
                </div>
                <div className="testimonial__area-item-client-title">
                  <h5>{e.personName}</h5>
                  <span className="text-eight">{e.personTitle}</span>
                </div>
              </div>
              <p>{e.desc}</p>
              <div className="testimonial__area-item-reviews">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>)
            }
            
          </div>
        </div>					
      </div>
    </div>
  </div>
</div>






    </>



  );
};

export default TestimonialSection;
