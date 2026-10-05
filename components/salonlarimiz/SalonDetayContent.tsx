import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@/route";
import { CONTACT_INFO, SALONS } from "../../constants/data";
import { ArrowRightIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "../common/icons";

type Salon = (typeof SALONS)[number];

/** Detay sayfasındaki diğer salon */
function otherSalon(salon: Salon) {
  return SALONS.find((item) => item.id !== salon.id) ?? SALONS[0];
}

/** Galeri görselleri (salonun kendi görseli + ortak salon fotoğrafları) */
const GALLERY = [
  {
    src: "/images/safir_hero_2.jpeg",
    alt: "Çiçeklerle bezeli düğün takı alanı ve avlu dekorasyonu",
  },
  {
    src: "/images/safir_hero_4.jpg",
    alt: "Düğün salonunda hazırlanmış masa düzeni ve ikram alanı",
  },
  {
    src: "/images/safir_hero_7.jpg",
    alt: "Düğün günü ikram ve misafir ağırlama detayı",
  },
];

export function SalonDetayContent({ salon }: { salon: Salon }) {
  const other = otherSalon(salon);

  const whatsappLink = `${CONTACT_INFO.whatsappHref}?text=${encodeURIComponent(
    `${salon.name} hakkında bilgi almak istiyorum.`,
  )}`;

  return (
    <>
      {/* ------------------------------------------------------- Hero */}
      <section className="relative isolate flex min-h-[26rem] items-end overflow-hidden bg-ink sm:min-h-[30rem] lg:min-h-[34rem]">
        <Image src={salon.image} alt={salon.alt} fill priority sizes="100vw" className="object-cover object-center" />

        <div className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/55 to-ink/25" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/35" aria-hidden="true" />

        <div className="container-site relative py-12 lg:py-16">
          <p className="mt-8 flex items-center gap-3 text-[0.7rem] font-medium tracking-[0.34em] text-gold-300 uppercase">
            <span className="h-px w-8 bg-gold-400 sm:w-10" aria-hidden="true" />
            {salon.tagline}
          </p>

          <h1 className="mt-5 text-4xl leading-none font-semibold text-white sm:text-5xl lg:text-6xl">{salon.name}</h1>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="border border-gold-300/60 px-4 py-1.5 text-[0.62rem] font-medium tracking-[0.24em] text-gold-200 uppercase">
              {salon.capacity}
            </span>
            <Link
              href={ROUTES.iletisim}
              className="inline-flex items-center gap-2.5 bg-gold-500 px-6 py-3 text-[0.7rem] font-semibold tracking-[0.2em] text-ink uppercase transition-colors duration-300 hover:bg-gold-400"
            >
              Randevu Al
            </Link>
          </div>
        </div>

        <span className="absolute inset-3 border border-gold-400/25 sm:inset-5" aria-hidden="true" />
      </section>

      {/* ------------------------------------------- Açıklama + bilgiler */}
      <section className="bg-ivory py-16 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <h2 className="text-3xl leading-tight sm:text-4xl">{salon.name} Hakkında</h2>

            <span className="mt-6 block h-px w-20 bg-gradient-to-r from-gold-500 to-transparent" aria-hidden="true" />

            <p className="mt-6 text-sm leading-relaxed text-ink-soft sm:text-base">{salon.description}</p>

            <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
              {salon.name}&apos;de masa yerleşimi, ikram menüsü, sahne ve ses sistemi dâhil her detayı birlikte
              planlıyoruz. Salon turu sonrası net bir teklif ve zaman planı sizinle paylaşılır.
            </p>

            {/* Hizmetler */}
            <ul className="mt-9 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {salon.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-gold-500" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-ink-soft">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bilgi kartı */}
          <aside className="h-fit border border-line bg-white p-7 sm:p-8">
            <h3 className="text-xl">Künye</h3>

            <span className="mt-4 block h-px w-10 bg-gold-400" aria-hidden="true" />

            <dl className="mt-6 space-y-5 text-sm">
              <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
                <dt className="text-ink-soft">Salon</dt>
                <dd className="text-right text-ink">{salon.name}</dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
                <dt className="text-ink-soft">Alan tipi</dt>
                <dd className="text-right text-ink">{salon.tagline}</dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
                <dt className="text-ink-soft">Kapasite</dt>
                <dd className="text-right text-ink">{salon.capacity}</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-ink-soft">Konum</dt>
                <dd className="text-right text-ink">{CONTACT_INFO.district}</dd>
              </div>
            </dl>

            <div className="mt-8 space-y-3">
              <a
                href={CONTACT_INFO.phoneHref}
                className="flex items-center justify-center gap-2.5 bg-gold-500 px-6 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] text-ink uppercase transition-colors duration-300 hover:bg-gold-600 hover:text-white"
              >
                <PhoneIcon className="size-4" />
                {CONTACT_INFO.phoneDisplay}
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 border border-[#25D366]/50 px-6 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] text-[#128C4A] uppercase transition-colors duration-300 hover:bg-[#25D366] hover:text-white"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>

              <Link
                href={ROUTES.iletisim}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] text-gold-700 uppercase transition-colors duration-300 hover:bg-gold-50"
              >
                <MapPinIcon className="size-4" />
                Haritada Gör
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* --------------------------------------------------- Galeri */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="container-site">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl leading-tight sm:text-4xl">{salon.name}&apos;den Kareler</h2>
            <span className="block h-px w-20 bg-gradient-to-r from-gold-500 to-transparent" aria-hidden="true" />
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-3">
            {GALLERY.map((photo, index) => (
              <div
                key={photo.src}
                className={`relative overflow-hidden border border-line bg-ivory ${
                  index === 0 ? "aspect-4/3 sm:aspect-3/4" : "aspect-4/3"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 30rem, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Diğer salon */}
      <section className="bg-ivory py-16 lg:py-24">
        <div className="container-site">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[0.72rem] font-medium tracking-[0.3em] text-gold-600 uppercase">Diğer Salonumuz</p>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">{other.name}</h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
                {other.tagline} · {other.capacity}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={other.href}
                className="inline-flex items-center justify-center gap-2.5 border border-gold-500 px-7 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] text-gold-700 uppercase transition-colors duration-300 hover:bg-gold-500 hover:text-white"
              >
                {other.name}
                <ArrowRightIcon className="size-4" />
              </Link>

              <Link
                href={ROUTES.salonlarimiz}
                className="inline-flex items-center justify-center gap-2.5 bg-gold-500 px-7 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] text-ink uppercase transition-colors duration-300 hover:bg-gold-600 hover:text-white"
              >
                Tüm Salonlar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
