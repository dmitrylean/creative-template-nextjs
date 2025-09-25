import React from "react";
import "./Footer.css";
import Subscribe from "./Subscribe";
import Links from "./Links";

const Footer = () => {
  const footerLinks = {
    spotify: "#",
    itunes: "#",
    youtube: "#",
  };

  return (
    <footer className="footer">
      <div className="container">
        <Subscribe />
        <Links links={footerLinks} />
        <p>Copyright ©2020 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
