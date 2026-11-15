import React from "react";
import { Link } from "react-router-dom";
import offers from "../data/offers";
import CtaBlock from "../components/CtaBlock";
export default function Umzug() {
  return (
    <>
    <section className="section">
      <div className="container">
        <span className="eyebrow">Umzug</span>
        <h1 className="section-title">Wählen Sie Ihre Wohnungsgrösse.</h1>
        <p className="section-lead">
          Wählen Sie die passende Zimmerzahl. Danach füllen Sie ein kurzes
          Formular aus – wir melden uns mit einer Offerte.
        </p>

        <div className="offers-grid">
          {offers.map((offer) => (
            <Link
              key={offer.id}
              to={`/umzug/${offer.id}`}
              className="offer-card"
            >
              <div className="offer-rooms">
                <span className="offer-num">{offer.rooms}</span>
                <span className="offer-unit">Zimmer</span>
              </div>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <ul className="offer-features">
                {offer.features.map((f) => (
                  <li key={f}>
                    <i className="fas fa-check" /> {f}
                  </li>
                ))}
              </ul>
              <span className="badge">{offer.price}</span>
            </Link>
          ))}
        </div>
      </div>
  
    </section>
      <CtaBlock
       title="Nicht sicher, welche Grösse passt?"
      subtitle="Kontaktieren Sie uns – wir beraten Sie gerne persönlich und unverbindlich."
    />
    </>
  );
}