"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { NAV_ITEMS, ROUTES } from "@/route";

import { CONTACT_INFO } from "./contact";

const MENU_ID = "mobile-navigation";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  // Sayfa değişince menüyü kapat (render sırasında state güncellemesi)
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsOpen(false);
  }

  // Esc ile kapatma
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Menü açıkken sayfa kaymasını engelle
  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={MENU_ID}
        aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
        className="grid size-11 place-items-center rounded-full border border-gold-400/60 text-ink transition-colors duration-300 hover:border-gold-500 hover:text-gold-700"
      >
        {/* hamburger ⇄ çarpı ikonu */}
        <span className="relative block h-4 w-6" aria-hidden="true">
          <span
            className={`absolute top-0 left-0 h-px w-full bg-current transition-all duration-300 ${
              isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute bottom-0 left-0 h-px w-full bg-current transition-all duration-300 ${
              isOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {isOpen && (
        <>
          {/* Arkadaki alana tıklayınca kapat */}
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
            className="fixed inset-x-0 top-[var(--header-h)] bottom-0 z-0 cursor-default bg-ink/25 backdrop-blur-[2px] transition-opacity duration-300 starting:opacity-0"
          />

          <div
            id={MENU_ID}
            className="absolute inset-x-0 top-full z-10 origin-top border-t border-gold-300/70 bg-ivory shadow-[0_24px_50px_-24px_rgba(34,30,25,0.35)] transition-all duration-300 starting:-translate-y-3 starting:opacity-0"
          >
            <nav aria-label="Mobil menü" className="container-site py-6">
              <ul className="divide-y divide-line/80">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-baseline justify-between py-4 font-display text-2xl text-ink transition-colors duration-300 hover:text-gold-700"
                    >
                      {item.label}
                      <span
                        className="size-1.5 shrink-0 self-center bg-gold-400"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href={ROUTES.iletisim}
                onClick={() => setIsOpen(false)}
                className="mt-6 block bg-gold-500 py-3.5 text-center text-[0.78rem] font-semibold tracking-[0.2em] text-white uppercase transition-colors duration-300 hover:bg-gold-600"
              >
                Randevu &amp; Salon Turu
              </Link>

              <div className="mt-6 space-y-2 border-t border-line pt-5 text-sm text-ink-soft">
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="block transition-colors hover:text-gold-700"
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
                <a
                  href={CONTACT_INFO.emailHref}
                  className="block break-all transition-colors hover:text-gold-700"
                >
                  {CONTACT_INFO.email}
                </a>
                <p className="text-xs text-ink-soft/80">{CONTACT_INFO.workingHours}</p>
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
