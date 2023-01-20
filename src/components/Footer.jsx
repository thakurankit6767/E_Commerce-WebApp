import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="box-container">
      <div className="container-div">
        <div className="container-row">
          <div className="container-column">
            <h3>About Us</h3>
            <li href="#">Aim</li>
            <li href="#">Vision</li>
            <li href="#">Company</li>
          </div>
          <div className="container-column">
            <h3 className="container-heading">Services</h3>
            <li href="#">Mens</li>
            <li href="#">Womens</li>
            <li href="#">Kids</li>
            <li href="#">Blog</li>
          </div>
          <div className="container-heading">
            <h3>Contact Us</h3>
            <li href="#">Aasam</li>
            <li href="#">Delhi</li>
            <li href="#">Karnataka</li>
            <li href="#">Mumbai</li>
          </div>

//           <div className="container-heading">
//             <h3>Social Media</h3>
//             <li href="#">Facebook</li>
//             <li href="#">Instagram</li>
//             <li href="#">Twitter</li>
//             <li href="#">Youtube</li>
//           </div>
        </div>
      </div>
    </div>
  );
}
