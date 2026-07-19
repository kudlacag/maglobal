import React, { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const whatsappNumber = '41779074062';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="App">
      <nav className="navbar">
        <div className="container nav-container">
          <div className="nav-brand">
            <div className="brand-icon-small">MA</div>
            <span className="brand-name">SMART GLOBAL <span className="gmbh-small">GmbH</span></span>
          </div>
          
          <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#services" onClick={toggleMenu}>Dienstleistungen</a></li>
            <li><a href="#cleaning" onClick={toggleMenu}>Reinigung</a></li>
            <li><a href="#moving" onClick={toggleMenu}>Umzug</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Kontakt</a></li>
            <li><a href="#quote" className="nav-cta" onClick={toggleMenu}>Angebot</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="container hero-content">
          <div className="hero-brand">
            <div className="hero-icon">MA</div>
            <h1>SMART GLOBAL <span className="gmbh-hero">GmbH</span></h1>
          </div>
          <div className="hero-tagline">
            <p className="motto">HEUTE BEWEGEN, MORGEN BAUEN</p>
            <p className="sub-motto">EIN STARKER PARTNER FÜR IHRE ZUKUNFT</p>
          </div>
          <div className="hero-services">
            <span className="service-tag">UMZUG</span>
            <span className="service-tag">REINIGUNG</span>
            <span className="service-tag">TRANSPORT</span>
            <span className="service-tag">TAXI</span>
          </div>
        </div>
      </header>

      <div className="quick-contact">
        <div className="container contact-grid">
          <a href="tel:+41779074062" className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <span>+41 77 907 40 62</span>
          </a>
          <a href="mailto:mohamedgeele@hotmail.com" className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>E-Mail</span>
          </a>
          <a href="#" className="contact-item">
            <i className="fas fa-map-pin"></i>
            <span>Zürich</span>
          </a>
        </div>
      </div>

      <main>
        <section className="services-section" id="services">
          <div className="container">
            <h2 className="section-title-mobile">Unsere Dienstleistungen</h2>
            <div className="services-grid">
              <div className="service-card">
                <i className="fas fa-truck-moving"></i>
                <h3>UMZUG</h3>
                <p>Umzug · Relocation</p>
                <span className="badge">UMZUG</span>
              </div>
              <div className="service-card">
                <i className="fas fa-broom"></i>
                <h3>REINIGUNG</h3>
                <p>Reinigung · Endreinigung</p>
                <span className="badge">REINIGUNG</span>
              </div>
              <div className="service-card">
                <i className="fas fa-boxes"></i>
                <h3>TRANSPORT</h3>
                <p>Transport · Logistik</p>
                <span className="badge">TRANSPORT</span>
              </div>
              <div className="service-card">
                <i className="fas fa-taxi"></i>
                <h3>TAXI</h3>
                <p>Taxi · Fahrdienst</p>
                <span className="badge">TAXI</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cleaning-section" id="cleaning">
          <div className="container">
            <h2 className="section-title-mobile">
              <i className="fas fa-star" style={{ color: '#d4a84b' }}></i> 
              REINIGUNG · UMZUG · TRANSPORT
            </h2>
            <div className="cleaning-grid">
              <div className="cleaning-list">
                <ul>
                  <li><i className="fas fa-check-circle"></i> Endreinigung</li>
                  <li><i className="fas fa-check-circle"></i> Wohnungs- & Büroreinigung</li>
                  <li><i className="fas fa-check-circle"></i> Fensterreinigung</li>
                  <li><i className="fas fa-check-circle"></i> Entsorgung & Recycling</li>
                  <li><i className="fas fa-check-circle"></i> Transport & Möbelmontage</li>
                </ul>
              </div>
              <div className="cleaning-badges">
                <div className="ba-item">
                  <span className="ba-label">VORHER</span> 
                  <i className="fas fa-arrow-right"></i> 
                  <span className="ba-label after">NACHHER</span>
                </div>
                <p className="fast-tag">
                  <i className="fas fa-check-circle"></i> SCHNELL · ZUVERLÄSSIG · PREISWERT
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="quote-section" id="quote">
          <div className="container quote-block">
            <div>
              <h2 className="quote-title">
                <i className="fas fa-quote-left"></i> KOSTENLOSES ANGEBOT ANFRAGEN!
              </h2>
              <div className="quote-contact-mobile">
                <span><i className="fas fa-phone"></i> +41 77 907 40 62</span>
                <span><i className="fas fa-envelope"></i> mohamedgee@hotmail.com</span>
              </div>
            </div>
            <a href="#" className="cta-btn-mobile">
              <i className="fas fa-paper-plane"></i> Angebot
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-methods">
            <a href="tel:+41779074062" className="contact-method">
              <i className="fas fa-phone-alt"></i>
              <strong>Anrufen</strong>
              <span>+41 77 907 40 62</span>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-method">
              <i className="fab fa-whatsapp"></i>
              <strong>WhatsApp</strong>
              <span>Chatten Sie mit uns</span>
            </a>
            <a href="mailto:mohamedgeele@hotmail.com" className="contact-method">
              <i className="fas fa-envelope"></i>
              <strong>E-Mail</strong>
              <span>mohamedgee@hotmail.com</span>
            </a>
            <a href="#" className="contact-method">
              <i className="fas fa-directions"></i>
              <strong>Wegbeschreibung</strong>
              <span>Badenerstrasse 370</span>
            </a>
          </div>
        </section>

        <div className="partner-section">
          <div className="container partner-content">
            <p className="partner-text">
              <i className="fas fa-handshake"></i> IHR PARTNER FÜR JEDES PROJEKT.
            </p>
            <p className="partner-address-mobile">
              <i className="fas fa-map-pin"></i> Badenerstrasse 370, 8004 Zürich
            </p>
          </div>
        </div>
      </main>

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
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          
          {/* Designer Credit - Xasanjii IT-Solutions with Facebook Link */}
          <div className="designer-credit">
            <div className="designer-content">
              <span className="designer-icon">
                <i className="fas fa-code"></i>
              </span>
              <span className="designer-text">
                Designed & Developed by
              </span>
              <a 
                href="https://facebook.com/xasanbiyo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="designer-link"
              >
                <i className="fab fa-facebook"></i>
                Xasanjii IT-Solutions
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
            <div className="designer-divider"></div>
            <p className="designer-tagline">
              <i className="fas fa-heart" style={{ color: '#ff6b6b' }}></i>
              Professionelle Web-Lösungen
              <i className="fas fa-heart" style={{ color: '#ff6b6b' }}></i>
            </p>
          </div>

          <div className="footer-bottom">
            <span>MA SMART GLOBAL GmbH</span>
            <span>REINIGUNG · UMZUG · TRANSPORT · ENTSORGUNG</span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default App;