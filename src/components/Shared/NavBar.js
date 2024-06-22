import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";



const NavBar = () => {

  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  const [users, setUser] = useState([]);
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);


  useEffect(() => {
    fetch(`https://interiordesignseoclone-610277fa395f.herokuapp.com/users`)
      .then((res) => res.json())
      .then((info) => setUser(info));
  }, []);




  return (



    <>
 <nav className="main-nav-one stricky">
  <div className="container-fluid">
    <div className="inner-container">
      <div className="logo-box">
        {
          logo.map(l=> <a href="/">
          <img src={l.logo} alt />
        </a> )
        }
       
        <a href="#" className="side-menu__toggler"><i className="fa fa-bars" /></a>
      </div>{/* /.logo-box */}
      <div className="main-nav__main-navigation">
        <ul className="main-nav__navigation-box">
        
          <li><a href="/">Home</a></li>
          <li><a href="https://digitalwindflow.one/#about-sec">About</a></li>
          <li><a href="https://digitalwindflow.one/#services-sec">Services</a></li>
          <li><a href="https://digitalwindflow.one/#pricing-sec">Pricing</a></li>
          <li><a href="https://digitalwindflow.one/#contact-sec">Contact</a></li>
          
        </ul>{/* /.main-nav__navigation-box */}
      </div>{/* /.main-nav__main-navigation */}
      <div className="main-nav__right">
        
       
        
                {
                  user?.email ?

                    <Link to="/dashboard" className="thm-btn main-nav-one__btn m-2 "   >Dashboard</Link>

                    :

                    <Link to="/login" className="thm-btn main-nav-one__btn" >Log in</Link>

                }


                {
                  users.map(u => u.userEmail === user?.email && u.userRole === 'Admin' &&

                    <Link to="/admin" className="thm-btn main-nav-one__btn"  >Admin</Link>

                  )
                }

        {/* /.thm-btn main-nav-one__btn */}
      </div>{/* /.main-nav__right */}
    </div>{/* /.inner-container */}
  </div>{/* /.container-fluid */}
</nav>{/* /.main-nav-one */}

    </>

    
  );
};

export default NavBar;
