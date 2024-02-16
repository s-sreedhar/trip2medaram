import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <Link to="/" className="logo-new">
            <img src={require('../../assets/logo.png')} alt="" style={{
              width: '60px'
            }} />

          </Link>&nbsp;
          <h3 >
             Trip2Medaram
          </h3>
        </span>


      </div>
    </div>
  );
};

export default Navbar;
