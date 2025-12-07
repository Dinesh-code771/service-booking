import React from "react";

const personas = [
  {
    title: "Power Planner",
    description:
      "You thrive on seamless agendas and concierge-level coordination.",
    tags: ["Corporate", "Priority support", "Multi-city"],
  },
  {
    title: "Wellness Enthusiast",
    description:
      "Curated spa, therapy, and recovery sessions that match your rhythms.",
    tags: ["Mind & body", "Seasonal plans", "Certified pros"],
  },
  {
    title: "Household Hero",
    description:
      "Home services, repairs, and recurring care to keep your space set.",
    tags: ["Home care", "Verified", "On your schedule"],
  },
  {
    title: "Glow Seeker",
    description:
      "Beauty, grooming, and on-demand glam squads when you need to shine.",
    tags: ["Beauty pros", "After-hours", "Travel-ready"],
  },
];
async function getPersonas() {
  //  wait for 3 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return personas;
}

export default async function PersonaliseContent() {
  const personas = await getPersonas();
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {personas.map((persona) => (
        <article
          className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-inner shadow-white/50 backdrop-blur"
          key={persona.title}
        >
          <header className="space-y-1">
            <h2 className="text-lg font-semibold text-slate-900">
              {persona.title}
            </h2>
            <p className="text-sm text-slate-500">{persona.description}</p>
          </header>
          <div className="mt-3 flex flex-wrap gap-2">
            {persona.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600"
              >
                {tag}
              </span>
            ))}
          </div>
          <button className="mt-4 w-full rounded-2xl border border-slate-200/80 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-400">
            This is me
          </button>
        </article>
      ))}
    </div>
  );
}
