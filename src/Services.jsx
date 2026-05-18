<<<<<<< HEAD
import React from "react";
import "./Services.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
=======
import React, { useState } from "react";
import "./Services.css";
import { motion } from "framer-motion";
>>>>>>> 1d39347 (local changes)

import cop4 from "./assets/cop4.webp";
import conferenc1 from "./assets/conferenc1.jpg";
import pro1 from "./assets/pro1.webp";
import exhibition1 from "./assets/exhibition1.jpg";
import brand1 from "./assets/brand1.jpeg";
import team1 from "./assets/team1.png";
import marke1 from "./assets/marke1.png";
import soc1 from "./assets/soc1.png";
import art1 from "./assets/art1.png";
<<<<<<< HEAD
import Footer from "./Footer";

function Services() {

  const navigate = useNavigate();

  const categories = [
    {
      title: "Corporate Events",
      desc: "Professional corporate event planning & execution.",
      img: cop4,
      path: "/services/corporate",
    },

    {
      title: "Conference",
      desc: "Seamless conference management solutions.",
      img: conferenc1,
      path: "/services/conference",
    },

    {
      title: "Product Launches",
      desc: "Creative product launch experiences.",
      img: pro1,
      path: "/services/product",
    },

    {
      title: "Exhibition",
      desc: "Engaging exhibition stall designs & setups.",
      img: exhibition1,
      path: "/services/exhibition",
    },

    {
      title: "Brand Activation",
      desc: "Interactive brand engagement strategies.",
      img: brand1,
      path: "/services/brand",
    },

    {
      title: "Team Activities",
      desc: "Fun & engaging team-building experiences.",
      img: team1,
      path: "/services/team",
    },

    {
      title: "Experiential Marketing",
      desc: "Memorable brand-driven experiences.",
      img: marke1,
      path: "/services/experiential",
    },

    {
      title: "Social & Wedding",
      desc: "Elegant wedding & social event planning.",
      img: soc1,
      path: "/services/social",
    },

    {
      title: "Artists & Entertainment",
      desc: "Top artists & live entertainment booking.",
      img: art1,
      path: "/services/artists",
    },
=======

function Services() {
  const [selected, setSelected] = useState(null);

  const categories = [
    { title: "Corporate Events", desc: "Professional corporate event planning & execution.", img: cop4 },
    { title: "Conference", desc: "Seamless conference management solutions.", img: conferenc1 },
    { title: "Product Launches", desc: "Creative product launch experiences.", img: pro1 },
    { title: "Exhibition", desc: "Engaging exhibition stall designs & setups.", img: exhibition1 },
    { title: "Brand Activation", desc: "Interactive brand engagement strategies.", img: brand1 },
    { title: "Team Activities", desc: "Fun & engaging team-building experiences.", img: team1 },
    { title: "Experiential Marketing", desc: "Memorable brand-driven experiences.", img: marke1 },
    { title: "Social & Wedding", desc: "Elegant wedding & social event planning.", img: soc1 },
    { title: "Artists & Entertainment", desc: "Top artists & live entertainment booking.", img: art1 },
>>>>>>> 1d39347 (local changes)
  ];

  return (
    <div className="app">
      <section className="container">

<<<<<<< HEAD
        {/* HEADER */}
=======
        {/* Header */}
>>>>>>> 1d39347 (local changes)
        <motion.header
          className="header"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
<<<<<<< HEAD
          <h1>Orbits Events and Experience</h1>
          <p>PICK WHAT SUITS YOU THE BEST</p>
        </motion.header>

        {/* GRID */}
        <div className="grid">

=======
          <h1>Orbits Events & Experience</h1>
          <p>PICK WHAT SUITS YOU THE BEST</p>
        </motion.header>

        {/* Grid */}
        <div className="grid">
>>>>>>> 1d39347 (local changes)
          {categories.map((item, index) => (
            <motion.div
              className="card"
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD

=======
>>>>>>> 1d39347 (local changes)
              <img src={item.img} alt={item.title} />

              <div className="overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <button
                  className="btn"
<<<<<<< HEAD
                  onClick={() => navigate(item.path)}
                >
                  Know More →
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </section>
     
=======
                  onClick={() => setSelected(item.title)}
                >
                  Know More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </section>
>>>>>>> 1d39347 (local changes)
    </div>
  );
}

export default Services;