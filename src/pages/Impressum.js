import React from "react";
import { Link } from "react-router-dom";

export default function Impressum() {
  return (
    <section className="section">
      <div className="container legal-page">
        <span className="eyebrow">Rechtliches</span>
        <h1 className="section-title">Impressum</h1>
        <p className="section-lead">
          Angaben gemäss schweizerischem Recht (Art. 3 Abs. 1 lit. s UWG).
        </p>

        <h2>Unternehmen</h2>
        <p>
          <strong>MA Smart Global GmbH</strong>
          <br />
          Rechtsform: Gesellschaft mit beschränkter Haftung (GmbH)
          <br />
          Sitz: Zürich, Schweiz
        </p>

        <h2>Vertretungsberechtigte Person</h2>
        <p>
          Ahmed Geele, Geschäftsführer
        </p>

        <h2>Adresse</h2>
        <p>
          MA Smart Global GmbH
          <br />
          Badenerstrasse 370
          <br />
          8004 Zürich
          <br />
          Schweiz
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon:{" "}
          <a href="tel:+41779074062">+41 77 907 40 62</a>
          <br />
          E-Mail:{" "}
          <a href="mailto:info@masmartglobal.ch">info@masmartglobal.ch</a>
          <br />
          Web:{" "}
          <a
            href="https://www.masmartglobal.ch"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.masmartglobal.ch
          </a>
        </p>

        <h2>Handelsregister</h2>
        <p>
          Eingetragen im Handelsregister des Kantons Zürich.
          <br />
          Unternehmens-Identifikationsnummer (UID):{" "}
          <strong>CHE-440.667.796</strong>
        </p>

        <h2>Mehrwertsteuer</h2>
        <p>
          Gemäss Art. 10 MWSTG sind wir als Kleinunternehmen von der
          Mehrwertsteuerpflicht befreit.
        </p>

        <h2>Verantwortlich für den Inhalt</h2>
        <p>
          Ahmed Geele, Geschäftsführer
          <br />
          Adresse wie oben.
        </p>

        <h2>Haftungsausschluss</h2>
        <p>
          Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen
          Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und
          Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor
          wegen Schäden materieller oder immaterieller Art, welche aus dem
          Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten
          Informationen, durch Missbrauch der Verbindung oder durch technische
          Störungen entstanden sind, werden ausgeschlossen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
          Verantwortungsbereichs. Es wird jegliche Verantwortung für solche
          Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten
          erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
        </p>

        <h2>Urheberrechte</h2>
        <p>
          Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos
          oder anderen Dateien auf dieser Website gehören ausschliesslich der
          MA Smart Global GmbH oder den speziell genannten Rechtsinhabern.
          Für die Reproduktion jeglicher Elemente ist die schriftliche
          Zustimmung der Urheberrechtsträger im Voraus einzuholen.
        </p>

        <div className="legal-actions">
          <Link to="/datenschutz" className="btn btn-gold">
            Zur Datenschutzerklärung
          </Link>
          <Link to="/" className="btn btn-ghost">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </section>
  );
}