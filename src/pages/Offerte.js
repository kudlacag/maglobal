import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "";
const SERVICES = ["Umzug", "Reinigung", "Montage", "Logistik", "Anderes"];

export default function Offerte() {
  const navigate = useNavigate();
const [form, setForm] = useState({
  service: "Umzug",
  name: "",
  phone: "",
  email: "",

  addressStreet: "",
  addressZip: "",
  addressCity: "",

  workDate: "",
  workTime: "",
  notes: "",
  consent: false,
});
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

const onSubmit = async (e) => {
  e.preventDefault();
  if (!form.consent) {
    setStatus({ state: "error", message: "Bitte AGB / Datenschutz bestätigen." });
    return;
  }
  setStatus({ state: "loading", message: "Wird gesendet…" });

  try {
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));

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

    const raw = await res.text();
    let data = {};
    try {
      data = raw ? JSON.parse(raw) : {};
    } catch {
      console.error("[offerte] Non-JSON:", raw.slice(0, 500));
      throw new Error("Unerwartete Antwort vom Server.");
    }

    if (!res.ok) {
      console.error("[offerte] Server error:", res.status, data);
      throw new Error(data.error || `Server error (${res.status})`);
    }

    navigate("/booking-success", {
      state: { ref: data.reference || null, email: form.email },
    });
  } catch (err) {
    console.error("[offerte] failed:", err);
    const msg =
      err.name === "AbortError"
        ? "Zeitüberschreitung. Bitte E-Mails prüfen und ggf. erneut senden."
        : err.message || "Senden fehlgeschlagen.";
    setStatus({ state: "error", message: msg });
  }
};

  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Offerte anfragen</span>
        <h1 className="section-title">Erzählen Sie uns, was ansteht.</h1>
        <p className="form-note">
          Eine Anfrage ist noch keine bestätigte Buchung. Die Angaben dienen
          der Offertabklärung.
        </p>

        <form className="booking-form" onSubmit={onSubmit} noValidate>
          <fieldset>
            <legend>Service</legend>
            <label>
              Bereich *
              <select
                value={form.service}
                onChange={(e) => update("service", e.target.value)}
              >
                {SERVICES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </label>
          </fieldset>

          <fieldset>
  <legend>Kontakt</legend>

  <label>
    Name *
    <input
      required
      value={form.name}
      onChange={(e) => update("name", e.target.value)}
    />
  </label>

  <label>
    Telefon *
    <input
      required
      type="tel"
      value={form.phone}
      onChange={(e) => update("phone", e.target.value)}
    />
  </label>

  <label>
    E-Mail *
    <input
      required
      type="email"
      value={form.email}
      onChange={(e) => update("email", e.target.value)}
    />
  </label>

  <label>
    Strasse &amp; Nr. *
    <input
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
        required
        placeholder="Zürich"
        value={form.addressCity}
        onChange={(e) => update("addressCity", e.target.value)}
      />
    </label>
  </div>
</fieldset>

          <fieldset>
            <legend>Details</legend>
            <label>Datum<input type="date" value={form.workDate}
              onChange={(e) => update("workDate", e.target.value)} /></label>
            <label>Uhrzeit<input type="time" value={form.workTime}
              onChange={(e) => update("workTime", e.target.value)} /></label>
            <label>Nachricht
              <textarea rows="4" value={form.notes}
                onChange={(e) => update("notes", e.target.value)} />
            </label>
          </fieldset>

          <label className="consent">
            <input type="checkbox" checked={form.consent}
              onChange={(e) => update("consent", e.target.checked)} required />
            <span>Ich akzeptiere die AGB und die Datenschutzerklärung. *</span>
          </label>

          <button type="submit" className="btn btn-gold"
            disabled={status.state === "loading"}>
            <i className="fas fa-paper-plane" />{" "}
            {status.state === "loading" ? "Wird gesendet…" : "Anfrage senden"}
          </button>

          {status.state === "error" && <p className="form-error">{status.message}</p>}
        </form>
      </div>
    </section>
  );
}