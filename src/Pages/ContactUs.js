import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBottom from '../components/HomePage/HeaderBottom';


const ContactUs = () => {

  const navigate = useNavigate();
  const [footerAddress, setFooterAddress] = useState([]);

  useEffect(() => {
    fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/footer-address`)
      .then((res) => res.json())
      .then((info) => setFooterAddress(info));
  }, [footerAddress]);





  const handleMessage = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    const messageStatus = event.target.messageStatus.value;


    const addItem = {
      name,
      email,
      subject,
      message,
      messageStatus,

    };

    const url = `https://interiordesignseoclone-610277fa395f.herokuapp.com/add-message`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addItem),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Message is Send. Thanks');
      });
  };

  const [action, setAction] = useState([]);

  useEffect(() => {
    fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/actions`)
      .then((res) => res.json())
      .then((info) => setAction(info));
  }, []);



  return (



    <>

      <section className="contact-one" id='contact-sec'>
        <div className="container wow fadeInUp" data-wow-duration="1500ms">
          <div className="inner-container">
            <img src="https://i.ibb.co/d40G9rx/contact-1-moc-1.png" className="contact-one__shape-2" alt />
            <img src="https://i.ibb.co/wgnm1DQ/contact-1-moc-2.png
https://i.ibb.co/d40G9rx/contact-1-moc-1.png" className="contact-one__shape-3" alt />
            <div className="block-title text-center">
              <p><span>Analysis</span></p>
              <h3>Get Free SEO Analysis?</h3>
            </div>{/* /.block-title text-center */}
            <form onSubmit={handleMessage} action="assets/inc/sendemail.php" className="contact-one__form">
              <div className="row">
                <div className="col-md-6">
                  <input type="text" name="name" placeholder="Your Name*" />
                </div>{/* /.col-md-6 */}
                <div className="col-md-6">
                  <input type="text" name="email" placeholder="Email*" />
                </div>{/* /.col-md-6 */}
                <div className="col-md-12">
                  <input type="text" name="subject" placeholder="Subject*" />
                </div>{/* /.col-md-6 */}
                <div className="col-md-6">
                  <input id="input_phone" type="tel" name="messageStatus" value="UnRead" hidden placeholder="value" />
                </div>{/* /.col-md-6 */}

                <div className="col-md-12">
                  <input type="text" name="message" placeholder="Message" />
                </div>{/* /.col-md-6 */}
                <div className="col-md-12 text-center">
                  <button type="submit" className="thm-btn contact-one__btn">Send Now</button>
                </div>{/* /.col-md-12 */}
              </div>{/* /.row */}
            </form>{/* /.contact-one__form */}
          </div>{/* /.inner-container */}
        </div>{/* /.container */}
      </section>{/* /.contact-one */}


    </>
  );
};

export default ContactUs;