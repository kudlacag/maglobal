import React from "react";
import { Link } from "react-router-dom";
import CtaBlock from "../components/CtaBlock";
export default function Logistik() {
  return (
    <>
    <section className="section">
      <div className="container">
        <span className="eyebrow">Logistik</span>
        <h1 className="section-title">Transport, Lieferung, Entsorgung.</h1>
        <p className="section-lead">
          Von kleinen Lieferungen bis zur fachgerechten Entsorgung: Wir bringen
          Ihre Güter zuverlässig ans Ziel.
        </p>

        <ul className="feature-list">
          <li><i className="fas fa-check" /> Transporte</li>
          <li><i className="fas fa-check" /> Lieferungen &amp; Abholungen</li>
          <li><i className="fas fa-check" /> Entsorgung</li>
          <li><i className="fas fa-check" /> Recycling</li>
        </ul>

        <Link to="/offerte" className="btn btn-gold">
          <i className="fas fa-paper-plane" /> Offerte anfragen
        </Link>
      </div>
    </section>
       <CtaBlock
      title="Transport oder Entsorgung nötig?"
      subtitle="Senden Sie uns Ihre Anfrage – wir garantieren die Abnahme."
    />
  </>
  );
}