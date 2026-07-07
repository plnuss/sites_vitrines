"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (values.name.trim().length < 2) e.name = "Merci d'indiquer votre nom.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "Adresse email invalide.";
    if (values.message.trim().length < 10)
      e.message = "Votre message est un peu court (10 caractères min.).";
    return e;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setStatus("loading");
    // Simulation d'envoi (site de démonstration)
    setTimeout(() => setStatus("success"), 900);
  }

  const field =
    "w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]/60 px-4 py-3 text-sm text-white placeholder:text-[var(--color-text-muted)] outline-none transition-all duration-200 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/30";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/8 p-10 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent)] text-3xl text-white">
          ✓
        </div>
        <h3 className="mt-5 text-xl font-semibold text-white">Message envoyé&nbsp;!</h3>
        <p className="mt-2 max-w-sm text-sm text-[var(--color-text-muted)]">
          Merci {values.name.split(" ")[0]}. Je reviens vers vous sous 24&nbsp;h.
          (Ceci est une démonstration&nbsp;: aucun email n'a réellement été
          envoyé.)
        </p>
        <button
          onClick={() => {
            setValues({ name: "", email: "", message: "" });
            setStatus("idle");
          }}
          className="mt-6 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[var(--color-accent)]"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white">
          Nom complet
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="Marie Dupont"
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          className={field}
        />
        {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="marie.dupont@email.com"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          className={field}
        />
        {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white">
          Votre message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Parlez-moi de votre besoin, de vos attentes…"
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          className={`${field} resize-none`}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[rgba(127,119,221,0.35)] transition-all duration-300 hover:bg-[var(--color-accent-soft)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Envoi en cours…
          </>
        ) : (
          <>
            Envoyer mon message
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </>
        )}
      </button>

      <p className="text-center text-xs text-[var(--color-text-muted)]">
        Vos données restent confidentielles et ne sont jamais partagées.
      </p>
    </form>
  );
}
