import React from "react";
import gallery from "../data/gallery";

export default function GallerySection() {
  return (
    <section className="section" id="galerie">
      <div className="container">
        <span className="eyebrow">Einblicke</span>
        <h2 className="section-title">Sichtbar zuverlässig unterwegs.</h2>
        <p className="section-lead">
          Einblicke in unsere Arbeit – Umzüge, Reinigungen, Transporte und
          Entsorgungen in Zürich und der ganzen Schweiz.
        </p>

        <div className="gallery-grid">
          {gallery.map((item, i) => (
            <figure key={i} className="gallery-item">
              <img
                src={item.image}
                alt={item.caption}
                loading="lazy"
                className="gallery-image"
              />
              <figcaption className="gallery-caption">
                <span className="gallery-label">{item.label}</span>
                <span className="gallery-text">{item.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}