"use client";

import React, { useEffect } from "react";
import Hero from "../../components/Hero";
import LatestRelease from "../../components/music/LatestRelease";
import "./page.css";

function Home() {
  useEffect(() => {
    document.title = "Home | Music Artist";
  }, []);

  return (
    <div className="home">
      <Hero />
      <LatestRelease />
    </div>
  );
}

export default Home;
