import React from "react";
import "./Footer.css";
import Subscribe from "./Subscribe";
import Links from "./Links";

const Footer = () => {
  const footerLinks = {
    spotify: "https://open.spotify.com/artist/xyz",
    itunes: "https://music.apple.com/artist/xyz",
    youtube: "https://youtube.com/channel/xyz",
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
