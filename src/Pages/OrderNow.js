import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderBottom from '../components/HomePage/HeaderBottom';

const OrderNow = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { id } = useParams();
    const [prices, setPrice] = useState([])
    useEffect(() => {
        fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/pricing/${id}`)
            .then((res) => res.json())
            .then((info) => setPrice(info));
    }, []);


    const handleNewOrder = (event) => {
        event.preventDefault();
        const packagePrice = event.target.packagePrice.value;
        const packageName = event.target.packageName.value;
        const customerEmail = event.target.customerEmail.value;
        const customerName = event.target.customerName.value;
        const customerAddress = event.target.customerAddress.value;
        const customerCountry = event.target.customerCountry.value;
        const paymentStatus = event.target.paymentStatus.value;
        const orderStatus = event.target.orderStatus.value;
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });


        const order = {
            packageName,
            packagePrice,
            customerEmail,
            customerName,
            customerAddress,
            customerCountry,
            paymentStatus,
            orderStatus,
            orderDate: formattedDate,

        };

        const url = `https://interiordesignseoclone-610277fa395f.herokuapp.com/new-order`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((result) => {
                navigate('/pending-order');
            });
    };


    return (
        <>
            <HeaderBottom></HeaderBottom>
            <section id="services" class="services-area pt-120 pb-90 fix mb-5 mt-5" >
                <div class="container">
                    <div class="row">
                    <h2>Buying Your SEO Plan</h2>

                    </div>
                    <div class="row">
                       


                        <form class="contact-form mt-5" onSubmit={handleNewOrder}>
                            <div class="row ">

                                <div class="">

                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="">
                                            <input type="text" className="form-control" name="packageName" value={prices.packageName} placeholder="Package Name" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="packagePrice" value={prices.packagePrice} required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input disabled type="email" value={user?.email} name="customerEmail" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" name="customerName" className="form-control" placeholder="Full Name" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" name="customerAddress" className="form-control" placeholder="Your Address" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 mb-3">
                                        <div className="form-group">
                                            <input type="text" name="customerCountry" className="form-control" placeholder="Your Country" required />
                                        </div>
                                    </div>

                                    <div class="col-lg-12 ">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input type="text" hidden id="text" value='UnPaid' name="paymentStatus" required />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="contact-field p-relative c-subject mb-20">
                                            <input type="text" hidden id="text" value='Pending' name="orderStatus" required />
                                        </div>
                                    </div>
                                    <div class="slider-btn">
                                        <button className="thm-btn" data-animation="fadeInRight" data-delay=".8s">Place Order Now</button>
                                    </div>

                                </div>







                            </div>

                        </form>



                    </div>
                </div>
            </section>
        </>
    );
};

export default OrderNow;