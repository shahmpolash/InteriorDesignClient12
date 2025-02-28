import React, { useEffect, useState } from 'react';
import AdminMenu from '../../components/AdminMenu';
import { Link, useParams } from 'react-router-dom';
import HeaderBottom from '../../components/HomePage/HeaderBottom';

const ViewMessage = () => {

    const [message, setMessage] = useState([]);
    const {id} = useParams();


    useEffect(() => {
        fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/message/${id}`)
            .then((res) => res.json())
            .then((info) => setMessage(info));
    }, []);

    const handleMessage = (event) => {
        event.preventDefault();
    
        const messageStatus = event.target.messageStatus.value;

        const updateMessageStatus = {
 
            messageStatus,
        };

        const url = `https://interiordesignseoclone-610277fa395f.herokuapp.com/message/${message._id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateMessageStatus),
        })
            .then((res) => res.json())
            .then((result) => {

                alert('Message is Read');
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

                        <div>
                            <h2>Welcome to Admin Panel</h2>
                            <AdminMenu></AdminMenu>

                            <h4>Sender Name: {message.name} </h4>
                            <h4>Sender Email: {message.email} </h4>
                            <h4>Sender Phone: {message.number} </h4>
                            
                            <h4>Sender Subject: {message.subject} </h4>
                            <p>Message {message.message}</p>
                        </div>
                       


                    </div>
                    {
                        message.messageStatus === "UnRead" ?
                        <form onSubmit={handleMessage}>
                            <input type='text' hidden name='messageStatus' value='Read'></input>
                            <input className='thm-btn mt-5' type='submit' value='Mark Read'></input>

                        </form>
                        :
                        <></>
                    }
                </div>
                
            </section>



        </>
    );
};

export default ViewMessage;