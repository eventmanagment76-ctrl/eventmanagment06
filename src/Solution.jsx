<<<<<<< HEAD
import React from "react";
import "./Solutions.css";

export default function Solution({ imagelist }) {
=======
// Solutions.jsx

import React from "react";
import "./Solutions.css";

import img1 from "./assets/art1.png";
// import img2 from "./assets/img2.jpg";
// import img3 from "./assets/img3.jpg";
// import img4 from "./assets/img4.jpg";
// import img5 from "./assets/img5.jpg";
// import img6 from "./assets/img6.jpg";
// import img7 from "./assets/img7.jpg";
// import img8 from "./assets/img8.jpg";

const solutionsData = [
  {
    id: 1,
    image: img1,
    title: "Event Conceptualization and Theme Development",
  },
  {
    id: 2,
    image: img1,
    title: "Registration and Welcome",
  },
  {
    id: 3,
    image: img1,
    title: "Thematic Entrance and Venue Branding",
  },
  {
    id: 4,
    image: img1,
    title: "Stage Setup and Technical Aspects",
  },
  {
    id: 5,
    image: img1,
    title: "Manpower and Entertainment",
  },
  {
    id: 6,
    image: img1,
    title: "Speaker Arrangements and Sponsor Branding",
  },
  {
    id: 7,
    image: img1,
    title: "Team Building and Interactive Activities",
  },
  {
    id: 8,
    image: img1,
    title: "Hybrid and Virtual Event Capabilities",
  },
];

export default function Solutions() {
>>>>>>> 1d39347 (local changes)
  return (
    <section className="solutions-section">
      <div className="solutions-container">

<<<<<<< HEAD
       
      <div className="solutions-tag">
  <h2 className="solutions-heading">
    Our Event Management Solutions
  </h2>

  <p className="solutions-text">
    We provide complete event management solutions tailored to your needs.  
    From planning to execution, we ensure smooth, engaging, and memorable experiences.
  </p>
</div>

   
      

  
        <div className="solutions-grid">
          {imagelist.map((item) => (
=======
        {/* TOP TAG */}
        <div className="solutions-tag">
          SOLUTIONS
        </div>

        {/* HEADING */}
        <h2 className="solutions-heading">
          Our Conference Management Solutions
        </h2>

        {/* GRID */}
        <div className="solutions-grid">
          {solutionsData.map((item) => (
>>>>>>> 1d39347 (local changes)
            <div className="solution-card" key={item.id}>

              <div className="solution-image-wrapper">
                <img
<<<<<<< HEAD
                  src={item.img}
=======
                  src={item.image}
>>>>>>> 1d39347 (local changes)
                  alt={item.title}
                  className="solution-image"
                />
              </div>

              <h3 className="solution-title">
                {item.title}
              </h3>

<<<<<<< HEAD

=======
>>>>>>> 1d39347 (local changes)
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}