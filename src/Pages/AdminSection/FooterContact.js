import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';


const FooterContact = () => {

    const [footeraddress, setAddressfooter] = useState([]);

    useEffect(() => {
        fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/footer-address`)
            .then((res) => res.json())
            .then((info) => setAddressfooter(info));
    }, []);


    const handlefooterAddress = (event) => {
        event.preventDefault();

        const phoneNumber = event.target.phoneNumber.value;
        const emailAddress = event.target.emailAddress.value;
        const location = event.target.location.value;





        const contactSection = {

            phoneNumber,
            emailAddress,
            location,





        };

        const url = `https://interiordesignseoclone-610277fa395f.herokuapp.com/add-footer-address`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(contactSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Footer Address is Updated');
            });
    };



    return (
      <>
      <HeaderBottom></HeaderBottom>
        <div className='container  d-flex mt-5 mb-5'>
            <section id="services" class="services-area pt-120 pb-90 fix" >



                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">


                            <h2 className='mb-5'> Update Office Address </h2>

                            {
                                footeraddress.length === 1 &&
                                <>
                                    {
                                        footeraddress.map(c =>
                                            footeraddress.map(c =>
                                                <Link className='thm-btn' to={`/edit-address-footer/${c._id}`}> Edit Address</Link>)


                                        )
                                    }
                                </>
                            }
                            {
                                footeraddress.length === 0 &&

                                <form class="contact-form " onSubmit={handlefooterAddress}>
                                    <div class="row">




                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-name mb-20">

                                                <input type="text" className="form-control" name="phoneNumber" placeholder=" Enter Your Phone Number" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-name mb-20">

                                                <input type="text" className="form-control" name="emailAddress" placeholder="Enter Your Email" required />
                                            </div>
                                        </div>


                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" className="form-control" name="location" placeholder="Enter Your Location" required />
                                            </div>
                                        </div>


                                        <div class="slider-btn">
                                            <button className="thm-btn" data-delay=".8s"> Add Office Address</button>
                                        </div>
                                    </div>

                                </form>

                            }

                        </div>


                    </div>
                </div>


            </section>
        </div>
      
      </>
    );
};

export default FooterContact;