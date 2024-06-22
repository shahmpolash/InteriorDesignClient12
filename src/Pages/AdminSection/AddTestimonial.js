import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TestimonialSection from './../../components/HomePage/TestimonialSection';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const AddTestimonial = () => {


    const [testimonialtext, setTestimonialText] = useState([]);

    const [testimonials, settestimonials] = useState([]);


    useEffect(() => {
        fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/testimonialtext`)
            .then((res) => res.json())
            .then((info) => setTestimonialText(info));
    }, []);

    useEffect(() => {
        fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/testimonials`)
            .then((res) => res.json())
            .then((info) => settestimonials(info));
    }, []);

    const handleTestimonialSection = (event) => {
        event.preventDefault();
        const testimonialText = event.target.testimonialText.value;
        const testimonialHeading = event.target.testimonialHeading.value;
        

        const testimonialSection = {
            testimonialText,
            testimonialHeading,
            

        };

        const url = `https://interiordesignseoclone-610277fa395f.herokuapp.com/add-testimonial-text`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(testimonialSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Service is Updated');
            });
    };





    const handleStepSection = (event) => {
        event.preventDefault();
        const image = event.target.image.value;
        const personName = event.target.personName.value;
        const personTitle = event.target.personTitle.value;
        const desc = event.target.desc.value;
        


        const stepSection = {
            image,
            personName,
            personTitle,
            desc,

        };

        const url = `https://interiordesignseoclone-610277fa395f.herokuapp.com/add-testimonial`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(stepSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Step Section is Updated');
            });
    };



    return (
        <>
        <HeaderBottom></HeaderBottom>
        <section id="services" class="services-area pt-120 pb-90 fix ">
        <div className='mt-5'>
            <div class="container">
                <div class="row">

                </div>
                <div class="row">

                    <div class="col-lg-8 col-md-12">

                        <h3 className='mb-5'> Update Testimonial Text </h3>
                        {
                            testimonialtext.length === 1 &&
                            <>
                                {testimonialtext.map(text =>
                                    <Link className='thm-btn' to={`/testimonialtext-edit/${text._id}`}> Update Now</Link>
                                )}
                            </>
                        }

                        {testimonialtext.length === 0 &&
                            <form class="contact-form " onSubmit={handleTestimonialSection}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" className="form-control mb-3" id="firstn" name="testimonialText" placeholder=" Testimonial Text" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-name mb-20">
                                            <input type="text" className="form-control mb-3" id="firstn" name="testimonialHeading" placeholder="Testimonial Heading" required />
                                        </div>
                                    </div>

                                    


                                    <div class="slider-btn">
                                        <button className="thm-btn" data-animation="fadeInRight" data-delay=".8s"> Update Testimonial Text </button>
                                    </div>
                                </div>

                            </form>
                        }





                        <h3 className='mb-5 mt-5 text-align '> Add Testimonial Item </h3>

                        <form class="contact-form " onSubmit={handleStepSection}>
                            <div class="row">
                                <div class="col-lg-12 " >
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input className="form-control mb-3" name="image" placeholder="Person Image URL" required />
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input  className="form-control mb-3" name="personName" placeholder="Person Name" required />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input className="form-control mb-3" name="personTitle" placeholder="Person Title" required />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="contact-field p-relative c-name mb-20">
                                        <input  className="form-control mb-3" name="desc" placeholder="Details" required />
                                    </div>
                                </div>

                                <div class="slider-btn">
                                    <button className="thm-btn" data-delay=".8s"> Add Testimonial</button>
                                </div>
                            </div>

                        </form>

                    </div>


                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title center-align text-center mb-50">
                            
                            
                        </div>
                    </div>
                </div>
                <div className="row col-lg-6 d-flex  ">
                {
          testimonials.map(t => <div className="testimonial_carousel mb-5 ">
            <div className="common_carousel_2col d-flex" >
              <div className="carousel_item d-flex ">
                <div className="testimonial_item ">
                  <div className="testimonial_image">
                    
                  </div>
                  <div className="testimonial_content card p-5">
                    
                    
                    <h5><Link to={`/edit-testimonial/${t._id}`} className='thm-btn mb-3'>Edit Now</Link></h5>
                    <p>
                      {t.desc}
                    </p>

                    <h5 className="testimonial_name">{t.personTitle}</h5>
                    <span className="quote_icon">
                      <i className="fas fa-quote-right" />
                    </span>
                  </div>
                </div>
              </div>



            </div>
            
          </div>)
        }
                </div>

            </div>


           




        </div>
    </section></>
        
    );
};

export default AddTestimonial;