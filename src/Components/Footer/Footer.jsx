import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
       
        <ul className="fList">
          <h3>About</h3>
          <li className="fListItem">overview </li>
          <li className="fListItem">the temple </li>
          <li className="fListItem">the temple story </li>
          <li className="fListItem">General</li>
          <li className="fListItem">Info</li>
          </ul>
        <ul className="fList">
          <h3> Online Booking</h3>
          <li className="fListItem">Darshanam Tickets </li>
          <li className="fListItem">Accomodation</li>
          <li className="fListItem">Donations</li>
        </ul>
        <ul className="fList">
          <h3>Media Room</h3>
          <li className="fListItem">overview</li>
          <li className="fListItem">gallery </li>
          <li className="fListItem">press </li>
        </ul>
        <ul className="fList">
          <h3>Support</h3>
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Partner Help</li>
          <li className="fListItem">Facilities</li>
          <li className="fListItem">Contact us</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2024 Trip2Medaram.</div>
    </div>
  );
};

export default Footer;
