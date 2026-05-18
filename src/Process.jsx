<<<<<<< HEAD

=======
// ProcessSection.jsx
>>>>>>> 1d39347 (local changes)

import React from "react";
import "./Process.css";

<<<<<<< HEAD
=======
// ICONS
>>>>>>> 1d39347 (local changes)
import {
  CalendarCheck,
  Palette,
  Settings,
  Headphones,
} from "lucide-react";

const processData = [
  {
    id: "01",
    title: "Planning",
    paragraph:
      "Understanding your vision, goals and budget for a seamless event journey.",
    icon: <CalendarCheck size={28} />,
  },

  {
    id: "02",
    title: "Concept",
    paragraph:
      "Creative themes, premium styling and elegant visual storytelling.",
    icon: <Palette size={28} />,
  },

  {
    id: "03",
    title: "Coordination",
    paragraph:
      "Managing vendors, logistics and complete event arrangements smoothly.",
    icon: <Settings size={28} />,
  },

  {
    id: "04",
    title: "Execution",
    paragraph:
      "Real-time management and technical support for perfect delivery.",
    icon: <Headphones size={28} />,
  },
];

export default function ProcessSection() {

  return (

    <section className="process-section">

<<<<<<< HEAD
=======
      {/* HEADER */}
>>>>>>> 1d39347 (local changes)
      <div className="process-header">

        <span className="tag">
          HOW WE WORK
        </span>

        <h1>
          Our Event Process
        </h1>

        <p>
          Elegant planning and flawless execution crafted to create
          unforgettable event experiences.
        </p>

      </div>

<<<<<<< HEAD
      <div className="timeline-line"></div>

=======
      {/* TIMELINE */}
      <div className="timeline-line"></div>

      {/* PROCESS */}
>>>>>>> 1d39347 (local changes)
      <div className="process-grid">

        {processData.map((item, index) => (

          <div
            className="process-card"
            key={index}
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          >

<<<<<<< HEAD
=======
            {/* TOP ICON */}
>>>>>>> 1d39347 (local changes)
            <div className="top-design">

              <div className="number-circle">
                {item.id}
              </div>

              <div className="icon-box">
                {item.icon}
              </div>

            </div>

<<<<<<< HEAD
=======
            {/* CONTENT */}
>>>>>>> 1d39347 (local changes)
            <div className="card-content">

              <h2>{item.title}</h2>

              <p>{item.paragraph}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}