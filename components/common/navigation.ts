export type NavItem = {
  href: string;
  label: string;
};

/** Header'da gösterilen ana menü bağlantıları */
export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/salonlarimiz", label: "Salonlarımız" },
  { href: "/kurumsal", label: "Kurumsal" },
  { href: "/iletisim", label: "İletişim" },
];

/** Header'da kullanılan iletişim bilgileri (geçici — sonradan güncellenecek) */
export const CONTACT_INFO = {
  phoneDisplay: "+90 216 000 00 00",
  phoneHref: "tel:+90216000000",
  email: "info@safirdugunsalonlari.com",
  emailHref: "mailto:info@safirdugunsalonlari.com",
  workingHours: "Her gün 09:00 – 20:00",
};
