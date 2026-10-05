import Link from "next/link";

import { DesktopNav } from "./DesktopNav";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { CONTACT_INFO } from "./navigation";

/**
 * Site başlığı: logo alanı, masaüstü menü ve mobil hamburger menü.
 * Tema renkleri `app/globals.css` içindeki --gold-* / --ivory değişkenlerinden gelir.
 */
export function Header() {
  return (
    // Not: burada `backdrop-blur` kullanılmıyor; aksi halde header, mobil
    // menüdeki `fixed` overlay için containing block olur ve overlay çalışmaz.
    <header className="sticky top-0 z-50 bg-ivory shadow-[0_1px_0_0_rgba(201,162,39,0.35),0_14px_34px_-28px_rgba(34,30,25,0.4)]">
      {/* Üst bilgi şeridi — yalnızca masaüstü */}
      <div className="hidden border-b border-line bg-gold-50/70 lg:block">
        <div className="container-site flex h-9 items-center justify-between text-[0.7rem] tracking-[0.14em] text-ink-soft uppercase">
          <p>{CONTACT_INFO.workingHours}</p>

          <div className="flex items-center gap-7">
            <a
              href={CONTACT_INFO.phoneHref}
              className="transition-colors duration-300 hover:text-gold-700"
            >
              {CONTACT_INFO.phoneDisplay}
            </a>
            <span className="h-3 w-px bg-gold-300" aria-hidden="true" />
            <a
              href={CONTACT_INFO.emailHref}
              className="transition-colors duration-300 hover:text-gold-700"
            >
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Ana bar: logo | menü | randevu butonu */}
      <div className="container-site flex h-18 items-center justify-between gap-6 lg:h-22">
        <Link href="/" className="shrink-0" aria-label="Safir Kır Düğün Salonları - Ana Sayfa">
          <Logo />
        </Link>

        <DesktopNav />

        <div className="flex items-center gap-3">
          <Link
            href="/iletisim"
            className="hidden border border-gold-500 px-6 py-2.5 text-[0.72rem] font-semibold tracking-[0.2em] text-gold-700 uppercase transition-colors duration-300 hover:bg-gold-500 hover:text-white sm:inline-block"
          >
            Randevu Al
          </Link>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
