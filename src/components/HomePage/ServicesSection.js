import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {


  const [items, setItems] = useState([]);
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/service-items`)
      .then((res) => res.json())
      .then((info) => setItems(info));
  }, []);


  useEffect(() => {
    fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/service`)
      .then((res) => res.json())
      .then((info) => setService(info));
  }, []);


  return (

    <>

<section className="service-three" id="services-sec">
  <div className="section__bubble-1" />{/* /.section__bubble-1 */}
  <div className="section__bubble-2" />{/* /.section__bubble-2 */}
  <div className="section__bubble-3" />{/* /.section__bubble-3 */}
  <div className="section__bubble-4" />{/* /.section__bubble-4 */}
  <div className="section__bubble-5" />{/* /.section__bubble-5 */}
  <div className="section__bubble-6" />{/* /.section__bubble-6 */}
  <div className="section__bubble-7" />{/* /.section__bubble-7 */}
  <div className="section__bubble-8" />{/* /.section__bubble-8 */}
  <div className="container">
    {
      service.map(t=> <div className="block-title text-center">
      <p><span>{t.serviceHeading}</span></p>
      <h3>{t.servicesubHeading}</h3>
    </div>)
    }
    
    <div className="row high-gutters">
      {
        items.map(s=><div className="col-lg-4">
        <div className="service-three__single wow flipInY" data-wow-delay="0ms" data-wow-duration="1500ms">
          <div className="service-three__icon">
            <div className="service-three__single-circle" />
            <img src={s.serviceIcon} alt />
          </div>
          <h3><a href="/">{s.serviceTitle}</a></h3>
          <p>{s.serviceDetails}</p>
          
        </div>
      </div> )
      }
      
     
      
    </div>
  </div>
</section>





    </>


  );
};

export default ServicesSection;
