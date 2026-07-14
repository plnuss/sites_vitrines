"use client";

import { FormEvent, useState } from "react";
import { siteInfo } from "@/app/content";
import { CloseIcon } from "@/app/components/ui/Icons";

export function OrderForm() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nom = form.get("nom");
    const quantite = form.get("quantite");
    const email = form.get("email");

    const subject = encodeURIComponent("Commande — Miel des Clairières");
    const body = encodeURIComponent(
      `Nom : ${nom}\nQuantité souhaitée : ${quantite}\nEmail : ${email}\n\n(Formulaire de commande — aucun paiement n'a été effectué. Camille vous recontactera pour finaliser la commande.)`
    );
    window.location.href = `mailto:${siteInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full inline-flex items-center justify-center rounded-full bg-miel px-6 py-3.5 text-sm sm:text-base font-semibold text-cream shadow-md hover:bg-miel-light hover:-translate-y-0.5 transition-all duration-300"
      >
        Commander
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Fermer"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-brun/50 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-md rounded-[2rem] bg-cream p-8 shadow-2xl">
            <button
              type="button"
              aria-label="Fermer le formulaire"
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-brun-soft hover:text-brun transition-colors duration-250"
            >
              <CloseIcon />
            </button>

            {sent ? (
              <div className="text-center py-6">
                <h3 className="font-serif text-2xl text-brun">Merci !</h3>
                <p className="mt-3 text-brun-soft leading-relaxed">
                  Votre logiciel de messagerie s&apos;est ouvert avec votre
                  demande pré-remplie. Il ne reste plus qu&apos;à l&apos;envoyer
                  — Camille reviendra vers vous rapidement pour finaliser la
                  commande.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setSent(false);
                  }}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-sauge px-6 py-2.5 text-sm font-semibold text-cream hover:bg-sauge-dark transition-colors duration-250"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl text-brun">
                  Commander le Miel des Clairières
                </h3>
                <p className="mt-2 text-sm text-brun-soft leading-relaxed">
                  Ce formulaire ouvre un e-mail pré-rempli — aucun paiement
                  n&apos;est demandé ici, la commande est confirmée
                  directement avec Camille.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-sm font-medium text-brun mb-1.5"
                    >
                      Nom
                    </label>
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      required
                      className="w-full rounded-xl border border-brun/15 bg-white px-4 py-2.5 text-brun placeholder:text-brun-soft/50 focus:outline-none focus:ring-2 focus:ring-miel/50 transition-shadow duration-250"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="quantite"
                      className="block text-sm font-medium text-brun mb-1.5"
                    >
                      Quantité souhaitée
                    </label>
                    <select
                      id="quantite"
                      name="quantite"
                      required
                      className="w-full rounded-xl border border-brun/15 bg-white px-4 py-2.5 text-brun focus:outline-none focus:ring-2 focus:ring-miel/50 transition-shadow duration-250"
                    >
                      <option value="1 pot de 250g (8€)">
                        1 pot de 250g (8€)
                      </option>
                      <option value="1 pot de 500g (14€)">
                        1 pot de 500g (14€)
                      </option>
                      <option value="2 pots de 500g (28€)">
                        2 pots de 500g (28€)
                      </option>
                      <option value="Autre quantité">Autre quantité</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-brun mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-brun/15 bg-white px-4 py-2.5 text-brun placeholder:text-brun-soft/50 focus:outline-none focus:ring-2 focus:ring-miel/50 transition-shadow duration-250"
                      placeholder="vous@exemple.fr"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-2 inline-flex items-center justify-center rounded-full bg-miel px-6 py-3 text-sm font-semibold text-cream shadow-md hover:bg-miel-light transition-colors duration-250"
                  >
                    Envoyer ma demande
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
