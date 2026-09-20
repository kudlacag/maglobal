import React from "react";
import { Link } from "react-router-dom";
import services from "../data/services";
import values from "../data/values";
import steps from "../data/steps";
import faq from "../data/faq";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <header className="hero" id="home">
        <div className="container hero-content">
          <span className="eyebrow">Zuverlässige Services in Zürich und Umgebung</span>
          <h1 className="hero-title">Mehr Leichtigkeit für Ihren Alltag.</h1>
          <p className="hero-lead">
            MA Smart Global GmbH unterstützt Haushalte, Büros und kleine
            Unternehmen mit praktischen Services rund um Transport, Reinigung,
            Montage und mehr.
          </p>
          <div className="hero-services">
            {services.map((s) => (
              <Link key={s.slug} to={s.to} className="service-tag">
                {s.title}
              </Link>
            ))}
          </div>
          <div className="hero-actions">
            <Link to="/offerte" className="btn btn-gold">
              Offerte anfragen
            </Link>
            <a href="#leistungen" className="btn btn-ghost">
              Leistungen ansehen
            </a>
          </div>
        </div>
      </header>

      {/* PERSÖNLICH GEPLANT */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Persönlich geplant</span>
          <h2 className="section-title">
            Jede Anfrage beginnt mit einem kurzen Gespräch über Ihren Bedarf.
          </h2>
        </div>
      </section>

      {/* WAS UNS WICHTIG IST */}
      <section className="section section-alt">
        <div className="container">
          <span className="eyebrow">Was uns wichtig ist</span>
          <h2 className="section-title">
            Praktische Hilfe, die zu Ihnen passt.
          </h2>
          <p className="section-lead">
            Keine pauschalen Versprechen. Wir klären den Bedarf, den Ort und
            den gewünschten Zeitraum, bevor eine Offerte entsteht.
          </p>

          <div className="values-grid">
            {values.map((v) => (
              <article key={v.title} className="value-card">
                <span className="value-icon">
                  <i className={`fas ${v.icon}`} />
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ALLE LEISTUNGEN */}
      <section className="section" id="leistungen">
        <div className="container">
          <span className="eyebrow">Alle Leistungen</span>
          <h2 className="section-title">Ein Ansprechpartner für vieles.</h2>
          <p className="section-lead">
            Wählen Sie einen Bereich aus. Die genaue Leistung wird vorab
            gemeinsam definiert.
          </p>

          <div className="services-grid">
            {services.map((s) => (
              <Link key={s.slug} to={s.to} className="service-card">
                <i className={`fas ${s.icon}`} />
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="badge">Details</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SO FUNKTIONIERT ES */}
      <section className="section section-alt">
        <div className="container">
          <span className="eyebrow">So funktioniert es</span>
          <h2 className="section-title">
            Von der Anfrage zur passenden Lösung.
          </h2>

          <ol className="steps-grid">
            {steps.map((s) => (
              <li key={s.num} className="step">
                <span className="step-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* EINSATZGEBIET */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Einsatzgebiet</span>
          <h2 className="section-title">Zürich als Ausgangspunkt.</h2>
          <p className="section-lead">
            Unser Schwerpunkt liegt in Zürich und der näheren Region. Für Orte
            ausserhalb des Kerngebiets prüfen wir die Anfrage individuell.
          </p>

          <div className="area-grid">
            <div className="area-card">
              <h4>Zürich</h4>
              <p>Zentrum und Umgebung</p>
            </div>
            <div className="area-card">
              <h4>Region</h4>
              <p>Nach Verfügbarkeit</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="container">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">Die wichtigsten Antworten.</h2>
          <p className="section-lead">
            Noch etwas unklar? Schreiben oder rufen Sie uns an.
          </p>

          <div className="faq-list">
            {faq.map((item, i) => (
              <details key={i} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="container cta-block">
          <span className="eyebrow">Offerte anfragen</span>
          <h2 className="section-title">Bereit für den nächsten Schritt?</h2>
          <p className="section-lead">
            Ihre Anfrage ist nur ein paar Angaben entfernt.
          </p>
          <Link to="/offerte" className="btn btn-gold">
            <i className="fas fa-paper-plane" /> Offerte anfragen
          </Link>
        </div>
      </section>
    </>
  );
}