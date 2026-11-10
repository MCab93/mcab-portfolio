"use client";

import type { FormEvent } from "react";

export default function ContactForm({ email }: { email: string }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const body = [
      `Jméno: ${formData.get("name")}`,
      `E-mail: ${formData.get("email")}`,
      "",
      "Zpráva:",
      formData.get("message"),
    ].join("\n");
    const subject = `Poptávka od ${formData.get("name")}`;
    const mailto = `mailto:${email}?${new URLSearchParams({ subject, body })}`;

    window.location.href = mailto;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="visually-hidden" htmlFor="contact-name">
        Vaše jméno
      </label>
      <input
        autoComplete="name"
        id="contact-name"
        name="name"
        placeholder="Vaše jméno"
        required
      />

      <label className="visually-hidden" htmlFor="contact-email">
        E-mail
      </label>
      <input
        autoComplete="email"
        id="contact-email"
        name="email"
        placeholder="E-mail"
        required
        type="email"
      />

      <label className="visually-hidden" htmlFor="contact-message">
        Zpráva o projektu
      </label>
      <textarea
        id="contact-message"
        name="message"
        placeholder="Zpráva o projektu..."
        required
        rows={2}
      />

      <button className="button button-primary" type="submit">
        Odeslat zprávu <span aria-hidden="true">→</span>
      </button>
      <p className="form-note">Otevře se vaše e-mailová aplikace.</p>
    </form>
  );
}
