"use client";

import React, { useEffect } from "react";
import YouTubeGrid from "../../components/music/YouTubeGrid";

function Beats() {
  useEffect(() => {
    document.title = "Video | Music Artist";
  }, []);

  return (
    <main className="container">
      <YouTubeGrid />
    </main>
  );
}

export default Beats;
