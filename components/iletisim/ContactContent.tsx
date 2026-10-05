import { CONTACT_INFO, MAP_EMBED_URL } from "../../constants/data";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "../common/icons";

const whatsappLink = `${CONTACT_INFO.whatsappHref}?text=${encodeURIComponent(
  CONTACT_INFO.whatsappMessage,
)}`;

/** İletişim satırı (ikon + etiket + değer) */
function ContactRow({
  icon,
  label,
  value,
  href,
  external = false,
  accent = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  accent?: boolean;
}) {
  const inner = (
    <>
      <span
        className={`grid size-10 shrink-0 place-items-center rounded-full ${
          accent ? "bg-[#25D366]/12 text-[#128C4A]" : "bg-gold-100 text-gold-700"
        }`}
        aria-hidden="true"
      >
        {icon}
      </span>

      <span className="min-w-0">
        <span className="block text-[0.66rem] font-medium tracking-[0.22em] text-ink-soft uppercase">
          {label}
        </span>
        <span className="mt-1 block text-sm break-words text-ink sm:text-base">
          {value}
        </span>
      </span>
    </>
  );

  const className =
    "flex items-start gap-4 border-b border-line py-3.5 transition-colors duration-300 last:border-b-0";

  return href ? (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${className} hover:bg-gold-50/60`}
    >
      {inner}
    </a>
  ) : (
    <div className={className}>{inner}</div>
  );
}

export function ContactContent() {
  return (
    <section className="bg-ivory">
      <div className="container-site py-8 lg:py-12">
        <div className="grid items-stretch gap-8 lg:min-h-[32rem] lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          {/* ---------------- Sol: başlık + iletişim bilgileri ---------------- */}
          <div className="flex flex-col">
            <p className="flex items-center gap-3 text-[0.7rem] font-medium tracking-[0.34em] text-gold-600 uppercase">
              <span className="h-px w-8 bg-gold-400" aria-hidden="true" />
              İletişim
            </p>

            <h1 className="mt-5 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Bize Ulaşın
            </h1>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
              Salon turu, tarih ve kapasite için randevu oluşturabilir ya da
              WhatsApp üzerinden hızlıca bilgi alabilirsiniz.
            </p>

            {/* İletişim listesi */}
            <div className="mt-7 border-t border-line">
              <ContactRow
                icon={<PhoneIcon className="size-[1.15rem]" />}
                label="Sabit Telefon"
                value={CONTACT_INFO.phoneDisplay}
                href={CONTACT_INFO.phoneHref}
              />

              <ContactRow
                icon={<WhatsAppIcon className="size-[1.15rem]" />}
                label="WhatsApp / Cep"
                value={CONTACT_INFO.mobileDisplay}
                href={whatsappLink}
                external
                accent
              />

              <ContactRow
                icon={<MailIcon className="size-[1.15rem]" />}
                label="E-posta"
                value={CONTACT_INFO.email}
                href={CONTACT_INFO.emailHref}
              />

              <ContactRow
                icon={<ClockIcon className="size-[1.15rem]" />}
                label="Çalışma Saatleri"
                value={`${CONTACT_INFO.workingHours} · ${CONTACT_INFO.workingHoursNote}`}
              />
            </div>

            {/* Aksiyonlar */}
            <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
              <a
                href={CONTACT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-gold-500 px-6 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] text-ink uppercase transition-colors duration-300 hover:bg-gold-600 hover:text-white"
              >
                <MapPinIcon className="size-4" />
                Yol Tarifi Al
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 border border-gold-500 px-6 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] text-gold-700 uppercase transition-colors duration-300 hover:bg-gold-500 hover:text-white"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>

          {/* ---------------- Sağ: harita ---------------- */}
          <div className="relative min-h-[19rem] overflow-hidden border border-line sm:min-h-[22rem] lg:min-h-0">
            <iframe
              src={MAP_EMBED_URL}
              title="Safir Kır Düğün Salonları — Altıeylül / Balıkesir konumu"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />

            {/* Harita üzerinde adres kartı */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 sm:p-4">
              <div className="pointer-events-auto flex items-start gap-3 bg-white/95 p-4 backdrop-blur-sm">
                <MapPinIcon
                  className="mt-0.5 size-5 shrink-0 text-gold-600"
                  aria-hidden="true"
                />
                <address className="text-xs leading-relaxed text-ink not-italic sm:text-sm">
                  <span className="block font-medium">{CONTACT_INFO.address}</span>
                  <span className="mt-0.5 block text-ink-soft">
                    {CONTACT_INFO.district}
                  </span>
                </address>
              </div>
            </div>

            {/* Altın çerçeve */}
            <span
              className="pointer-events-none absolute inset-0 border border-gold-400/40"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
