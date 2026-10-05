import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@/route";
import { CONTACT_INFO, SALONS } from "../../constants/data";
import { ArrowRightIcon } from "../common/icons";

/**
 * Salon kartı — ekranı ikiye bölünen düzende bir salonu tanıtır.
 * Not: Salon detay sayfaları eklendiğinde `article` yerine `Link` kullanılabilir.
 */
function SalonPanel({ salon }: { salon: (typeof SALONS)[number] }) {
  return (
    <article className="group relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden lg:min-h-[calc(100lvh_-_var(--header-h))]">
      <Image
        src={salon.image}
        alt={salon.alt}
        fill
        priority
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
      />

      {/* Okunabilirlik katmanları */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/20 transition-opacity duration-700 group-hover:from-ink/85"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* İçerik */}
      <div className="relative px-5 py-10 sm:px-8 lg:px-12 lg:py-14 xl:px-16">
        {/* Kapasite rozeti */}
        <p className="inline-block border border-gold-300/60 px-4 py-1.5 text-[0.62rem] font-medium tracking-[0.24em] text-gold-200 uppercase">
          {salon.capacity}
        </p>

        <h2 className="mt-5 text-4xl leading-none font-semibold text-white sm:text-5xl lg:text-6xl">
          {salon.name}
        </h2>

        <p className="mt-3 text-[0.7rem] font-medium tracking-[0.3em] text-gold-300 uppercase">
          {salon.tagline}
        </p>

        <span
          className="mt-6 block h-px w-16 bg-gold-400 transition-all duration-500 group-hover:w-28"
          aria-hidden="true"
        />

        <p className="mt-6 max-w-md text-sm leading-relaxed text-white/80">
          {salon.description}
        </p>

        {/* Hizmetler */}
        <ul className="mt-7 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {salon.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span
                className="mt-2 size-1.5 shrink-0 rotate-45 bg-gold-400"
                aria-hidden="true"
              />
              <span className="text-sm text-white/75">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href={salon.href}
            className="inline-flex items-center justify-center gap-3 bg-gold-500 px-7 py-3.5 text-[0.72rem] font-semibold tracking-[0.2em] text-ink uppercase transition-colors duration-300 hover:bg-gold-400"
          >
            Salonu İncele
            <ArrowRightIcon className="size-4" />
          </Link>

          <Link
            href={ROUTES.iletisim}
            className="inline-flex items-center justify-center border border-white/40 px-7 py-3.5 text-[0.72rem] font-semibold tracking-[0.2em] text-white uppercase transition-colors duration-300 hover:border-gold-300 hover:bg-gold-300 hover:text-ink"
          >
            Randevu Al
          </Link>
        </div>
      </div>
    </article>
  );
}

export function SalonlarimizContent() {
  return (
    <section className="bg-ink">
      {/* Ekranı ikiye bölünen salon seçimi */}
      <div className="grid lg:grid-cols-2">
        {SALONS.map((salon, index) => (
          <div
            key={salon.id}
            className={index !== 0 ? "lg:border-l lg:border-white/10" : ""}
          >
            <SalonPanel salon={salon} />
          </div>
        ))}
      </div>

      {/* Alt bilgi şeridi */}
      <div className="border-t border-white/10 bg-ink">
        <div className="container-site flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/70">
            İki salonumuzda da aynı ekip, aynı ekipman ve aynı misafirperverlik
            standartları geçerlidir.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={CONTACT_INFO.phoneHref}
              className="inline-flex items-center justify-center px-6 py-3 text-[0.72rem] font-semibold tracking-[0.18em] text-gold-200 uppercase transition-colors duration-300 hover:bg-gold-400 hover:text-ink"
            >
              {CONTACT_INFO.phoneDisplay}
            </a>

            <Link
              href={ROUTES.kurumsal}
              className="inline-flex items-center justify-center border border-gold-400/70 px-6 py-3 text-[0.72rem] font-semibold tracking-[0.18em] text-gold-200 uppercase transition-colors duration-300 hover:bg-gold-400 hover:text-ink"
            >
              Kurumsal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
