import React, { useEffect, useState } from "react";
import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import "./App.css";

import Home            from "./pages/Home";
import Umzug           from "./pages/Umzug";
import Booking         from "./pages/Booking";
import Success         from "./pages/Success";
import Reinigung       from "./pages/Reinigung";
import Montage         from "./pages/Montage";
import Logistik        from "./pages/Logistik";
import Offerte         from "./pages/Offerte";
import Impressum       from "./pages/Impressum";
import Datenschutz     from "./pages/Datenschutz";
import NotFound        from "./pages/NotFound";

/* ------------------------------------------------------------------ *
 * Config
 * ------------------------------------------------------------------ */
const WHATSAPP_NUMBER = "41779074062";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const NAV_ITEMS = [
  { to: "/umzug",     label: "Umzug" },
  { to: "/reinigung", label: "Reinigung" },
  { to: "/montage",   label: "Montage" },
  { to: "/logistik",  label: "Logistik" },
];

const LANGS = ["DE", "EN", "SO"];

/* ------------------------------------------------------------------ *
 * Placeholder pages — will be replaced in Step 4
 * ------------------------------------------------------------------ */
function Placeholder({ title }) {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">In Vorbereitung</span>
        <h1 className="section-title">{title}</h1>
        <p className="section-lead">
          Diese Seite wird im nächsten Schritt aufgebaut.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ *
 * Scroll-to-top on route change
 * ------------------------------------------------------------------ */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

/* ------------------------------------------------------------------ *
 * Navbar
 * ------------------------------------------------------------------ */
function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-brand" aria-label="MA SMART GLOBAL – Startseite">
          <span className="brand-icon-small">MA</span>
          <span className="brand-name">
            SMART GLOBAL <span className="gmbh-small">GmbH</span>
          </span>
        </Link>

        <button
          type="button"
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü schliessen" : "Menü öffnen"}
          aria-expanded={open}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <ul className={`nav-menu ${open ? "active" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/offerte" className="nav-cta">
              Offerte
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------ *
 * Footer (with DE · EN · SO switcher — visual only in Step 3)
 * ------------------------------------------------------------------ */
function Footer() {
  const [lang, setLang] = useState("DE");

  return (
    <footer className="footer-mobile">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>MA SMART GLOBAL GmbH</h3>
            <p>Badenerstrasse 370, 8004 Zürich</p>
            <p>www.masmartglobal.ch</p>
          </div>

          <div className="footer-social">
            <span className="switzerland-badge">🇨🇭 SCHWEIZ</span>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook" /></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin" /></a>
            </div>
          </div>
        </div>

        {/* Language switcher — wiring to i18n comes in a later step */}
        <div className="lang-switcher" role="group" aria-label="Sprache">
          {LANGS.map((l) => (
            <button
              key={l}
              type="button"
              className={lang === l ? "lang active" : "lang"}
              onClick={() => setLang(l)}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="footer-links">
          <Link to="/impressum">Impressum</Link>
          <span aria-hidden="true">·</span>
          <Link to="/datenschutz">Datenschutz</Link>
        </div>

        {/* Designer credit (kept from your original) */}
        <div className="designer-credit">
          <div className="designer-content">
            <span className="designer-icon">
              <i className="fas fa-code" />
            </span>
            <span className="designer-text">Designed &amp; Developed by</span>
            <a
              href="https://facebook.com/xasanbiyo"
              target="_blank"
              rel="noopener noreferrer"
              className="designer-link"
            >
              <i className="fab fa-facebook" />
              Xasanjii IT-Solutions
              <i className="fas fa-external-link-alt" />
            </a>
          </div>
          <div className="designer-divider" />
          <p className="designer-tagline">
            <i className="fas fa-heart" style={{ color: "#ff6b6b" }} />
            Professionelle Web-Lösungen
            <i className="fas fa-heart" style={{ color: "#ff6b6b" }} />
          </p>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} MA SMART GLOBAL GmbH</span>
          <span>UMZUG · REINIGUNG · MONTAGE · LOGISTIK</span>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ *
 * WhatsApp floating button
 * ------------------------------------------------------------------ */
function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Auf WhatsApp chatten"
    >
      <i className="fab fa-whatsapp" />
    </a>
  );
}

/* ------------------------------------------------------------------ *
 * App
 * ------------------------------------------------------------------ */
export default function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />

      <main>
       <Routes>
        <Route path="/"                element={<Home />} />
        <Route path="/umzug"           element={<Umzug />} />
        <Route path="/umzug/:offerId"  element={<Booking />} />
        <Route path="/reinigung"       element={<Reinigung />} />
        <Route path="/montage"         element={<Montage />} />
        <Route path="/logistik"        element={<Logistik />} />
        <Route path="/offerte"         element={<Offerte />} />
        <Route path="/impressum"       element={<Impressum />} />
        <Route path="/datenschutz"     element={<Datenschutz />} />
        <Route path="/booking-success" element={<Success />} />
        <Route path="*"                element={<NotFound />} />
      </Routes>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}