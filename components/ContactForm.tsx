"use client";

import Link from "next/link";
import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="form"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <h2>Send oss en melding</h2>
      <div className="row">
        <label>
          Navn
          <input name="navn" autoComplete="name" required />
        </label>
        <label>
          Telefon
          <input name="tlf" type="tel" autoComplete="tel" required />
        </label>
      </div>
      <div className="row">
        <label>
          Avdeling
          <select name="avd">
            <option>Løkken Verk</option>
            <option>Surnadal</option>
          </select>
        </label>
        <label>
          Gjelder
          <select name="type">
            <option>Verksted / EU-kontroll</option>
            <option>Kjøpe bil</option>
            <option>Dekk</option>
            <option>Deler</option>
            <option>Annet</option>
          </select>
        </label>
      </div>
      <label>
        Registreringsnummer (valgfritt)
        <input name="reg" autoComplete="off" />
      </label>
      <label>
        Melding
        <textarea name="melding" />
      </label>
      <button className="btn btn-primary" type="submit">
        Send melding
      </button>
      {sent && (
        <p className="ok" role="status">
          Takk! Dette er en demo, så meldingen ble ikke sendt. På den ferdige siden svarer vi deg så raskt vi kan.
        </p>
      )}
      <p className="note">
        Vi bruker opplysningene bare til å svare på henvendelsen. Se <Link href="/personvern">personvern</Link>.
      </p>
    </form>
  );
}
