import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBottom from './../../components/HomePage/HeaderBottom';

const FooterCopyright = () => {

    const [footercopyright, setFooterCopyright] = useState([]);

    useEffect(() => {
        fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/copyrights`)
            .then((res) => res.json())
            .then((info) => setFooterCopyright(info));
    }, []);


    const handleFooterCopyright = (event) => {
        event.preventDefault();
        const copyrightText = event.target.copyrightText.value;




        const FooterCopyrightSection = {
            copyrightText,



        };

        const url = `https://interiordesignseoclone-610277fa395f.herokuapp.com/add-footer-copyright`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(FooterCopyrightSection),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Footer Copy Right Updated');
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

                            {
                                footercopyright.length === 1 &&
                                <>
                                    {
                                        footercopyright.map(c =>
                                            footercopyright.map(c =>
                                                <Link className='thm-btn' to={`/edit-copyright/${c._id}`}> Please Edit About Footer</Link>)


                                        )
                                    }
                                </>
                            }
                            {
                                footercopyright.length === 0 &&




                                <form class="contact-form " onSubmit={handleFooterCopyright}>
                                    <div class="row">
                                        <div class="col-lg-12 mb-3">
                                            <div class="contact-field p-relative c-name mb-20">
                                                <input type="text" className="form-control" id="firstn" name="copyrightText" placeholder="Copyright Text" required />
                                            </div>
                                        </div>

                                        <div class="slider-btn">
                                            <button className="thm-btn" data-animation="fadeInRight" data-delay=".8s"> Update Footer Copyright</button>
                                        </div>
                                    </div>

                                </form>



                            }






                        </div>




                    </div>
                </div>
            </section>
        </>
    );
};

export default FooterCopyright;