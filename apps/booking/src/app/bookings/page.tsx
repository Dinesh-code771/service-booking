export default function BookingsPage() {
  return (
    <section className="space-y-3 rounded-[32px] border border-white/70 bg-white/85 p-6 text-slate-800 shadow-xl shadow-slate-200/60 backdrop-blur-2xl sm:p-8">
      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
        Bookings
      </p>
      <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
        All service bookings
      </h1>
      <p className="text-sm text-slate-600 sm:text-base">
        Monitor confirmations, dispatch updates, and concierge-held slots from a
        single queue. Filter by crew, tag, or urgency without leaving the view.
      </p>
    </section>
  );
}

