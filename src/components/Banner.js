import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/banner`)
      .then((res) => res.json())
      .then((info) => setBanners(info));
  }, []);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subscriberEmail = event.target.subscriberEmail.value;

    const sunscribe = {
      subscriberEmail

    };

    const url = `https://interiordesignseoclone-610277fa395f.herokuapp.com/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sunscribe),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Thanks For Subscribe..');
      });
  };



  return (



    <>

    {
      banners.map(b=> <section className="banner-one">
      <div className="particles-snow" id="banner-one-snow" />{/* /#cta-one-snow.particles-snow */}
      <img src="assets/images/shapes/footer-shape-1-1.png" className="banner-one__bg-shape-1" alt />
      <img src="assets/images/shapes/footer-shape-1-2.png" className="banner-one__bg-shape-2" alt />
      <img src="assets/images/shapes/footer-shape-1-3.png" className="banner-one__bg-shape-3" alt />
      <img src="assets/images/shapes/footer-shape-1-4.png" className="banner-one__bg-shape-4" alt />
      <img src="assets/images/shapes/footer-shape-1-2.png" className="banner-one__bg-shape-5" alt />
      <div className="container">
        <div className="banner-one__image wow slideInUp" data-wow-duration="1500ms">
          <img src="https://i.ibb.co/phQV3Gj/banner-moc-1-1.png" className="banner-one__image-1 " alt />
          <img src={b.imageOne} className="banner-one__image-2 float-bob-y" alt />
          <img src="
https://i.ibb.co/1XGkpgK/banner-moc-1-3.png" className="banner-one__image-3 float-bob-x" alt />
          <img src="https://i.ibb.co/jHpSHXf/banner-moc-1-4.png" className="banner-one__image-4 " alt />
          <img src="https://i.ibb.co/nMShR0r/banner-moc-1-5.png" className="banner-one__image-5" alt />
        </div>{/* /.banner-one__image */}
        <div className="row">
          <div className="col-xl-7">
            <div className="banner-one__content">
              <h3>{b.bannerHeading}</h3>
              <p>{b.bannerText}</p>
              
              <a href={b.buttonURL} className="thm-btn banner-one__btn">{b.buttonText}</a>
            </div>{/* /.banner-one__content */}
          </div>{/* /.col-lg-7 */}
        </div>{/* /.row */}
      </div>{/* /.container */}
    </section>)
    }

      









    </>
  );
};

export default Banner;
