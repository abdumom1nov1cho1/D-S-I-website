import React from "react";
import "../Components/Aside.css";
import img6 from "../Icons/icon4.svg";
import img7 from "../Icons/icon5.svg";
import img8 from "../Icons/icon6.svg";

const Aside = () => {
  return (
    <div>
      <aside>
        <div className="container">
        <h1>Product and Service</h1>
          <div className="aside">
            <div className="cards">
              <div className="carddd">
                <img src={img6} alt="" />
                <h2 className="card__h1">Our Product</h2>
                <p className="card__p">
                  Our product is made on the base of our <br /> team’s careful research
                  and analyses, <br /> ranging from internet based <br /> application.
                </p>
                <button className="btn">Read More</button>
              </div>
              <div className="carddd">
                <img src={img7} alt="" />
                <h2 className="card__h1">Our Service</h2>
                <p className="card__p">
                  Our product is made on the base of our <br /> team’s careful research
                  and analyses, <br /> ranging from internet based <br /> application.
                </p>
                <button className="btn">Read More</button>
              </div>
              <div className="carddd">
                <img src={img8} alt="" />
                <h2 className="card__h1">Our Technology</h2>
                <p className="card__p">
                  Our product is made on the base of our <br /> team’s careful research
                  and analyses, <br /> ranging from internet based <br /> application.
                </p>
                <button className="btn">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
