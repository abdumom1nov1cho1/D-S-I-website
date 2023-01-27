import React from "react";
import "../Components/Footer.css";
import icon1 from "../Icons/finIcon.svg"

const Footer = ({ icon }) => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="foot">
            <div className="left">
              <img src={icon} alt="" />
              <h4>PT Dwidasa Samsara Indonesia</h4>
              <p>
                Ruko Jalur Sutera 29A No. 53 <br />
                Alam Sutera Serpong, Tangerang 15323
              </p>
            </div>
            <div className="center">
              <h5>Contact</h5>
              <p>
                Phone : +62.21.5314.1135 <br /> Fax : +62.21.5314.1135 <br />{" "}
                Email : community@dwidasa.com
              </p>
            </div>
            
            <div className="right">
              <img src={icon1} alt="" />
            </div>
          </div>
        </div>
        <div className="footEnd">
          <h1>Copyright © 2015 - Dwidasa Samsara Indonesia</h1>
        </div>
      </footer>
      
    </div>
  );
};

export default Footer;
