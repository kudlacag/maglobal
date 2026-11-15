import React from "react";
import { Link } from "react-router-dom";
import ContactMap from "../components/ContactMap";

export default function UeberUns() {
  return (
    <>
      <section className="section">
        <div className="container">
          <span className="eyebrow">Über uns</span>
          <h1 className="section-title">
            Ihr zuverlässiger Partner aus Zürich.
          </h1>
          <p className="section-lead">
            MA Smart Global GmbH ist ein Schweizer Familienunternehmen mit
            Sitz an der Badenerstrasse 370 in Zürich. Wir bieten praktische
            Dienstleistungen rund um Umzug, Reinigung, Montage, Transport
            und Entsorgung – professionell, freundlich und zum fairen Preis.
          </p>
        </div>
      </section>

      {/* Firmenvorstellung */}
      <section className="section section-alt">
        <div className="container">
          <span className="eyebrow">Firmenvorstellung</span>
          <h2 className="section-title">Wer wir sind.</h2>
          <p className="section-lead">
            Gegründet von Ahmed Geele, hat sich MA Smart Global GmbH zum Ziel
            gesetzt, Haushalten, Büros und kleinen Unternehmen in der ganzen
            Schweiz praktische Hilfe zu bieten – ohne Umwege, ohne
            Überraschungen, mit klaren Preisen und direkter Kommunikation.
          </p>
          <p className="section-lead">
            Vom ersten Gespräch bis zur Ausführung steht Ihnen ein fester
            Ansprechpartner zur Seite. Wir arbeiten mit eigenen Fahrzeugen,
            eigenem Team und einem festen Qualitätsversprechen.
          </p>

          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-num">100%</span>
              <span className="stat-label">Eigenes Team</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">24h</span>
              <span className="stat-label">Antwortzeit</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">🇨🇭</span>
              <span className="stat-label">Ganze Schweiz</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">0 CHF</span>
              <span className="stat-label">Kostenlose Offerte</span>
            </div>
          </div>
        </div>
      </section>

      {/* Erfahrung */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Erfahrung</span>
          <h2 className="section-title">Was wir jeden Tag machen.</h2>
          <p className="section-lead">
            Von kleinen Privatumzügen bis zu Firmenwechseln und regelmässiger
            Hauswartung: Wir kennen die Anforderungen, die ein professioneller
            Service in Zürich und Umgebung mit sich bringt.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <i className="fas fa-truck-moving" />
              <h3>Umzüge</h3>
              <p>
                Privat- und Firmenumzüge jeder Grösse – von 1.5 Zimmern bis
                zu Mehrfamilienhäusern.
              </p>
            </div>
            <div className="about-card">
              <i className="fas fa-broom" />
              <h3>Reinigungen</h3>
              <p>
                Endreinigung mit Abnahmegarantie, Unterhalt, Fenster und
                Grundreinigung.
              </p>
            </div>
            <div className="about-card">
              <i className="fas fa-screwdriver-wrench" />
              <h3>Montage</h3>
              <p>
                Möbel, Küchen, Bilder, Regale – montiert und auf Wunsch auch
                wieder abgebaut.
              </p>
            </div>
            <div className="about-card">
              <i className="fas fa-recycle" />
              <h3>Transport &amp; Entsorgung</h3>
              <p>
                Lieferungen, Kurierdienst, fachgerechte Entsorgung und
                Räumungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zuverlässigkeit */}
      <section className="section section-alt">
        <div className="container">
          <span className="eyebrow">Zuverlässigkeit</span>
          <h2 className="section-title">Worauf Sie sich verlassen können.</h2>

          <ul className="promise-list">
            <li>
              <i className="fas fa-check-circle" />
              <div>
                <strong>Versicherungsschutz</strong>
                <p>
                  Betriebs- und Transportversicherung für alle Aufträge – Ihre
                  Sachen sind abgesichert.
                </p>
              </div>
            </li>
            <li>
              <i className="fas fa-check-circle" />
              <div>
                <strong>Fixpreise</strong>
                <p>
                  Nach kostenloser Besichtigung erhalten Sie einen klaren
                  Fixpreis – keine versteckten Kosten.
                </p>
              </div>
            </li>
            <li>
              <i className="fas fa-check-circle" />
              <div>
                <strong>Abnahmegarantie</strong>
                <p>
                  Bei Endreinigungen garantieren wir die Abnahme – falls
                  nötig, reinigen wir kostenlos nach.
                </p>
              </div>
            </li>
            <li>
              <i className="fas fa-check-circle" />
              <div>
                <strong>Persönlicher Kontakt</strong>
                <p>
                  Ein fester Ansprechpartner – kein Callcenter, keine anonyme
                  Warteschleife.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Privat- und Geschäftskunden */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Für wen wir arbeiten</span>
          <h2 className="section-title">Privat- und Geschäftskunden.</h2>

          <div className="customer-grid">
            <div className="customer-card">
              <span className="customer-icon">
                <i className="fas fa-home" />
              </span>
              <h3>Privatkunden</h3>
              <p>
                Familien, Paare, Einzelpersonen und Senioren – wir passen uns
                Ihrem Tempo und Ihren Bedürfnissen an.
              </p>
              <ul>
                <li><i className="fas fa-check" /> Umzüge jeder Grösse</li>
                <li><i className="fas fa-check" /> Endreinigungen</li>
                <li><i className="fas fa-check" /> Möbelmontage</li>
                <li><i className="fas fa-check" /> Entsorgung &amp; Räumungen</li>
              </ul>
            </div>

            <div className="customer-card">
              <span className="customer-icon">
                <i className="fas fa-briefcase" />
              </span>
              <h3>Geschäftskunden</h3>
              <p>
                Büros, Verwaltungen, Agenturen und kleine Unternehmen – mit
                flexiblen Intervallen und klaren Rechnungen.
              </p>
              <ul>
                <li><i className="fas fa-check" /> Büroumzüge</li>
                <li><i className="fas fa-check" /> Unterhaltsreinigung</li>
                <li><i className="fas fa-check" /> Hauswartung</li>
                <li><i className="fas fa-check" /> Kurierdienst</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

            {/* Contact Map */}
      <ContactMap />

      {/* CTA */}
      <section className="section section-alt">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="eyebrow">Kontakt</span>
          <h2 className="section-title">Sprechen wir über Ihr Projekt.</h2>
          <p className="section-lead" style={{ margin: "12px auto 22px" }}>
            Erzählen Sie uns, was ansteht – wir melden uns mit einer
            kostenlosen und unverbindlichen Offerte.
          </p>
          <Link to="/offerte" className="btn btn-gold">
            <i className="fas fa-paper-plane" /> Kostenlose Offerte anfordern
          </Link>
        </div>
      </section>
    </>
  );
}