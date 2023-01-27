import React from "react";
import "../Components/Header.css";

const Header = ({ img }) => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="head">
            <div className="left">
              <h1 className="left__h1">
                Making the most of the <br /> ever-growing <br />{" "}
                <span>Information Technology</span>
              </h1>
              <p className="left__p">
                Managed by a team of professional experts with extensive <br />
                experience and impressive track records
              </p>
              <button className="btn">Read More</button>
            </div>
            <div className="right">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
