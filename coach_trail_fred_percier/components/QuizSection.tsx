"use client";

import { useMemo, useState } from "react";
import { QUIZ, BOOKING_URL } from "@/lib/content";
import { computeResult } from "@/lib/quiz";
import Reveal from "./Reveal";

/*
  QuizSection — mini-quiz interactif (client-side, React state, sans backend).
  Une question a la fois, utilisable au tactile. A la fin : recommandation
  d'offre calculee par scoring + suggestion complementaire.
*/
export default function QuizSection() {
  // -1 = ecran d'intro, 0..n-1 = questions, n = resultat
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(QUIZ.length).fill(null),
  );

  const total = QUIZ.length;
  const isIntro = step === -1;
  const isResult = step >= total;
  const current = !isIntro && !isResult ? QUIZ[step] : null;

  const result = useMemo(
    () => (isResult ? computeResult(answers) : null),
    [isResult, answers],
  );

  const select = (optionIndex: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = optionIndex;
      return next;
    });
    // Avance automatiquement apres un court delai (feedback visuel).
    window.setTimeout(() => setStep((s) => s + 1), 220);
  };

  const restart = () => {
    setAnswers(Array(QUIZ.length).fill(null));
    setStep(-1);
  };

  const progress = isResult
    ? 100
    : isIntro
      ? 0
      : Math.round((step / total) * 100);

  return (
    <section id="programme" className="relative bg-night-2 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-ember">
            Trouver mon programme
          </p>
          <h2 className="font-display text-4xl leading-tight text-bone md:text-5xl">
            En 6 questions, on trouve l'offre faite pour toi.
          </h2>
          <p className="mt-5 leading-relaxed text-bone-dim">
            Réponds honnêtement : cet outil te donne une première orientation.
            L'appel gratuit servira à l'affiner ensemble.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="rounded-3xl border border-forest-line bg-forest/30 p-6 md:p-10">
            {/* Barre de progression */}
            {!isIntro && (
              <div className="mb-8">
                <div className="mb-2 flex items-center justify-between text-xs text-bone-dim">
                  <span>
                    {isResult
                      ? "Résultat"
                      : `Question ${step + 1} / ${total}`}
                  </span>
                  <span>{progress}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-night">
                  <div
                    className="h-full rounded-full bg-ember transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Ecran d'intro */}
            {isIntro && (
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-ember/50 bg-night">
                  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-ember" aria-hidden>
                    <path
                      d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-bone">Prêt·e ? C'est parti.</h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-bone-dim">
                  Moins de deux minutes. Aucune donnée enregistrée, rien à saisir —
                  juste des choix à cliquer.
                </p>
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="mt-7 rounded-full bg-ember px-8 py-3.5 text-base font-semibold text-night transition-all duration-200 hover:-translate-y-0.5 hover:bg-ember-soft"
                >
                  Commencer le questionnaire
                </button>
              </div>
            )}

            {/* Question courante */}
            {current && (
              <div key={current.id}>
                <h3 className="mb-6 font-display text-2xl leading-snug text-bone md:text-3xl">
                  {current.question}
                </h3>
                <div className="space-y-3">
                  {current.options.map((opt, i) => {
                    const selected = answers[step] === i;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => select(i)}
                        className={`flex w-full items-center justify-between gap-4 rounded-xl border px-5 py-4 text-left text-sm transition-all duration-200 md:text-base ${
                          selected
                            ? "border-ember bg-ember/10 text-bone"
                            : "border-forest-line bg-night/30 text-bone-dim hover:border-ember/60 hover:text-bone"
                        }`}
                      >
                        <span>{opt.label}</span>
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors ${
                            selected ? "border-ember bg-ember text-night" : "border-forest-line"
                          }`}
                        >
                          {selected && (
                            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden>
                              <path
                                d="M4 10.5l4 4 8-9"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Navigation retour */}
                <div className="mt-7 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.max(-1, s - 1))}
                    className="text-sm text-bone-dim transition-colors hover:text-bone"
                  >
                    ← Précédent
                  </button>
                  {answers[step] != null && (
                    <button
                      type="button"
                      onClick={() => setStep((s) => s + 1)}
                      className="text-sm font-semibold text-ember transition-colors hover:text-ember-soft"
                    >
                      Suivant →
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Resultat */}
            {isResult && result && (
              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-bone-dim">
                  Notre recommandation
                </p>
                <h3 className="mt-3 font-display text-5xl uppercase tracking-wide text-ember md:text-6xl">
                  {result.offreName}
                </h3>

                <p className="mx-auto mt-6 max-w-lg leading-relaxed text-bone">
                  {result.explanation}
                </p>

                <div className="mx-auto mt-6 max-w-lg rounded-xl border border-forest-line bg-night/40 p-4 text-left">
                  <p className="text-sm leading-relaxed text-bone-dim">
                    <span className="font-semibold text-ember">Pour aller plus loin — </span>
                    {result.complement}
                  </p>
                </div>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-full bg-ember px-8 py-3.5 text-base font-semibold text-night transition-all duration-200 hover:-translate-y-0.5 hover:bg-ember-soft sm:w-auto"
                  >
                    Réserver mon appel gratuit
                  </a>
                  <button
                    type="button"
                    onClick={restart}
                    className="w-full rounded-full border border-forest-line px-8 py-3.5 text-base font-semibold text-bone transition-colors hover:border-ember hover:text-ember sm:w-auto"
                  >
                    Recommencer
                  </button>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
