"use client";

import { useId, useState } from "react";
import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
};

type MobileNavProps = {
  links: NavLink[];
};

export function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const drawerId = useId();

  return (
    <>
      <button
        type="button"
        className="inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-2xl border border-slate-200/70 bg-white/90 p-0 text-slate-800 shadow-sm transition hover:bg-white lg:hidden"
        aria-label="Open navigation"
        aria-expanded={open}
        aria-controls={drawerId}
        onClick={() => setOpen(true)}
      >
        <span className="block h-0.5 w-5 rounded-full bg-current" />
        <span className="block h-0.5 w-5 rounded-full bg-current" />
        <span className="block h-0.5 w-5 rounded-full bg-current" />
      </button>

      <aside
        id={drawerId}
        className={`fixed right-0 top-0 z-40 flex h-screen w-4/5 max-w-xs translate-x-full flex-col gap-6 border-l border-white/60 bg-white/95 p-6 text-slate-900 shadow-[0_10px_60px_rgba(15,23,42,0.2)] transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : ""
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Navigate
            </p>
            <p className="text-sm font-semibold text-slate-900">WE-GOT-YOU</p>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/80 text-lg"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <nav>
          <ul className="flex flex-col gap-3">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-2xl border border-slate-100/70 px-4 py-2 text-base font-semibold text-slate-800 transition hover:border-indigo-100 hover:bg-indigo-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-slate-900/40 lg:hidden"
          aria-label="Close navigation overlay"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}

