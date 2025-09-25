// src/components/LatestRelease.jsx
import "./LatestRelease.css";
import Links from "../../components/Links";

function LatestRelease() {
  return (
    <section className="latest">
      <h2>Latest Release</h2>
      <div className="release-card">
        <img src="/assets/img/methlab.jpg" alt="Meth Lab" />
        <div className="release-info">
          <h3>Meth Lab 3: The Rehab</h3>
          <span>2022</span>
          <Links />
        </div>
      </div>
    </section>
  );
}

export default LatestRelease;
