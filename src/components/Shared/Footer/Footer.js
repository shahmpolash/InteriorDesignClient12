import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Footer = () => {



  const [footerSocial, setFooterSocial] = useState([]);
  const [footerCopyright, setFooterCopyright] = useState([]);

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);




  const [footerAddress, setFooterAddress] = useState([]);


  useEffect(() => {
    fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);

  useEffect(() => {
    fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/footer-social`)
      .then((res) => res.json())
      .then((info) => setFooterSocial(info));
  }, []);

  useEffect(() => {
    fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/copyrights`)
      .then((res) => res.json())
      .then((info) => setFooterCopyright(info));
  }, [footerCopyright]);



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

        alert('Subscribers is Updated');
      });


  }





  return (




    <>
      <footer className="site-footer">
        <div className="particles-snow" id="footer-snow" />{/* /#footer-snow.particles-snow */}
        <img src="assets/images/shapes/footer-shape-1-1.png" className="site-footer__bg-shape-1" alt />
        <img src="assets/images/shapes/footer-shape-1-2.png" className="site-footer__bg-shape-2" alt />
        <img src="assets/images/shapes/footer-shape-1-3.png" className="site-footer__bg-shape-3" alt />
        <img src="assets/images/shapes/footer-shape-1-4.png" className="site-footer__bg-shape-4" alt />
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                {
                  footerSocial.map(s=>   <div className="footer-widget footer-widget__about">
                  <h3 className="footer-widget__title">About</h3>
                  <p>{s.aboutText}</p>
                  <div className="footer-widget__social">
                    <a href={s.fblink}><i className="fab fa-facebook-f" /></a>
                    <a href={s.inslink}><i className="fab fa-instagram" /></a>
                    <a href={s.youlink}><i className="fab fa-youtube" /></a>

                  </div>{/* /.footer-widget__social */}
                </div>)
                }
              
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget footer-widget__links__1">
                  <h3 className="footer-widget__title">Quick Links</h3>
                  <ul className="list-unstyled footer-widget__links-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about-sec">About</a></li>
                    <li><a href="#services-sec">Services</a></li>
                    <li><a href="#pricing-sec">Pricing</a></li>
                    <li><a href="#contact-sec">Contact</a></li>
                  </ul>{/* /.list-unstyled footer-widget__links-list */}
                </div>{/* /.footer-widget */}
              </div>{/* /.col-lg-3 col-md-6 col-sm-12 */}

              <div className="col-lg-4 col-md-6 col-sm-12">
                {
                  footerAddress.map(a => <div className="footer-widget footer-widget__contact">
                    <h3 className="footer-widget__title">Contact</h3>

                    <p>{a.location}</p>
                    <p><a href="/">{a.emailAddress}</a></p>
                    <p><a href="/">{a.phoneNumber}</a></p>
                  </div>)
                }

              </div>{/* /.col-lg-3 col-md-6 col-sm-12 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </div>{/* /.site-footer__upper */}
        <div className="site-footer__bottom">
          <div className="container">
            {
              footerCopyright.map(c => <p>{c.copyrightText}</p>)
            }



            <ul className="list-unstyled site-footer__bottom-menu">
              {
                logo.map(l => <a href="/"><img src={l.logo} alt /></a>)
              }

            </ul>{/* /.list-unstyled site-footer__bottom-menu */}
          </div>{/* /.container */}
        </div>{/* /.site-footer__bottom */}
      </footer>{/* /.site-footer */}


    </>
  );
};

export default Footer;
