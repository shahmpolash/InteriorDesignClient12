import React, { useEffect, useState } from 'react';

const CounterSection = () => {

  const [countersec, setCounter] = useState([]);

  useEffect(() => {
    fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/counters`)
      .then((res) => res.json())
      .then((info) => setCounter(info));
  }, []);

  return (


    <>

    {
      countersec.map(c=>      	<div className="experience__area dark__image section-padding">
      <img className="experience__area-shape dark-n" src="assets/img/shape/experience.png" alt />
      <img className="experience__area-shape light-n" src="assets/img/shape/experience-dark.png" alt />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 lg-mb-30">
            <div className="experience__area-image">
              <img className="experience__area-image-shape left-right-animate" src="assets/img/shape/dots.png" alt />
              <div className="experience__area-image-item">
                <img src={c.counterSectionImg} alt />
              </div>
              <div className="experience__area-image-item mt-65">
                <img src={c.counterSectionImgTwo} alt />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="experience__area-right">
              <div className="experience__area-right-title">
                <span className="subtitle-one">{c.counterSectionText}</span>
                <h2>{c.counterSectionHeading}</h2>		
                <p>{c.counterSectionDec}</p>				
              </div>
              <div className="experience__area-right-skill">
                <div className="experience__area-right-skill-item">
                  <div className="experience__area-right-skill-item-content">
                    <span className="text-two">{c.happyClientsText}</span> 
                    <span className="experience__area-right-skill-item-count text-two"><span className="counter">{c.happyClientsNumber}</span>+</span>
                  </div>
                  <div className="experience__area-right-skill-item-inner">
                    <div className="experience__area-right-skill-item-bar" data-width={80} />
                  </div>
                </div>
                <div className="experience__area-right-skill-item mt-20">
                  <div className="experience__area-right-skill-item-content">
                    <span className="text-two">{c.projectCompleteText}</span> 
                    <span className="experience__area-right-skill-item-count text-two"><span className="counter">{c.projectCompleteNumber}</span>+</span>
                  </div>
                  <div className="experience__area-right-skill-item-inner">
                    <div className="experience__area-right-skill-item-bar" data-width={90} />
                  </div>
                </div>
                <div className="experience__area-right-skill-item mt-20">
                  <div className="experience__area-right-skill-item-content">
                    <span className="text-two">{c.yearofExperienceText}</span> 
                    <span className="experience__area-right-skill-item-count text-two"><span className="counter">{c.yearofExperienceNumber}</span>+</span>
                  </div>
                  <div className="experience__area-right-skill-item-inner">
                    <div className="experience__area-right-skill-item-bar" data-width={90} />
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div> )
    }
 








    </>
  );
};

export default CounterSection;