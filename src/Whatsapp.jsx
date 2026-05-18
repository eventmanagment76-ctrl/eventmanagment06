// WhatsAppChat.jsx

import React, { useState } from "react";
import "./Whatspp.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
function WhatsAppChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="whatsapp-container">

     
      <div className={`chat-box ${open ? "show" : ""}`}>

        {/* HEADER */}

        <div className="chat-header">

          <div className="header-top">

            {/* WHATSAPP HEADER ICON */}

            <div className="whatsapp-icon">
              <i className="fab fa-whatsapp"></i>
            </div>

            <div className="header-content">

              <h3>Start a Conversation</h3>

              <p>
                Hi! Click on one of our team members
                below to chat on <b>WhatsApp</b>
              </p>

            </div>

          </div>

        </div>

        {/* REPLY TEXT */}

        <div className="reply-text">
          The team typically replies in a few minutes.
        </div>

        {/* TEAM MEMBER */}

        <a
          href="https://wa.me/917483264039"
          target="_blank"
          rel="noreferrer"
          className="team-member"
        >

          <div className="member-left">

            <div className="member-icon">
              <i className="fab fa-whatsapp"></i>
            </div>

            <span>Orbit events and expriences chat us</span>

          </div>

          <div className="member-right">
            <i className="fab fa-whatsapp"></i>
          </div>

        </a>

      </div>

      {/* =========================
          FLOATING BUTTON
      ========================= */}

      <button
        className={`floating-btn ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >

        {open ? (
          "✕"
        ) : (
          <>
            <div className="btn-text">
              <span>Need Help?</span>
              <b>Chat with us</b>
            </div>

            <div className="btn-icon">
              <i className="fab fa-whatsapp"></i>
            </div>
          </>
        )}

      </button>

    </div>
  );
}

export default WhatsAppChat;