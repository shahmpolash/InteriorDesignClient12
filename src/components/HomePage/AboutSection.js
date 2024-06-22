import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AboutSection = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);





  return (



    <>

      {
        about.map(a => <section className="about-two" id="about-sec">
          <img src="assets/images/shapes/about-2-bg-1-1.png" className="about-two__bg-shape-1" alt />
          <div className="container">
            <img src="assets/images/shapes/about-2-bg-1-2.png" className="about-two__bg-shape-2" alt />
            <div className="row">
              <div className="col-lg-6">
                <div className="about-two__images wow fadeInLeft" data-wow-duration="1500ms">
                  <img src="https://i.ibb.co/m6JxsRp/about-2-moc-1.png" className="about-two__image-1 float-bob-y" alt />
                  <img src={a.aboutImgOne} className="about-two__image-2" alt />
                  <img src="https://i.ibb.co/cLjSyH9/about-2-moc-3.png" className="about-two__image-3 float-bob-y" alt />
                </div>{/* /.about-two__images */}
              </div>{/* /.col-lg-6 */}
              <div className="col-lg-6">
                <div className="about-two__content">
                  <div className="block-title text-left">
                    <p className="color-2"><span>{a.aboutText}</span></p>
                    <h3>{a.aboutHeading}</h3>
                  </div>{/* /.block-title text-left */}
                  <p>{a.aboutDetails}</p>
                  <div className="about-two__counter-wrap">
                    <div >

                      <a href="#contact-sec" className="thm-btn banner-one__btn">Contact Us</a>
                    </div>{/* /.about-two__counter */}


                  </div>{/* /.about-two__counter-wrap */}
                </div>{/* /.about-two__content */}
              </div>{/* /.col-lg-6 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>)
      }













    </>
  );
};

export default AboutSection;
