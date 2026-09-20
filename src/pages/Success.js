import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Success() {
  const { state } = useLocation();
  const ref = state?.ref;

  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Vielen Dank</span>
        <h1 className="section-title">Ihre Anfrage ist eingegangen.</h1>
        <p className="section-lead">
          Wir haben Ihre Angaben erhalten und melden uns mit einer Offerte.
          Sie erhalten in Kürze eine Bestätigung per E-Mail.
        </p>

        {ref && (
          <p className="ref-badge">
            Referenz: <strong>{ref}</strong>
          </p>
        )}

        <div className="hero-actions">
          <Link to="/" className="btn btn-gold">
            Zurück zur Startseite
          </Link>
          <a
            href="https://wa.me/41779074062"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <i className="fab fa-whatsapp" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}