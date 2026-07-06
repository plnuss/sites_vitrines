"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "success";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Merci d'indiquer votre nom.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Merci d'indiquer une adresse email valide.";
    }
    if (!message) nextErrors.message = "Merci de laisser un message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setStatus("success");
      event.currentTarget.reset();
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent-soft/40 bg-surface p-8 text-center">
        <h2 className="font-serif text-2xl text-foreground">Message envoyé</h2>
        <p className="mt-3 text-muted">
          Merci pour votre message. Je vous réponds généralement sous 48h.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-accent-soft underline-offset-4 hover:underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm text-muted">
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className="rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors focus:border-accent-soft"
          placeholder="Votre nom"
        />
        {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors focus:border-accent-soft"
          placeholder="vous@exemple.fr"
        />
        {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="resize-none rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors focus:border-accent-soft"
          placeholder="Parlez-moi de votre besoin..."
        />
        {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="mt-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-soft"
      >
        Envoyer le message
      </button>
    </form>
  );
}
