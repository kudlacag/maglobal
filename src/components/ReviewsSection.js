import React from "react";
import reviews from "../data/reviews";

// const GOOGLE_REVIEW_LINK =
//   "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID";

export default function ReviewsSection() {
  return (
    <section className="section section-alt" id="bewertungen">
      <div className="container">
        <span className="eyebrow">Kundenbewertungen</span>
        <h2 className="section-title">Was unsere Kunden sagen.</h2>
        <p className="section-lead">
          Über 100 zufriedene Privat- und Geschäftskunden in Zürich und
          Umgebung. Hier ein Auszug aus unseren Referenzen.
        </p>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <article key={i} className="review-card">
              <div className="review-stars" aria-label={`${r.rating} von 5 Sternen`}>
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <i key={idx} className="fas fa-star" />
                ))}
              </div>

              <p className="review-text">"{r.text}"</p>

              <div className="review-author">
                <span className="review-avatar">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <strong>{r.name}</strong>
                  <span className="review-meta">
                    {r.city} · {r.service}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reviews-cta">
          <p>
            <i className="fab fa-google" /> <strong>Google Reviews</strong> — wir
            sammeln gerade unsere ersten Bewertungen.
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=MA+Smart+Global+GmbH+Z%C3%BCrich"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <i className="fas fa-star" /> Bewertung hinterlassen
          </a>
        </div>
      </div>
    </section>
  );
}