import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import offers, { getOfferById } from "../data/offers";

const API_URL = process.env.REACT_APP_API_URL || "";


export default function Booking() {
  const { offerId } = useParams();
  const navigate = useNavigate();

  const offer = useMemo(() => getOfferById(offerId), [offerId]);

const [form, setForm] = useState({
  name: "",
  phone: "",
  email: "",

  // Customer address
  addressStreet: "",
  addressZip: "",
  addressCity: "",

  // Umzug – from
  fromStreet: "",
  fromZip: "",
  fromCity: "",

  // Umzug – to
  toStreet: "",
  toZip: "",
  toCity: "",

  rooms: offer ? String(offer.rooms) : "",
  extraRooms: "",
  workDate: "",
  workTime: "",
  floorFrom: "",
  floorTo: "",
  elevator: "no",
  notes: "",
  consent: false,
});

  const [photos, setPhotos] = useState([]);
  const [status, setStatus] = useState({ state: "idle", message: "" });
 // Warm up backend on page open
 useEffect(() => {
   if (API_URL) fetch(`${API_URL}/health`).catch(() => {});
     }, []);
  if (!offer) {
    return (
      <section className="section">
        <div className="container">
          <span className="eyebrow">Umzug</span>
          <h1 className="section-title">Offerte nicht gefunden.</h1>
          <p className="section-lead">
            Bitte wählen Sie zuerst eine Wohnungsgrösse.
          </p>
          <Link to="/umzug" className="btn btn-gold">
            Zurück zu den Angeboten
          </Link>
        </div>
      </section>
    );
  }

  const roomsNum = parseFloat(form.rooms) || 0;
  const needsExtraRooms = roomsNum > 8;

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const onFile = (e) => {
    const files = Array.from(e.target.files || []).slice(0, 6);
    setPhotos(files);
  };

const onSubmit = async (e) => {
  e.preventDefault();
  if (!form.consent) {
    setStatus({
      state: "error",
      message: "Bitte bestätigen Sie die AGB / Datenschutz.",
    });
    return;
  }

  setStatus({
    state: "loading",
    message: "Wird gesendet… (kann bis zu 60 Sek. dauern)",
  });

  try {
    const fd = new FormData();
    fd.append("offerId", offer.id);
    fd.append("offerTitle", offer.title);
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    photos.forEach((p) => fd.append("photos", p));

    // Abort after 90s — Render Free cold start can take ~50s
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 90_000);

    let res;
    try {
      res = await fetch(`${API_URL}/api/bookings`, {
        method: "POST",
        body: fd,
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeoutId);
    }

    // Read raw text first, so we can log it if JSON parsing fails
    const raw = await res.text();
    let data = {};
    try {
      data = raw ? JSON.parse(raw) : {};
    } catch (parseErr) {
      console.error("[booking] Non-JSON response:", raw.slice(0, 500));
      throw new Error("Server returned an unexpected response format.");
    }

    if (!res.ok) {
      console.error("[booking] Server error:", res.status, data);
      throw new Error(
        data.error || `Server error (${res.status})`
      );
    }

    console.log("[booking] Success:", data);

    navigate("/booking-success", {
      state: { ref: data.reference || null, email: form.email },
    });
  } catch (err) {
    console.error("[booking] submit failed:", err);

    let msg = "Senden fehlgeschlagen. Bitte versuchen Sie es erneut.";
    if (err.name === "AbortError") {
      msg =
        "Die Anfrage hat zu lange gedauert. Bitte prüfen Sie Ihre E-Mails – wenn Sie bereits eine Bestätigung erhalten haben, ist alles gut. Andernfalls senden Sie die Anfrage bitte erneut.";
    } else if (err.message) {
      msg = `${err.message} — Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.`;
    }

    setStatus({ state: "error", message: msg });
  }
};

  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Anfrage · {offer.title}</span>
        <h1 className="section-title">Erzählen Sie uns, was ansteht.</h1>
        <p className="section-lead">
          Je genauer die Angaben, desto besser können wir den Aufwand
          einschätzen. Pflichtfelder sind bewusst auf das Nötigste begrenzt.
        </p>
        <p className="form-note">
          Eine Anfrage ist noch keine bestätigte Buchung. Die Angaben dienen
          der Offertabklärung.
        </p>

        <form className="booking-form" onSubmit={onSubmit} noValidate>
          <fieldset>
  <legend>Kontakt</legend>

  <label>
    Name *
    <input
      type="text"
      required
      value={form.name}
      onChange={(e) => update("name", e.target.value)}
    />
  </label>

  <label>
    Telefon *
    <input
      type="tel"
      required
      value={form.phone}
      onChange={(e) => update("phone", e.target.value)}
    />
  </label>

  <label>
    E-Mail *
    <input
      type="email"
      required
      value={form.email}
      onChange={(e) => update("email", e.target.value)}
    />
  </label>

  {/* Customer address – Strasse / PLZ / Stadt */}
  <label>
    Strasse &amp; Nr. *
    <input
      type="text"
      required
      placeholder="z. B. Badenerstrasse 370"
      value={form.addressStreet}
      onChange={(e) => update("addressStreet", e.target.value)}
    />
  </label>

  <div className="field-row">
    <label>
      PLZ *
      <input
        type="text"
        required
        inputMode="numeric"
        pattern="[0-9]{4}"
        maxLength={4}
        placeholder="8004"
        value={form.addressZip}
        onChange={(e) =>
          update("addressZip", e.target.value.replace(/\D/g, ""))
        }
      />
    </label>

    <label>
      Stadt *
      <input
        type="text"
        required
        placeholder="Zürich"
        value={form.addressCity}
        onChange={(e) => update("addressCity", e.target.value)}
      />
    </label>
  </div>
</fieldset>
<fieldset>
  <legend>Umzug</legend>

  <label>
    Von – Strasse &amp; Nr.
    <input
      type="text"
      placeholder="z. B. Langstrasse 12"
      value={form.fromStreet}
      onChange={(e) => update("fromStreet", e.target.value)}
    />
  </label>

  <div className="field-row">
    <label>
      Von – PLZ
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]{4}"
        maxLength={4}
        placeholder="8004"
        value={form.fromZip}
        onChange={(e) =>
          update("fromZip", e.target.value.replace(/\D/g, ""))
        }
      />
    </label>

    <label>
      Von – Stadt
      <input
        type="text"
        placeholder="Zürich"
        value={form.fromCity}
        onChange={(e) => update("fromCity", e.target.value)}
      />
    </label>
  </div>

  <label>
    Nach – Strasse &amp; Nr.
    <input
      type="text"
      placeholder="z. B. Seefeldstrasse 88"
      value={form.toStreet}
      onChange={(e) => update("toStreet", e.target.value)}
    />
  </label>

  <div className="field-row">
    <label>
      Nach – PLZ
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]{4}"
        maxLength={4}
        placeholder="8008"
        value={form.toZip}
        onChange={(e) =>
          update("toZip", e.target.value.replace(/\D/g, ""))
        }
      />
    </label>

    <label>
      Nach – Stadt
      <input
        type="text"
        placeholder="Zürich"
        value={form.toCity}
        onChange={(e) => update("toCity", e.target.value)}
      />
    </label>
  </div>

  {/* …the rest of your Umzug fieldset stays exactly as it was
       (rooms, extraRooms, workDate, workTime, floorFrom, floorTo,
        elevator, notes)… */}
</fieldset>

          <fieldset>
            <legend>Fotos anhängen</legend>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={onFile}
            />
            {photos.length > 0 && (
              <p className="form-note">
                {photos.length} Datei(en) ausgewählt.
              </p>
            )}
          </fieldset>

          <label className="consent">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(e) => update("consent", e.target.checked)}
              required
            />
            <span>
              Ich akzeptiere die AGB und die Datenschutzerklärung. *
            </span>
          </label>

         <button
  type="submit"
  className="btn btn-gold"
  disabled={status.state === "loading"}
>
  <i className="fas fa-paper-plane" />{" "}
  {status.state === "loading"
    ? "Wird gesendet… bitte warten (bis zu 60 Sek.)"
    : "Anfrage senden"}
</button>

          {status.state === "error" && (
            <p className="form-error">{status.message}</p>
          )}
        </form>
      </div>
    </section>
  );
}