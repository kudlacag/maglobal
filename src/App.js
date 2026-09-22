import React, { useEffect, useState } from "react";
import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "./context/LanguageContext";
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
import UeberUns        from "./pages/UeberUns";

/* ------------------------------------------------------------------ *
 * Config
 * ------------------------------------------------------------------ */
const WHATSAPP_NUMBER = "41779074062";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const NAV_ITEMS = [
  { to: "/umzug",     key: "nav.umzug" },
  { to: "/reinigung", key: "nav.reinigung" },
  { to: "/montage",   key: "nav.montage" },
  { to: "/logistik",  key: "nav.logistik" },
];

const PAGE_TITLES = {
  "/":                "Reinigung, Umzug und Transport in Zürich | MA Smart Global GmbH",
  "/umzug":           "Umzug Zürich & Schweiz – Fixpreise | MA Smart Global GmbH",
  "/reinigung":       "Endreinigung mit Abnahmegarantie Zürich | MA Smart Global GmbH",
  "/montage":         "Möbelmontage & Küchenmontage Zürich | MA Smart Global GmbH",
  "/logistik":        "Transport, Entsorgung & Hauswartung Zürich | MA Smart Global GmbH",
  "/offerte":         "Kostenlose Offerte anfordern | MA Smart Global GmbH",
  "/impressum":       "Impressum | MA Smart Global GmbH",
  "/datenschutz":     "Datenschutz | MA Smart Global GmbH",
  "/booking-success": "Vielen Dank für Ihre Anfrage | MA Smart Global GmbH",
  "/ueber-uns":       "Über uns | MA Smart Global GmbH",
};

const DEFAULT_TITLE =
  "Reinigung, Umzug und Transport in Zürich | MA Smart Global GmbH";
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
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "instant" });

    // Update document title for SEO
    let title = PAGE_TITLES[pathname];
    if (!title && pathname.startsWith("/umzug/")) {
      title = "Umzug-Offerte anfordern | MA Smart Global GmbH";
    }
    document.title = title || DEFAULT_TITLE;
  }, [pathname]);

  return null;
}

/* ------------------------------------------------------------------ *
 * Navbar
 * ------------------------------------------------------------------ */
function Navbar() {
  const { t } = useLanguage();
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
                  {t(item.key)}
                </NavLink>
              </li>
              ))}
         <li>
  <NavLink to="/offerte" className="nav-cta">
    {t("nav.offerte")}
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
  const { lang, setLang, t } = useLanguage();

  return (
    <footer className="footer-mobile">
      <div className="container">
        {/* Trust badges strip */}
        <div className="trust-strip">
          <span className="trust-item">
            <i className="fas fa-shield-halved" /> Versicherungsschutz
          </span>
          <span className="trust-item">
            <i className="fas fa-award" /> Abnahmegarantie
          </span>
          <span className="trust-item">
            <i className="fas fa-eye" /> Kostenlose Besichtigung
          </span>
          <span className="trust-item">
            <i className="fas fa-tag" /> Fixpreise
          </span>
        </div>

        <div className="footer-content">
          {/* Brand + address */}
          <div className="footer-brand">
            <h3>MA SMART GLOBAL GmbH</h3>
            <p>Badenerstrasse 370</p>
            <p>8004 Zürich, Schweiz</p>
            <p>
              <a href="tel:+41779074062" className="footer-link">
                +41 77 907 40 62
              </a>
            </p>
            <p>
              <a
                href="mailto:info@masmartglobal.ch"
                className="footer-link"
              >
                info@masmartglobal.ch
              </a>
            </p>
            <p className="footer-uid">
              UID: <strong>CHE-440.667.796</strong>
            </p>
          </div>

          {/* Quick links + social */}
          <div className="footer-social">
            <span className="switzerland-badge">
              🇨🇭 In der ganzen Schweiz im Einsatz
            </span>

            <div className="footer-quick-links">
              <Link to="/ueber-uns" className="footer-link">
  <i className="fas fa-users" /> Über uns
</Link>
              <a
                href="https://www.google.com/maps?q=Badenerstrasse+370,+8004+Zürich"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <i className="fas fa-map-pin" /> Google Maps
              </a>
              <a
                href="https://wa.me/41779074062?text=Hallo%20MA%20Smart%20Global%20GmbH"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <i className="fab fa-whatsapp" /> WhatsApp
              </a>
              
              <Link to="/offerte" className="footer-link">
                <i className="fas fa-paper-plane" /> Offerte anfordern
              </Link>
            </div>

            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook" />
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>

        {/* Language switcher */}
        <div className="lang-switcher" role="group" aria-label="Sprache">
          {["DE", "EN", "SO"].map((l) => (
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

        {/* Legal links */}
        <div className="footer-links">
          <Link to="/impressum">{t("footer.impressum")}</Link>
          <span aria-hidden="true">·</span>
          <Link to="/datenschutz">{t("footer.datenschutz")}</Link>
        </div>

        {/* Designer credit */}
        <div className="designer-credit">
          <div className="designer-content">
            <span className="designer-icon">
              <i className="fas fa-code" />
            </span>
            <span className="designer-text">{t("designer.text")}</span>
            <a
              href="https://wa.me/4917630633777?text=Hallo%20Xasanjii%20IT-Solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="designer-link"
            >
              <i className="fab fa-whatsapp" />
              Xasanjii IT-Solutions
              <i className="fas fa-external-link-alt" />
            </a>
          </div>
          <div className="designer-divider" />
          <p className="designer-tagline">
            <i className="fas fa-heart" style={{ color: "#ff6b6b" }} />
            {t("designer.tagline")}
            <i className="fas fa-heart" style={{ color: "#ff6b6b" }} />
          </p>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} MA SMART GLOBAL GmbH</span>
          <span>UMZUG · REINIGUNG · MONTAGE · TRANSPORT · ENTSORGUNG</span>
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
        <Route path="/ueber-uns"       element={<UeberUns />} />
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