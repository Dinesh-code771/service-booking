export default function SettingsPage() {
  return (
    <section className="space-y-3 rounded-[32px] border border-white/70 bg-white/85 p-6 text-slate-800 shadow-xl shadow-slate-200/60 backdrop-blur-2xl sm:p-8">
      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
        Settings
      </p>
      <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
        Control center
      </h1>
      <p className="text-sm text-slate-600 sm:text-base">
        Manage concierge profiles, notification rules, billing preferences, and
        providers sync without digging through multiple tabs.
      </p>
    </section>
  );
}

