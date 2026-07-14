"use client";

import { FormEvent, useState } from "react";
import { contact, siteInfo } from "@/app/content";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/app/components/ui/Icons";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nom = form.get("nom");
    const email = form.get("email");
    const message = form.get("message");

    const subject = encodeURIComponent(`Contact site — ${nom}`);
    const body = encodeURIComponent(
      `Nom : ${nom}\nEmail : ${email}\n\nMessage :\n${message}`
    );
    window.location.href = `mailto:${siteInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-script text-2xl sm:text-3xl text-sauge-dark">
            {contact.eyebrow}
          </span>
          <h2 className="mt-1 font-serif text-3xl sm:text-4xl font-medium text-brun">
            {contact.title}
          </h2>
          <p className="mt-4 text-brun-soft text-base sm:text-lg">
            {contact.subtitle}
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 rounded-[2rem] bg-white p-8 sm:p-10 border border-brun/5">
            {sent ? (
              <div className="py-10 text-center">
                <h3 className="font-serif text-2xl text-brun">
                  Message prêt à partir
                </h3>
                <p className="mt-3 text-brun-soft leading-relaxed">
                  Votre logiciel de messagerie s&apos;est ouvert avec votre
                  message pré-rempli. Envoyez-le pour que Camille puisse vous
                  répondre.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="c-nom"
                      className="block text-sm font-medium text-brun mb-1.5"
                    >
                      Nom
                    </label>
                    <input
                      id="c-nom"
                      name="nom"
                      type="text"
                      required
                      className="w-full rounded-xl border border-brun/15 bg-cream px-4 py-2.5 text-brun placeholder:text-brun-soft/50 focus:outline-none focus:ring-2 focus:ring-miel/50 transition-shadow duration-250"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="c-email"
                      className="block text-sm font-medium text-brun mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-brun/15 bg-cream px-4 py-2.5 text-brun placeholder:text-brun-soft/50 focus:outline-none focus:ring-2 focus:ring-miel/50 transition-shadow duration-250"
                      placeholder="vous@exemple.fr"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="c-message"
                    className="block text-sm font-medium text-brun mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-xl border border-brun/15 bg-cream px-4 py-2.5 text-brun placeholder:text-brun-soft/50 focus:outline-none focus:ring-2 focus:ring-miel/50 transition-shadow duration-250 resize-none"
                    placeholder="Votre message..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-miel px-7 py-3 text-sm font-semibold text-cream shadow-md hover:bg-miel-light transition-colors duration-250"
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 rounded-[2rem] bg-sauge/10 p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wide text-sauge-dark">
                  Email
                </span>
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="mt-1 block text-brun hover:text-miel transition-colors duration-250"
                >
                  {siteInfo.email}
                </a>
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wide text-sauge-dark">
                  Téléphone
                </span>
                <span className="mt-1 block text-brun">{siteInfo.phone}</span>
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wide text-sauge-dark">
                  Cabinet
                </span>
                <span className="mt-1 block text-brun">
                  {siteInfo.address}
                </span>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href={siteInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-brun hover:text-miel hover:-translate-y-0.5 transition-all duration-250"
              >
                <InstagramIcon />
              </a>
              <a
                href={siteInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-brun hover:text-miel hover:-translate-y-0.5 transition-all duration-250"
              >
                <FacebookIcon />
              </a>
              <a
                href={siteInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-brun hover:text-miel hover:-translate-y-0.5 transition-all duration-250"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
