import type { ReactNode } from "react";

import { CONTACT_INFO } from "../../constants/data";
import { ArrowRightIcon, ClockIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "../common/icons";
import { ROUTES } from "@/route";
import Link from "next/link";

import { ContactMap } from "./ContactMap";

const whatsappLink = `${CONTACT_INFO.whatsappHref}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`;

/** İletişim kartı */
function InfoCard({
  icon,
  label,
  value,
  href,
  accent = false,
}: {
  icon: ReactNode;
  label: string;
  value: ReactNode;
  href?: string;
  accent?: boolean;
}) {
  const content = (
    <>
      <span
        className={`grid size-12 shrink-0 place-items-center rounded-full ${
          accent ? "bg-[#25D366]/12 text-[#128C4A]" : "bg-gold-100 text-gold-700"
        }`}
        aria-hidden="true"
      >
        {icon}
      </span>

      <span className="mt-5 block text-[0.7rem] font-medium tracking-[0.22em] text-ink-soft uppercase">{label}</span>

      <span className="mt-2 block text-base text-ink">{value}</span>

      {href && (
        <span className="mt-4 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.18em] text-gold-700 uppercase">
          {href.startsWith("http") ? "Yazın" : "Ara"}
          <ArrowRightIcon className="size-4" />
        </span>
      )}
    </>
  );

  const className =
    "group flex h-full flex-col items-start bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-[0_22px_45px_-30px_rgba(34,30,25,0.55)] sm:p-8";

  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={className}
    >
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}

/** Sayfa başlığı bölümü */
function PageHeading() {
  return (
    <section className="bg-ivory pt-16 pb-14 lg:pt-24 lg:pb-18">
      <div className="container-site">
        <nav aria-label="Site içi yol" className="flex items-center gap-2 text-xs text-ink-soft">
          <Link href={ROUTES.home} className="transition-colors hover:text-gold-700">
            Ana Sayfa
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-gold-700">İletişim</span>
        </nav>

        <p className="mt-8 flex items-center gap-3 text-[0.72rem] font-medium tracking-[0.34em] text-gold-600 uppercase">
          <span className="h-px w-8 bg-gold-400 sm:w-10" aria-hidden="true" />
          İletişim
        </p>

        <h1 className="mt-6 max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">Bize Ulaşın</h1>

        <span className="mt-7 block h-px w-24 bg-gradient-to-r from-gold-500 to-transparent" aria-hidden="true" />

        <p className="mt-7 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
          Salonlarımızı yerinde görmek, tarih ve kapasite için bilgi almak ya da özel bir organizasyon talebi için bize
          ulaşabilirsiniz. Ekibimiz randevu saatleri içinde sizi bekliyor.
        </p>
      </div>
    </section>
  );
}

/** Randevu CTA bandı */
function AppointmentCta() {
  return (
    <section className="bg-ivory pb-16 lg:pb-24">
      <div className="container-site">
        <div className="relative overflow-hidden bg-ink px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
          <span
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600"
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[0.72rem] font-medium tracking-[0.3em] text-gold-300 uppercase">Randevu</p>
              <h2 className="mt-4 max-w-xl text-3xl leading-tight text-white sm:text-4xl">
                Salon Turu ve Teklif için Bizi Arayın
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70">
                Hafta içi ve hafta sonu randevu saatlerimiz açıktır. İlk görüşme için salonlarımızı birlikte
                gezebiliriz.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={CONTACT_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-3 bg-gold-500 px-7 py-4 text-[0.74rem] font-semibold tracking-[0.18em] text-ink uppercase transition-colors duration-300 hover:bg-gold-400"
              >
                <PhoneIcon className="size-4" />
                Sabit Hat
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] px-7 py-4 text-[0.74rem] font-semibold tracking-[0.18em] text-white uppercase transition-colors duration-300 hover:bg-[#1EBE5A]"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactContent() {
  return (
    <>
      <PageHeading />

      {/* İletişim bilgileri */}
      <section className="bg-cream py-14 lg:py-20">
        <div className="container-site">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <InfoCard
              icon={<PhoneIcon />}
              label="Sabit Telefon"
              value={CONTACT_INFO.phoneDisplay}
              href={CONTACT_INFO.phoneHref}
            />

            <InfoCard
              icon={<WhatsAppIcon />}
              label="WhatsApp / Cep"
              value={CONTACT_INFO.mobileDisplay}
              href={whatsappLink}
              accent
            />

            <InfoCard icon={<MailIcon />} label="E-posta" value={CONTACT_INFO.email} href={CONTACT_INFO.emailHref} />

            <InfoCard
              icon={<ClockIcon />}
              label="Çalışma Saatleri"
              value={
                <>
                  {CONTACT_INFO.workingHours}
                  <span className="mt-1 block text-sm text-ink-soft">{CONTACT_INFO.workingHoursNote}</span>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* Harita */}
      <section className="bg-ivory py-14 lg:py-20">
        <div className="container-site">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="flex items-center gap-3 text-[0.72rem] font-medium tracking-[0.3em] text-gold-600 uppercase">
                <MapPinIcon className="size-4 text-gold-500" />
                Harita
              </p>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">Haritada Bulun</h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-ink-soft">
              Salonlarımız Altıeylül ilçesinde, merkeze yakın konumda yer alıyor. Otopark ve ulaşım imkânları mevcuttur.
            </p>
          </div>

          <div className="mt-9 lg:mt-12">
            <ContactMap />
          </div>
        </div>
      </section>

      <AppointmentCta />
    </>
  );
}
