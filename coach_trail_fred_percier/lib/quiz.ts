/*
  quiz.ts — Logique de scoring du quiz "Trouver mon programme".
  Chaque reponse ajoute des points aux trois offres ; l'offre gagnante est
  recommandee, avec une explication et une suggestion complementaire.
*/
import { OFFRES, QUIZ, type OffreId, type QuizOption } from "./content";

export interface QuizResult {
  offreId: OffreId;
  offreName: string;
  explanation: string;
  complement: string;
}

const OFFRE_NAME: Record<OffreId, string> = {
  essentiel: "Essentiel",
  performance: "Performance",
  ultra: "Ultra",
};

/**
 * Calcule la recommandation a partir des reponses (index d'option par question).
 * @param answers tableau d'index, aligne sur QUIZ (peut contenir des trous)
 */
export function computeResult(answers: (number | null)[]): QuizResult {
  const scores: Record<OffreId, number> = { essentiel: 0, performance: 0, ultra: 0 };
  const tags = new Set<NonNullable<QuizOption["tags"]>[number]>();

  QUIZ.forEach((q, i) => {
    const choice = answers[i];
    if (choice == null) return;
    const option = q.options[choice];
    if (!option) return;
    (Object.keys(scores) as OffreId[]).forEach((k) => {
      scores[k] += option.scores[k];
    });
    option.tags?.forEach((t) => tags.add(t));
  });

  // Offre gagnante (ordre de preference stable en cas d'egalite : ultra > performance > essentiel
  // pour ne pas sous-dimensionner un profil ambitieux).
  const order: OffreId[] = ["ultra", "performance", "essentiel"];
  let winner: OffreId = "essentiel";
  let best = -Infinity;
  for (const id of order) {
    if (scores[id] > best) {
      best = scores[id];
      winner = id;
    }
  }

  return {
    offreId: winner,
    offreName: OFFRE_NAME[winner],
    explanation: buildExplanation(winner, tags),
    complement: buildComplement(winner, tags),
  };
}

function buildExplanation(
  winner: OffreId,
  tags: Set<string>,
): string {
  const base: Record<OffreId, string> = {
    essentiel:
      "l'offre ESSENTIEL correspond le mieux à ton profil : tu cherches à structurer ta pratique ou à préparer une première échéance, avec un cadre clair et un suivi mensuel qui laisse de la place à ta vie.",
    performance:
      "l'offre PERFORMANCE correspond le mieux à ton profil : tu as un objectif chronométré ambitieux et tu es prêt·e à t'entraîner sérieusement. Le suivi hebdomadaire et le renforcement intégré sont là pour te faire passer un cap.",
    ultra:
      "l'offre ULTRA correspond le mieux à ton profil : ton objectif est long et exigeant, il demande un plan complet (trail, renforcement, mental) et un accompagnement rapproché jusqu'au jour J.",
  };
  return `D'après tes réponses, ${base[winner]}`;
}

function buildComplement(winner: OffreId, tags: Set<string>): string {
  if (winner === "essentiel") {
    if (tags.has("renfo")) {
      return "Tu as coché le renforcement musculaire : si tu veux vraiment accélérer, l'offre PERFORMANCE l'intègre directement à ton plan.";
    }
    return "Si un objectif chronométré se précise, tu pourras facilement basculer vers l'offre PERFORMANCE pour un suivi plus rapproché.";
  }

  if (winner === "performance") {
    if (tags.has("nutrition")) {
      return "Tu souhaites un accompagnement nutrition : tu pourrais envisager l'offre PERFORMANCE avec un module nutrition en option, ou passer à l'ULTRA si ton objectif devient long.";
    }
    if (tags.has("long")) {
      return "Ton échéance est lointaine : si tu vises un objectif long (trail, ultra), l'offre ULTRA pourrait devenir pertinente sur la fin de préparation.";
    }
    return "Si ton objectif s'oriente vers un trail long ou un ultra, l'offre ULTRA prendra le relais avec la nutrition et le suivi hebdomadaire illimité.";
  }

  // ultra
  if (tags.has("urgent")) {
    return "Ton échéance est proche : on calibrera la charge dès le premier appel pour arriver prêt·e sans prendre de risque. Un focus renforcement et récupération sera prioritaire.";
  }
  return "On pourra ajouter des blocs de reconnaissance de parcours et affiner la stratégie de ravitaillement au fil de la préparation.";
}
