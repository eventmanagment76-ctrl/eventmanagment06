import React, { useEffect } from "react";
import "./Orbitabout.css";
<<<<<<< HEAD
import b6 from "../src/assets/b6.jpeg";
import d7 from "../src/assets/d7.jpeg";

export default function Why() {
=======

// ✅ FIXED PATHS
// import cop2 from "../assets/cop2.webp";
// import cop4 from "../assets/cop4.webp";

export default function WhyOrbit() {
>>>>>>> 1d39347 (local changes)

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

<<<<<<< HEAD
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }, []);

  const data = [
    "8+ years experience",
    "Nationwide vendor network",
    "500+ successful events",
    "Creative production teams",
    "Award winning company",
    "5★ Google rating"
=======
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  const data = [
    "6+ Years Experience",
    "Nationwide Vendor Network",
    "500+ Successful Events",
    "Creative Production Teams",
    "Award Winning Company",
    "4.9★ Google Rating",
>>>>>>> 1d39347 (local changes)
  ];

  return (
    <section className="why">
<<<<<<< HEAD

      <div className="why-container">

        <div className="why-image fade-up">

          <img
            className="main-img"
            src={b6}
            alt="event"
          />

          <img
            className="decor-img"
            src={d7}
            alt="event"
          />

        </div>

        <div className="why-content">

          <h1 className="fade-up">
            Why Orbit Events and Experiences 
            <span>Leading Event Organizer</span>
          </h1>

          <p className="fade-up">
            Orbit Events is a premier event management company
=======
      <div className="why-container">

        {/* LEFT IMAGE */}
        <div className="why-image fade-up">
         <img src="https://images.unsplash.com/photo-1506157786151-b8491531f063" />
          {/* <img src={cop4} className="decor-img" alt="event" /> */}
        </div>

        {/* RIGHT CONTENT */}
        <div className="why-content fade-up">

          <h1>
            Why Orbit Events is a <br />
            <span>Leading Corporate Event Organizer</span>
          </h1>

          <div className="line"></div>

          <p>
            Orbit Events is a premier corporate event management company
>>>>>>> 1d39347 (local changes)
            delivering unforgettable experiences across India with
            professional planning, creative design and seamless execution.
          </p>

          <div className="why-boxes">
<<<<<<< HEAD

=======
>>>>>>> 1d39347 (local changes)
            {data.map((item, i) => (
              <div className="box fade-up" key={i}>
                {item}
              </div>
            ))}
<<<<<<< HEAD

=======
>>>>>>> 1d39347 (local changes)
          </div>

        </div>

      </div>
<<<<<<< HEAD

=======
>>>>>>> 1d39347 (local changes)
    </section>
  );
}