import Link from "next/link";

import { Logo } from "./Logo";
import { NAV_ITEMS, ROUTES } from "@/route";

import { CONTACT_INFO } from "./contact";

const BRAND_TEXT =
  "Doğayla iç içe, köylerimizde ve şehirlerimizde; nişanlar, düğünler ve tüm özel davetleriniz için zarafetle hazırlanmış salonlar.";

/** Salon bilgileri listesi */
const SALON_DETAILS = [
  "Açık Salon: 100 – 700 Kişi",
  "Kapalı Salon: 100 – 350 Kişi",
  "Nişan ve Düğün Organizasyonu",
  "Süsleme ve Ağırlama Hizmetleri",
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    path: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.16c3.2 0 3.58.02 4.85.07 1.17.06 1.8.25 2.22.42.56.21.96.47 1.38.9.42.41.68.81.9 1.37.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.59-.07 4.86c-.06 1.17-.26 1.8-.42 2.22-.22.57-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.86.07s-3.59-.01-4.86-.07c-1.17-.06-1.8-.26-2.23-.42-.57-.22-.96-.48-1.38-.9a3.7 3.7 0 0 1-.9-1.37c-.16-.43-.36-1.06-.42-2.23C2.02 15.59 2 15.21 2 12.01s.02-3.59.07-4.86c.06-1.17.25-1.8.42-2.23.21-.56.47-.96.9-1.38.41-.42.81-.68 1.37-.9.43-.16 1.06-.36 2.23-.41C8.41 2.18 8.8 2.16 12 2.16Zm0 1.98c-3.15 0-3.51.01-4.75.07-1.15.05-1.77.24-2.18.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.41-.35 1.03-.4 2.18-.06 1.24-.07 1.6-.07 4.75s.01 3.51.07 4.75c.05 1.15.24 1.77.4 2.18.22.55.47.94.88 1.35.41.41.8.66 1.35.88.41.16 1.03.35 2.18.4 1.24.06 1.6.07 4.75.07s3.51-.01 4.75-.07c1.15-.05 1.77-.24 2.18-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.41.35-1.03.4-2.18.06-1.24.07-1.6.07-4.75s-.01-3.51-.07-4.75c-.05-1.15-.24-1.77-.4-2.18a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.18-.4-1.24-.06-1.6-.07-4.75-.07Zm0 3.37A6.49 6.49 0 1 1 5.51 12 6.49 6.49 0 0 1 12 7.51Zm0 10.7A4.21 4.21 0 1 0 7.79 12 4.21 4.21 0 0 0 12 18.21Zm6.81-10.82a1.51 1.51 0 1 1-3.02 0 1.51 1.51 0 0 1 3.02 0Z",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/90216000000",
    path: "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.25-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.07.14.2 2.09 3.2 5.07 4.49.71.3 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.34M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.22-3.74.99 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.43 9.89-9.89 9.89M20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65c1.81.93 3.86 1.42 5.94 1.43h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.4Z",
  },
];

/** Sütun başlığı + altındaki altın çizgi */
function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[0.78rem] font-semibold tracking-[0.22em] text-white uppercase">
      {children}
      <span className="mt-3 block h-0.5 w-9 bg-gold-400" aria-hidden="true" />
    </h2>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-ink text-gold-50/80">
      {/* Üstte ince altın şerit */}
      <span
        className="block h-1 w-full bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600"
        aria-hidden="true"
      />

      <div className="bg-[radial-gradient(50rem_26rem_at_10%_-15%,rgba(201,162,39,0.18),transparent_65%)]">
        <div className="container-site py-14 lg:py-18">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* Marka */}
            <div className="sm:col-span-2 lg:col-span-4">
              <Logo variant="light" />

              <p className="mt-6 max-w-sm text-sm leading-relaxed text-gold-50/70">
                {BRAND_TEXT}
              </p>

              <ul className="mt-6 flex items-center gap-3">
                {SOCIALS.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="grid size-10 place-items-center rounded-full border border-gold-400/40 text-gold-200 transition-colors duration-300 hover:border-gold-400 hover:bg-gold-400 hover:text-ink"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="size-[1.15rem] fill-current"
                      >
                        <path d={social.path} />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hızlı menü */}
            <nav aria-label="Alt menü" className="lg:col-span-2">
              <ColumnTitle>Hızlı Menü</ColumnTitle>

              <ul className="mt-6 space-y-3.5">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gold-50/75 transition-colors duration-300 hover:text-gold-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Salon bilgileri */}
            <div className="lg:col-span-3">
              <ColumnTitle>Salon Bilgileri</ColumnTitle>

              <ul className="mt-6 space-y-3.5">
                {SALON_DETAILS.map((detail) => (
                  <li key={detail} className="flex items-start gap-2.5 text-sm">
                    <span
                      className="mt-2 size-1.5 shrink-0 rotate-45 bg-gold-400"
                      aria-hidden="true"
                    />
                    <span className="text-gold-50/75">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* İletişim */}
            <div className="lg:col-span-3">
              <ColumnTitle>İletişim</ColumnTitle>

              <address className="mt-6 space-y-3.5 text-sm not-italic text-gold-50/75">
                <p>{CONTACT_INFO.address}</p>
                <p>
                  <a
                    href={CONTACT_INFO.phoneHref}
                    className="transition-colors duration-300 hover:text-gold-300"
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a
                    href={CONTACT_INFO.emailHref}
                    className="break-all transition-colors duration-300 hover:text-gold-300"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </p>
                <p className="text-gold-50/60">{CONTACT_INFO.workingHours}</p>
              </address>

              <Link
                href={ROUTES.iletisim}
                className="mt-7 inline-block border border-gold-400/70 px-6 py-2.5 text-[0.72rem] font-semibold tracking-[0.2em] text-gold-200 uppercase transition-colors duration-300 hover:bg-gold-400 hover:text-ink"
              >
                Randevu Al
              </Link>
            </div>
          </div>

          {/* Alt satır */}
          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-gold-50/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} Safir Kır Düğün Salonları. Tüm hakları saklıdır.
            </p>

            {/* TODO: Kullanım şartları ve gizlilik politikası sayfaları eklendiğinde
                bu iki metni <Link> ile bağlayacağız. */}
            <div className="flex items-center gap-6">
              <span>Kullanım Şartları</span>
              <span>Gizlilik Politikası</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
