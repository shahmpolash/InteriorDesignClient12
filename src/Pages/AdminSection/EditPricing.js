import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TestimonialSection from './../../components/HomePage/TestimonialSection';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditPricing = () => {

    


    const [pricingone, setPricingOne] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/pricing/${id}`)
            .then((res) => res.json())
            .then((info) => setPricingOne(info));
    }, []);



    const handlePackegeOne = (event) => {
        event.preventDefault();
        const packageName = event.target.packageName.value;
       
        const packagePrice = event.target.packagePrice.value;
        const packageButtonText = event.target.packageButtonText.value;
        const packagePointOne = event.target.packagePointOne.value;
        const packagePointTwo = event.target.packagePointTwo.value;
        const packagePointThree = event.target.packagePointThree.value;
        const packagePointFour = event.target.packagePointFour.value;
        const packagePointFive = event.target.packagePointFive.value;
        const packagePointSix = event.target.packagePointSix.value;
        const packagePointSeven = event.target.packagePointSeven.value;
        const packagePointEight = event.target.packagePointEight.value;
        const packagePointNine = event.target.packagePointNine.value;
        const packagePointTen = event.target.packagePointTen.value;


        const PackageSection = {
            packageName,
            
            packagePrice,
            packageButtonText,
            packagePointOne,
            packagePointTwo,
            packagePointThree,
            packagePointFour,
            packagePointFive,
            packagePointSix,
            packagePointSeven,
            packagePointEight,
            packagePointNine,
            packagePointTen,

        };

        const url = `https://interiordesignseoclone-610277fa395f.herokuapp.com/pricing/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(PackageSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert(' Pricing One Is Updated');
            });
    };








    return (
        <>
        <HeaderBottom></HeaderBottom>
        <section id="services" class="services-area pt-120 pb-90 fix mb-5">
            <div className='mt-5'>
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">

                            <h2 className='mb-5'> Update Pricing Plan </h2>

                            <form class="contact-form " onSubmit={handlePackegeOne}>
                                    <div class="row">
                                        
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="packageName" defaultValue={pricingone.packageName} placeholder="Package Name" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="packagePrice" defaultValue={pricingone.packagePrice} placeholder="Package Price" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="packageButtonText" defaultValue={pricingone.packageButtonText} placeholder="Package Button Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="packagePointOne" defaultValue={pricingone.packagePointOne} placeholder="Package Point One" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="packagePointTwo" defaultValue={pricingone.packagePointTwo} placeholder="Package Point Two" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="packagePointThree" defaultValue={pricingone.packagePointThree} placeholder="Package Point Three" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="packagePointFour" defaultValue={pricingone.packagePointFour} placeholder="Package Point Four" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="packagePointFive" defaultValue={pricingone.packagePointFive} placeholder="Package PointFive" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="packagePointSix" defaultValue={pricingone.packagePointSix} placeholder="Package Point Six" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="packagePointSeven" defaultValue={pricingone.packagePointSeven} placeholder="Package Point Seven" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="packagePointEight" defaultValue={pricingone.packagePointEight} placeholder="Package Point Eight" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="packagePointNine" defaultValue={pricingone.packagePointNine} placeholder="Package Point Nine" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="packagePointTen" defaultValue={pricingone.packagePointTen} placeholder="Package Point Ten" required />
                                            </div>
                                        </div>
                                        
                                 
                                        <div class="slider-btn">
                                            <button className="thm-btn" data-delay=".8s"> Update Plan</button>
                                        </div>
                                    </div>

                                </form>

                            



                        </div>


                    </div>
                </div>





            </div>
        </section>
        </>
    );
};

export default EditPricing;