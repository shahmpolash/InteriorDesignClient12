import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const UpdateCounter = () => {

    const [countersec, setCounter] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/counters/${id}`)
            .then((res) => res.json())
            .then((info) => setCounter(info));
    }, [countersec]);


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

        const url = `https://interiordesignseoclone-610277fa395f.herokuapp.com/update-counters/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(counterSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Counters is Updated');
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
                                <h2 className='mb-5'> Update Counter</h2>

                                <form class="contact-form " onSubmit={handleCounterSection}>
                                    <div class="row">

                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="happyClientsNumber" defaultValue={countersec.happyClientsNumber} placeholder="Happy Clients Number" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="happyClientsText" defaultValue={countersec.happyClientsText} placeholder="Happy Clients Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="projectCompleteNumber" defaultValue={countersec.projectCompleteNumber} placeholder="Project Complete Number" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="projectCompleteText" defaultValue={countersec.projectCompleteText} placeholder="Project Complete Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="yearofExperienceNumber" defaultValue={countersec.yearofExperienceNumber} placeholder="Year of Experience Number" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="yearofExperienceText" defaultValue={countersec.yearofExperienceText} placeholder="Year of Experience Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="counterSectionImg" defaultValue={countersec.counterSectionImg} placeholder="Counter Section Image" required />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="counterSectionImgTwo" defaultValue={countersec.counterSectionImgTwo} placeholder="Counter Section Image Two" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="counterSectionText" defaultValue={countersec.counterSectionText} placeholder="Counter Section Text" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="counterSectionHeading" defaultValue={countersec.counterSectionHeading} placeholder="Counter Section Heading" required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="counterSectionDec" defaultValue={countersec.counterSectionDec} placeholder="Counter Section details" required />
                                            </div>
                                        </div>
                                        

                                        <div class="slider-btn">
                                            <button className="thm-btn" data-animation="fadeInRight" data-delay=".8s">Update Counter</button>
                                        </div>
                                    </div>

                                </form>

                            </div>


                        </div>
                    </div>
                </section>
            </div>
        </>

    );
};

export default UpdateCounter;