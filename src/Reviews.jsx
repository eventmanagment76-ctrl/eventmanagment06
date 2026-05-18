// ClientReviews.jsx

import React from "react";
import "./Reviews.css";

const reviews = [
  {
    name: "Arjun Mehta",
    role: "Corporate Client",
    review:
      "Orbit Events delivered an exceptional corporate summit for our company. The execution, lighting, hospitality, and stage setup were beyond expectations.",
  },

  {
    name: "Priya Sharma",
    role: "Wedding Event",
    review:
      "Everything was beautifully organized and professionally managed. Our guests were truly impressed with the overall experience.",
  },

  {
    name: "Rahul Verma",
    role: "Product Launch",
    review:
      "The Orbit Events team created a premium launch experience for our brand. Attention to detail and creativity were outstanding.",
  },

  {
    name: "Sneha Kapoor",
    role: "Social Event",
    review:
      "From decor to coordination, every part of the event was handled perfectly. Highly recommended for elegant event management.",
  },

  {
    name: "Vikram Reddy",
    role: "Conference Client",
    review:
      "Professional team with excellent communication and flawless execution. Orbit Events exceeded our expectations completely.",
  },

  {
    name: "Ananya Rao",
    role: "Exhibition Client",
    review:
      "The exhibition booth design and crowd management were exceptional. We received amazing feedback from visitors and partners.",
  },
];

function ClientReviews() {
  return (
    <section className="reviews-section">

      <div className="reviews-header">

        <p className="reviews-subtitle">
          CLIENT TESTIMONIALS
        </p>

        <h2>
          What Clients Say About
          <span> Orbit Events</span>
        </h2>

      </div>

      <div className="reviews-container">

        {reviews.map((item, index) => (
          <div className="review-card" key={index}>

            <div className="quote-icon">“</div>

            <p className="review-text">
              {item.review}
            </p>

            <div className="review-user">

              <div className="user-image">
                {item.name.charAt(0)}
              </div>

              <div className="user-details">
                <h3>{item.name}</h3>
                <span>{item.role}</span>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default ClientReviews;