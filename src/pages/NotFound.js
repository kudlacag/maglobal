import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1 className="section-title">Seite nicht gefunden.</h1>
        <p className="section-lead">
          Die gesuchte Seite existiert nicht mehr oder wurde verschoben.
        </p>
        <Link to="/" className="btn btn-gold">Zur Startseite</Link>
      </div>
    </section>
  );
}