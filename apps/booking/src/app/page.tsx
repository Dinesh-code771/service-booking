import { Suspense } from "react";
import PersonaliseContent from "./_components/PersonaliseContent";
import PersonaSkeleton from "./_components/PersonaSkeleton";

export default async function Home() {
  return (
    <section className="flex max-h-[70dvh] flex-col gap-6 overflow-y-auto rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur-2xl sm:p-10">
      <div className="space-y-5">
        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
          Personalize your feed
        </p>
        <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
          What best describes you today?
          <span className="block text-indigo-500">
            Pick a lane to unlock curated services.
          </span>
        </h1>
        <p className="text-base text-slate-600">
          Tell WE-GOT-YOU who you are right now and we surface the bookings,
          experts, and bundles that match your pace. Tap a persona to tune your
          dashboard.
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-2xl bg-linear-to-r from-indigo-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:translate-y-0.5">
            Start matching
          </button>
          <button className="rounded-2xl border border-slate-200/80 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400">
            Browse all services
          </button>
        </div>
      </div>
      <div className="lg:gap-10">
        <Suspense fallback={<PersonaSkeleton />}>
          <PersonaliseContent />
        </Suspense>
      </div>
    </section>
  );
}
