import React from "react";
import "../Components/Section.css";

const Section = ({img2}) => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="sect">
            <div className="left">
              <img src={img2} alt="" />
            </div>
            <div className="right">
              <h1 className="right__h1">
                Welcome to{" "}
                <span>
                  Dwidasa Samsara <br /> Indonesia (DSI)
                </span>
              </h1>
              <p className="right__p">
                Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 <br />
                by the founders, who each of them has a common end objective to <br />
                innovate new creations by making the most of the ever-growing <br />
                information technology through DSI’s distinct front-end based <br />
                application concept. Managed by a team of professional experts <br />
                with extensive experience and impressive track records, DSI <br />
                believes that continuous improvements and innovations assure <br />
                your business to run effectively and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
