import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PricingSection.css';


const PricingSection = () => {

  const [pricing, setPricing] = useState([]);


  useEffect(() => {
    fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/pricings`)
      .then((res) => res.json())
      .then((info) => setPricing(info));
  }, []);

  return (

    <>

      <section className="pricing-one" id='pricing-sec'>
        <div className="container">
          <div className="block-title text-center">
            <p className="color-2"><span>Pricing Plan</span></p>
            <h3>No Any Hidden Charge Select <br /> <span>Your Pricing Plan</span></h3>
          </div>
          <div className="row high-gutters">

          {
              pricing.map(b => b.packageName === 'Basic' &&  <div className="col-lg-4 wow fadeInLeft" data-wow-duration="1500ms">
              <div className="pricing-one__single">
                <div className="pricing-one__icon">
                  <img src="assets/images/shapes/pricing-icon-1-1.png" alt />
                </div>{/* /.pricing-one__icon */}
                <h3>{b.packageName} Plan</h3>
                <ul className="pricing-one__list list-unstyled">
                  <li>{b.packagePointOne}</li>
                  <li>{b.packagePointTwo}</li>
                  <li>{b.packagePointThree}</li>
                  <li>{b.packagePointFour}</li>
                  <li>{b.packagePointFive}</li>
                  <li>{b.packagePointSix}</li>
                  <li>{b.packagePointSeven}</li>
                
                
                </ul>
                <p>${b.packagePrice}</p>
               
                <Link to={`/order-now/${b._id}`} className="thm-btn pricing-one__btn">
                {b.packageButtonText} 
                  </Link>
              </div>
            </div> )}


            {
              pricing.map(s => s.packageName === 'Premium' &&  <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
              <div className="pricing-one__single">
                <div className="pricing-one__icon">
                  <img src="assets/images/shapes/pricing-icon-1-2.png" alt />
                </div>{/* /.pricing-one__icon */}
                <h3>{s.packageName} Plan</h3>
                <ul className="pricing-one__list list-unstyled">
                  <li>{s.packagePointOne}</li>
                  <li>{s.packagePointTwo}</li>
                  <li>{s.packagePointThree}</li>
                  <li>{s.packagePointFour}</li>
                  <li>{s.packagePointFive}</li>
                  <li>{s.packagePointSix}</li>
                  <li>{s.packagePointSeven}</li>
                 
                </ul>{/* /.pricing-one__list list-unstyled */}
                <p>${s.packagePrice}</p>
                
                <Link to={`/order-now/${s._id}`} className="thm-btn pricing-one__btn">
                    {s.packageButtonText} 
                   </Link>
              </div>{/* /.pricing-one__single */}
            </div>)}
           

            {
              pricing.map(p => p.packageName === 'Standard' && <div className="col-lg-4 wow fadeInRight" data-wow-duration="1500ms">
              <div className="pricing-one__single">
                <div className="pricing-one__icon">
                  <img src="assets/images/shapes/pricing-icon-1-3.png" alt />
                </div>{/* /.pricing-one__icon */}
                <h3>{p.packageName} Plan</h3>
                <ul className="pricing-one__list list-unstyled">
                  <li>{p.packagePointOne}</li>
                  <li>{p.packagePointTwo}</li>
                  <li>{p.packagePointThree}</li>
                  <li>{p.packagePointFour}</li>
                  <li>{p.packagePointFive}</li>
                  <li>{p.packagePointSix}</li>
                  <li>{p.packagePointSeven}</li>
                </ul>{/* /.pricing-one__list list-unstyled */}
                <p>${p.packagePrice}</p>
               
                <Link to={`/order-now/${p._id}`} className="thm-btn pricing-one__btn">
                     {p.packageButtonText} 
                    </Link>
              </div>{/* /.pricing-one__single */}
            </div> )}
           
            
          </div>
        </div>
      </section>

    </>
  );
};

export default PricingSection;