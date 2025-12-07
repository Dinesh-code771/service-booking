export default function PersonaSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-3xl border border-white/70 bg-white/70 p-5 shadow-inner shadow-white/40 backdrop-blur"
        >
          <div className="mb-4 h-5 w-32 rounded-full bg-slate-200/80" />
          <div className="mb-2 h-4 w-full rounded-full bg-slate-200/70" />
          <div className="mb-2 h-4 w-3/4 rounded-full bg-slate-200/70" />
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-block h-6 w-16 rounded-full bg-slate-200/60" />
            <span className="inline-block h-6 w-12 rounded-full bg-slate-200/60" />
            <span className="inline-block h-6 w-20 rounded-full bg-slate-200/60" />
          </div>
          <div className="mt-5 h-10 w-full rounded-2xl bg-slate-200/70" />
        </div>
      ))}
    </div>
  );
}

