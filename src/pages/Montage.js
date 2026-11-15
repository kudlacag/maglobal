import React from "react";
import { Link } from "react-router-dom";
import CtaBlock from "../components/CtaBlock";
export default function Montage() {
  return (
    <>
    <section className="section">
      <div className="container">
        <span className="eyebrow">Montage</span>
        <h1 className="section-title">Möbel, Bilder, Küchen – sauber montiert.</h1>
        <p className="section-lead">
          Wir bauen Möbel auf und ab, hängen Bilder und Regale auf und montieren
          Küchen mit Sorgfalt.
        </p>

        <ul className="feature-list">
          <li><i className="fas fa-check" /> Möbelaufbau</li>
          <li><i className="fas fa-check" /> Küchenmontage</li>
          <li><i className="fas fa-check" /> Bilder &amp; Regale</li>
          <li><i className="fas fa-check" /> Kleinreparaturen</li>
        </ul>

        <Link to="/offerte" className="btn btn-gold">
          <i className="fas fa-paper-plane" /> Offerte anfragen
        </Link>
      </div>
    </section>
       <CtaBlock
      title="Montage geplant?"
      subtitle="Senden Sie uns Ihre Anfrage – wir garantieren die Abnahme."
    />
  </>
  );
}