"use client";

import type { FormEvent } from "react";
import { useState } from "react";

type SubmissionState =
  | { status: "idle" | "sending" }
  | { status: "success" }
  | { status: "error"; message: string };

export default function ContactForm() {
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submission.status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === "string") body.append(key, value);
    });

    if (["localhost", "127.0.0.1", "[::1]"].includes(window.location.hostname)) {
      setSubmission({
        status: "error",
        message:
          "Odesílání formuláře je dostupné až po nasazení na Netlify. Zatím mi prosím napište přímo.",
      });
      return;
    }

    setSubmission({ status: "sending" });

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!response.ok) {
        throw new Error(`Odeslání formuláře selhalo (${response.status}).`);
      }

      form.reset();
      setSubmission({ status: "success" });
    } catch (error) {
      console.error("Nepodařilo se odeslat kontaktní formulář.", error);
      setSubmission({
        status: "error",
        message: "Zprávu se nepodařilo odeslat. Zkuste to prosím znovu nebo mi napište přímo.",
      });
    }
  }

  return (
    <>
      <form
        className="contact-form"
        name="contact"
        method="POST"
        action="/__forms.html"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="honeypot" aria-hidden="true">
          <label>
            Nevyplňujte toto pole
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>

        <div className="form-field">
          <label htmlFor="contact-name">Jméno</label>
          <input
            autoComplete="name"
            id="contact-name"
            name="name"
            placeholder="Jak vám mám říkat?"
            required
            minLength={2}
            maxLength={100}
          />
        </div>

        <div className="form-field">
          <label htmlFor="contact-email">E-mail</label>
          <input
            autoComplete="email"
            id="contact-email"
            name="email"
            placeholder="vas@email.cz"
            required
            maxLength={254}
            type="email"
          />
        </div>

        <div className="form-field">
          <label htmlFor="contact-topic">S čím potřebujete pomoci?</label>
          <select id="contact-topic" name="topic" required defaultValue="">
            <option value="" disabled>
              Vyberte oblast spolupráce
            </option>
            <option value="Webové stránky nebo aplikace">Webové stránky nebo aplikace</option>
            <option value="Android aplikace">Android aplikace</option>
            <option value="Frontend vývoj">Frontend vývoj</option>
            <option value="Jiné">Jiné</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="contact-message">Stručný popis projektu</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Co potřebujete vytvořit nebo upravit?"
            required
            minLength={10}
            maxLength={5000}
            rows={5}
          />
        </div>

        <button
          className="button button-primary"
          type="submit"
          disabled={submission.status === "sending"}
        >
          {submission.status === "sending" ? "Odesílám…" : "Odeslat poptávku"}
          <span aria-hidden="true">→</span>
        </button>

        <p
          className={`form-status${submission.status === "error" ? " form-status-error" : ""}`}
          role={submission.status === "error" ? "alert" : "status"}
          aria-live={submission.status === "error" ? "assertive" : "polite"}
          aria-atomic="true"
        >
          {submission.status === "success" &&
            "Děkuji za zprávu. Poptávka byla úspěšně odeslána."}
          {submission.status === "error" && submission.message}
        </p>
      </form>
    </>
  );
}
