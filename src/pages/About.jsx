import React, { useEffect, useState } from "react";
import "../styles/About.css";

export default function About() {

  const [count, setCount] = useState({
    properties: 0,
    clients: 0,
    cities: 0,
    agents: 0
  });

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prev) => ({
        properties: prev.properties < 1200 ? prev.properties + 20 : 1200,
        clients: prev.clients < 800 ? prev.clients + 15 : 800,
        cities: prev.cities < 35 ? prev.cities + 1 : 35,
        agents: prev.agents < 50 ? prev.agents + 1 : 50
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="container text-center">
          <h1>About DreamEstate</h1>
          <p>Your trusted partner in finding dream homes</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-content container">
        <div className="row align-items-center">

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
              className="about-img"
              alt="about"
            />
          </div>

          <div className="col-md-6">
            <h2>Who We Are</h2>
            <p>
              DreamEstate is a modern real estate platform helping buyers,
              sellers and renters discover the best properties with ease.
            </p>
            <p>
              We connect people with their dream homes using trusted agents,
              smart technology and a seamless property search experience.
            </p>
          </div>

        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="achievement-section">
        <div className="container">

          <h2 className="text-center mb-5">Our Achievements</h2>

          <div className="row text-center">

            <div className="col-md-3 stat-box">
              <h3>{count.properties}+</h3>
              <p>Properties Listed</p>
            </div>

            <div className="col-md-3 stat-box">
              <h3>{count.clients}+</h3>
              <p>Happy Clients</p>
            </div>

            <div className="col-md-3 stat-box">
              <h3>{count.cities}</h3>
              <p>Cities Covered</p>
            </div>

            <div className="col-md-3 stat-box">
              <h3>{count.agents}+</h3>
              <p>Expert Agents</p>
            </div>

          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team-section">
        <div className="container">

          <h2 className="text-center mb-5">Meet Our Team</h2>

          <div className="row">

            <div className="col-md-4">
              <div className="team-card">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt=""/>
                <h4>Rahul Sharma</h4>
                <p>Senior Property Consultant</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="team-card">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt=""/>
                <h4>Priya Mehta</h4>
                <p>Real Estate Specialist</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="team-card">
                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt=""/>
                <h4>Arjun Verma</h4>
                <p>Investment Advisor</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners-section">
        <div className="container text-center">

          <h2>Trusted By</h2>

          <div className="partners">

            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" />

            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" />

            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" />

            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" />

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="about-cta text-center">

        <h2>Find Your Dream Property Today</h2>
        <p>Thousands of homes are waiting for you</p>

        <button
          className="explore-btn"
          onClick={() => (window.location.href = "/properties")}
        >
          Explore Properties
        </button>

      </section>

    </div>
  );
}
