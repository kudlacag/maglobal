import React from "react";
import { Link } from "react-router-dom";
import CtaBlock from "../components/CtaBlock";
export default function Reinigung() {
  return (
    <>
    <section className="section">
      <div className="container">
        <span className="eyebrow">Reinigung</span>
        <h1 className="section-title">Reinigung mit klaren Absprachen.</h1>
        <p className="section-lead">
          Endreinigung bei Auszug, Unterhaltsreinigung für Wohnungen und
          Büros, Fenster- und Grundreinigung.
        </p>

        <ul className="feature-list">
          <li><i className="fas fa-check" /> Endreinigung</li>
          <li><i className="fas fa-check" /> Wohnung &amp; Büro</li>
          <li><i className="fas fa-check" /> Fensterreinigung</li>
          <li><i className="fas fa-check" /> Entsorgung &amp; Recycling</li>
        </ul>

        <Link to="/offerte" className="btn btn-gold">
          <i className="fas fa-paper-plane" /> Offerte anfragen
        </Link>
      </div>
    </section>
       <CtaBlock
      title="Reinigung mit Abnahmegarantie?"
      subtitle="Senden Sie uns Ihre Anfrage – wir garantieren die Abnahme."
    />
  </>
  );
}