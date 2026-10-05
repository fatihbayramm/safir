import Link from "next/link";

import { Logo } from "./Logo";
import { NAV_ITEMS, ROUTES } from "@/route";

import { CONTACT_INFO } from "../../constants/data";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./icons";

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
    Icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    Icon: InstagramIcon,
  },
  {
    label: "WhatsApp",
    href: CONTACT_INFO.whatsappHref,
    Icon: WhatsAppIcon,
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
      <span className="block h-1 w-full bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600" aria-hidden="true" />

      <div className="bg-[radial-gradient(50rem_26rem_at_10%_-15%,rgba(201,162,39,0.18),transparent_65%)]">
        <div className="container-site py-14 lg:py-18">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* Marka */}
            <div className="sm:col-span-2 lg:col-span-4">
              <Logo variant="light" />

              <p className="mt-6 max-w-sm text-sm leading-relaxed text-gold-50/70">{BRAND_TEXT}</p>

              <ul className="mt-6 flex items-center gap-3">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid size-10 place-items-center rounded-full border border-gold-400/40 text-gold-200 transition-colors duration-300 hover:border-gold-400 hover:bg-gold-400 hover:text-ink"
                    >
                      <Icon className="size-[1.15rem]" />
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
                    <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-gold-400" aria-hidden="true" />
                    <span className="text-gold-50/75">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* İletişim */}
            <div className="lg:col-span-3">
              <ColumnTitle>İletişim</ColumnTitle>

              <address className="mt-6 space-y-3.5 text-sm not-italic text-gold-50/75">
                <p>
                  {CONTACT_INFO.address}
                  <br />
                  {CONTACT_INFO.district}
                </p>
                <p>
                  <a href={CONTACT_INFO.phoneHref} className="transition-colors duration-300 hover:text-gold-300">
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a href={CONTACT_INFO.mobileHref} className="transition-colors duration-300 hover:text-gold-300">
                    {CONTACT_INFO.mobileDisplay}
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
            <p>© {year} Safir Kır Düğün Salonları. Tüm hakları saklıdır.</p>

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
