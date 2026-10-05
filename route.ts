/**
 * ============================================================================
 * ROUTE'LARIN MERKEZİ
 * ----------------------------------------------------------------------------
 * Sitedeki tüm route'lar burada tanımlanır. Link/href gereken her yerde
 * sabit yazı yerine `ROUTES` sözlüğünü kullanın.
 *
 *   <Link href={ROUTES.iletisim}>İletişim</Link>
 *
 * Yeni bir sayfa eklerken: `app/<klasör>/page.tsx` dosyasını oluşturup
 * buraya karşılık gelen anahtarı ekleyin.
 * ============================================================================
 */

export const ROUTES = {
  /** Ana sayfa — app/page.tsx */
  home: "/",
  /** Salonlarımız — app/salonlarimiz/page.tsx */
  salonlarimiz: "/salonlarimiz",
  /** Lal Salonu — app/salonlarimiz/lal/page.tsx */
  lalSalonu: "/salonlarimiz/lal",
  /** İnci Salonu — app/salonlarimiz/inci/page.tsx */
  inciSalonu: "/salonlarimiz/inci",
  /** Kurumsal — app/kurumsal/page.tsx */
  kurumsal: "/kurumsal",
  /** Hizmetlerimiz — app/hizmetlerimiz/page.tsx */
  hizmetlerimiz: "/hizmetlerimiz",
  /** İletişim — app/iletisim/page.tsx */
  iletisim: "/iletisim",
} as const;

/** ROUTES sözlüğündeki anahtarların tipi */
export type RouteKey = keyof typeof ROUTES;

export type NavItem = {
  href: string;
  label: string;
};

/** Header ve Footer'da kullanılan menü bağlantıları (sıra menüdeki sırayı belirler) */
export const NAV_ITEMS: NavItem[] = [
  { href: ROUTES.home, label: "Ana Sayfa" },
  { href: ROUTES.salonlarimiz, label: "Salonlarımız" },
  { href: ROUTES.kurumsal, label: "Kurumsal" },
  { href: ROUTES.iletisim, label: "İletişim" },
];

/** Sayfanın aktif route'unu bulmak için yardımcı (örn. aktif menü linki) */
export function isActiveRoute(pathname: string, href: string): boolean {
  if (href === ROUTES.home) return pathname === ROUTES.home;
  return pathname === href || pathname.startsWith(`${href}/`);
}
