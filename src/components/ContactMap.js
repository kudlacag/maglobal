import React, { useState } from "react";

const ADDRESS = "Badenerstrasse 370, 8004 Zürich, Schweiz";
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Badenerstrasse+370,+8004+Z%C3%BCrich&output=embed";
const MAP_LINK_URL =
  "https://www.google.com/maps/search/?api=1&query=Badenerstrasse+370,+8004+Z%C3%BCrich";

export default function ContactMap() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Unser Standort</span>
        <h2 className="section-title">In Zürich zu Hause.</h2>
        <p className="section-lead">
          Sie finden uns an der Badenerstrasse 370 in 8004 Zürich. Wir sind
          aber in der ganzen Schweiz für Sie im Einsatz.
        </p>

        <div className="map-wrapper">
          {!loaded ? (
            <button
              type="button"
              className="map-placeholder"
              onClick={() => setLoaded(true)}
              aria-label="Google Maps laden"
            >
              <i className="fas fa-map-location-dot" />
              <span className="map-placeholder-title">
                Google Maps laden
              </span>
              <span className="map-placeholder-text">
                Mit Klick auf diesen Button wird Google Maps geladen und
                Cookies von Google können gesetzt werden.
              </span>
              <span className="map-placeholder-address">{ADDRESS}</span>
            </button>
          ) : (
            <iframe
              className="map-iframe"
              title="MA Smart Global GmbH – Badenerstrasse 370, 8004 Zürich"
              src={MAP_EMBED_URL}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}
        </div>

        <div className="map-actions">
          <a
            href={MAP_LINK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <i className="fas fa-directions" /> Route in Google Maps öffnen
          </a>
        </div>
      </div>
    </section>
  );
}