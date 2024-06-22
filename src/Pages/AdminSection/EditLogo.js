import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const EditLogo = () => {


    const [editlogo, setLogo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/logo/${id}`)
            .then((res) => res.json())
            .then((info) => setLogo(info));
    }, []);



    const handleLogo = (event) => {
        event.preventDefault();
        const logo = event.target.logo.value;



        const logoSection = {
            logo,


        };

        const url = `https://interiordesignseoclone-610277fa395f.herokuapp.com/logo/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(logoSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Logo is Updated');
            });
    };



    return (
        <>
        <HeaderBottom></HeaderBottom>
            <section id="services" class="services-area pt-120 pb-90 fix mb-5 mt-5" >
                <div class="container">
                    <div class="row">

                    </div>
                    <div class="row">

                        <div class="col-lg-8 col-md-12">
                            <h2 className='mb-5'> Update Your Logo</h2>

                            

                                <form class="contact-form " onSubmit={handleLogo}>
                                    <div class="row">

                                    <div className="col-lg-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="logo" defaultValue={editlogo.logo} placeholder="Submit Logo" required />
                                            </div>
                                        </div>

                                        <div class="slider-btn">
                                            <button className="thm-btn" data-animation="fadeInRight" data-delay=".8s"> Update Your Logo</button>
                                        </div>
                                    </div>

                                </form>
                            

                        </div>


                    </div>
                </div>
            </section>



        </>
    );
};

export default EditLogo;