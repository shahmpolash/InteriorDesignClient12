import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const Counter = () => {

    const [countersec, setCounter] = useState([]);

    useEffect(() => {
        fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/counters`)
            .then((res) => res.json())
            .then((info) => setCounter(info));
    }, []);


    const handleCounterSection = (event) => {
        event.preventDefault();
        const happyClientsNumber = event.target.happyClientsNumber.value;
        const happyClientsText = event.target.happyClientsText.value;
        const projectCompleteNumber = event.target.projectCompleteNumber.value;
        const projectCompleteText = event.target.projectCompleteText.value;
        const yearofExperienceNumber = event.target.yearofExperienceNumber.value;
        const yearofExperienceText = event.target.yearofExperienceText.value;
        const counterSectionImg = event.target.counterSectionImg.value;
        const counterSectionImgTwo = event.target.counterSectionImgTwo.value;
        const counterSectionText = event.target.counterSectionText.value;
        const counterSectionHeading = event.target.counterSectionHeading.value;
        const counterSectionDec = event.target.counterSectionDec.value;
      


        const counterSection = {
            happyClientsNumber,
            happyClientsText,
            projectCompleteNumber,
            projectCompleteText,
            yearofExperienceNumber,
            yearofExperienceText,
            counterSectionImg,
            counterSectionImgTwo,
            counterSectionText,
            counterSectionHeading,
            counterSectionDec,
           

        };

        const url = `https://interiordesignseoclone-610277fa395f.herokuapp.com/add-counter`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(counterSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Exprence Section is Updated');
            });
    };



    return (
        <>
        <HeaderBottom></HeaderBottom>
        <div>
            <section id="services" class="services-area pt-120 pb-90 fix mb-5" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2 className='mb-5'>Update Counter</h2>

                            {
                                countersec.length === 1 &&
                                <>
                                    {
                                        countersec.map(c =>
                                            countersec.map(c=>
                                                <Link className='thm-btn' to={`/counters/${c._id}`}> Update Counter</Link>)
                                        )
                                    }
                                </>
                            }
                            {
                                countersec.length === 0 &&

                                <form class="contact-form " onSubmit={handleCounterSection}>
                                    <div class="row">
                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" className="form-control mb-3"  name="happyClientsNumber" placeholder="Happy Clients Number" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-email mb-20">
                                                <input type="text"  className="form-control mb-3" name="happyClientsText" placeholder="happy Clients Text" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-subject mb-20">
                                                <input type="text" className="form-control mb-3" name="projectCompleteNumber" placeholder="Project Complete Number" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-subject mb-20">
                                                <input type="text" className="form-control mb-3" name="projectCompleteText" placeholder="Project Complete Text" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-subject mb-20">
                                                <input type="text" className="form-control mb-3"  name="yearofExperienceNumber" placeholder="Year of Experience Number" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-subject mb-20">
                                                <input type="text" className="form-control mb-3" name="yearofExperienceText" placeholder="Year of Experience Text" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-subject mb-20">
                                                <input type="text" className="form-control mb-3" name="counterSectionImg" placeholder="Counter Section Image" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-subject mb-20">
                                                <input type="text" className="form-control mb-3" name="counterSectionImgTwo" placeholder="Counter Section Image Two" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-subject mb-20">
                                                <input type="text" className="form-control mb-3" name="counterSectionText" placeholder="Counter Section Text" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-subject mb-20">
                                                <input type="text" className="form-control mb-3" name="counterSectionHeading" placeholder="counter Section Heading" required />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-subject mb-20">
                                                <input type="text" className="form-control mb-3" name="counterSectionDec" placeholder="Counter Section Details" required />
                                            </div>
                                        </div>
                                        
                                        
                                        

                                        <div class="slider-btn">
                                            <button className="thm-btn" data-animation="fadeInRight" data-delay=".8s">Update Counter</button>
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

export default Counter;