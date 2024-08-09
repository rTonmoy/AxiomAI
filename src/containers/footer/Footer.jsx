import React from 'react';
// import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Ready to Step into the Future Ahead of the Rest?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Start Your AI Journey Today</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        {/* <img src={gpt3Logo} alt="gpt3_logo" /> */}
        <div className="gpt3__navbar-links_logo">
          <h2 className="logo">AxiomAI</h2>
        </div>
        <p>MD Anisur Rahman Tonmoy <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>B.C DAS Street</p>
        <p>045-657985</p>
        <p>info@mail.com</p>
      </div>
    </div>

    {/* <div className="gpt3__footer-copyright">
      <p>@2021 GPT-3. All rights reserved.</p>
    </div> */}
  </div>
);

export default Footer;
