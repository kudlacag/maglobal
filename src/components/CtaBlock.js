import React from "react";
import { Link } from "react-router-dom";

const WHATSAPP_LINK =
  "https://wa.me/41779074062?text=Hallo%20MA%20Smart%20Global%20GmbH%2C%20ich%20m%C3%B6chte%20eine%20kostenlose%20Offerte%20anfordern.";
const PHONE_LINK = "tel:+41779074062";

export default function CtaBlock({
  eyebrow = "Kostenlose Offerte",
  title = "Bereit für den nächsten Schritt?",
  subtitle = "Ihre Anfrage ist nur ein paar Angaben entfernt. Wir melden uns mit einer Offerte.",
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-block">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-lead">{subtitle}</p>

          <div className="cta-actions">
            <Link to="/offerte" className="btn btn-gold">
              <i className="fas fa-paper-plane" /> Kostenlose Offerte anfordern
            </Link>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <i className="fab fa-whatsapp" /> WhatsApp
            </a>

            <a href={PHONE_LINK} className="btn btn-ghost-light">
              <i className="fas fa-phone-alt" /> +41 77 907 40 62
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}