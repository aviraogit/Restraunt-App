import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="share">
          <a href="#" className="btn">
            Facebook
          </a>
          <a href="#" className="btn">
            twitter
          </a>
          <a href="#" className="btn">
            instagram
          </a>
          <a href="#" className="btn">
            linkedin
          </a>
          <a href="#" className="btn">
            Github
          </a>
        </div>

        <h1 className="credit">
          created by <span>Abhishek Nikumkar</span> | All rights reserved
        </h1>
      </section>
      <a href="#home" className="fas fa-angle-up" id="scroll-top"></a>


    </>
  );
};

export default Footer;
