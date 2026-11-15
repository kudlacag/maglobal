import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Success() {
  const { state } = useLocation();
  const ref = state?.ref;

  // Fire Google Ads conversion when the customer reaches this page
  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "conversion", {
      send_to: "AW-18455787902/_nUbCNTZpfocEP7ys-BE",
    });
  }, []);

  // Bonus: Pre-fill the WhatsApp message with their reference number
  const whatsappText = ref 
    ? `Hallo MA Smart Global, ich habe gerade eine Anfrage gesendet. Meine Referenz ist ${ref}.` 
    : "Hallo MA Smart Global, ich habe gerade eine Anfrage gesendet.";
  
  const whatsappUrl = `https://wa.me/41779074062?text=${encodeURIComponent(whatsappText)}`;

  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Vielen Dank</span>
        <h1 className="section-title">Ihre Anfrage ist eingegangen.</h1>
        <p className="section-lead">
          Wir haben Ihre Angaben erhalten und melden uns mit einer Offerte.
          Sie erhalten in Kürze eine Bestätigung per E-Mail.
        </p>

        {ref && (
          <p className="ref-badge">
            Referenz: <strong>{ref}</strong>
          </p>
        )}

        {/* Mobile-Fix: Forces buttons to stack neatly on phones */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "100%",
          maxWidth: "400px",
          margin: "24px auto 0 auto"
        }}>
          <Link 
            to="/" 
            className="btn btn-gold"
            style={{ 
              width: "100%", 
              padding: "16px", 
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            Zurück zur Startseite
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "100%",
              padding: "16px",
              backgroundColor: "#25D366", // WhatsApp Green
              color: "#ffffff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <i className="fab fa-whatsapp" style={{ fontSize: "1.2rem" }} /> 
            WhatsApp Nachricht senden
          </a>
        </div>
      </div>
    </section>
  );
}