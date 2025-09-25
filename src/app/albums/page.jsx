// src/pages/Albums.jsx

"use client";

import React, { useEffect } from "react";
import albumsData from "../../lib/data/albums.json";
import AlbumCard from "../../components/music/AlbumCard";
import "./page.css";

function Albums() {
  useEffect(() => {
    document.title = "Albums | Music Artist";
  }, []);

  return (
    <main className="content">
      <div className="albums-section">
        <div className="container">
          <div className="albums-gallery">
            <div className="discography-grid">
              {albumsData.map((album, index) => (
                <AlbumCard key={index} album={album} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Albums;
