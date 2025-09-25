// src/components/Hero.jsx
"use client";

import React from "react";
import Link from "next/link";
import "./Hero.css";

function Hero() {
  {
    /* const navigate = useNavigate(); */
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Music Artist</h1>
        <p>Musician • Producer • Creator</p>
        <div className="hero-buttons">
          <button onClick={() => navigate("/discography")} className="btn">
            Explore Music
          </button>
          <button
            onClick={() => navigate("/gallery")}
            className="btn btn-outline"
          >
            View Gallery
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
