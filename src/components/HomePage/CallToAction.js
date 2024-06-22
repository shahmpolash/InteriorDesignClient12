import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const CallToAction = () => {

  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/actions`)
      .then((res) => res.json())
      .then((info) => setAction(info));


  }, []);


  const handleSubscriber = (event) => {
    event.preventDefault();
    const subemail = event.target.subemail.value;




    const addItem = {
      subemail,



    };

    const url = `https://interiordesignseoclone-610277fa395f.herokuapp.com/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {
        Navigate('/all-subscriber');
        alert('Subscribers is Updated');
      });


  }





  

  return (
    
    <>

    {
      action.map(a=> <section className="cta-one cta-one__home-one">
      <div className="particles-snow" id="cta-one-snow" />{/* /#cta-one-snow.particles-snow */}
      <img src="assets/images/shapes/footer-shape-1-1.png" className="cta-one__bg-shape-1" alt />
      <img src="assets/images/shapes/footer-shape-1-2.png" className="cta-one__bg-shape-2" alt />
      <img src="assets/images/shapes/footer-shape-1-3.png" className="cta-one__bg-shape-3" alt />
      <img src="assets/images/shapes/footer-shape-1-4.png" className="cta-one__bg-shape-4" alt />
      <div className="container">
        <h3>{a.heading}</h3>
        <a href={a.subHeading} className="thm-btn cta-one__btn"><span>Join Us Now</span></a>{/* /.thm-btn cta-one__btn */}
      </div>{/* /.container */}
    </section>)
    }






   



    </>
  );
};

export default CallToAction;