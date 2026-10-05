/** Site genelinde kullanılan iletişim bilgileri (telefon, e-posta, adres, harita) */
export const CONTACT_INFO = {
  /** Sabit telefon */
  phoneDisplay: "(0266) 221 80 82",
  phoneHref: "tel:+902662218082",

  /** WhatsApp / cep telefonu */
  mobileDisplay: "+90 535 786 20 18",
  mobileHref: "tel:+905357862018",
  whatsappNumber: "905357862018",
  whatsappHref: "https://wa.me/905357862018",
  whatsappMessage:
    "Merhaba, Safir Kır Düğün Salonları hakkında bilgi almak istiyorum.",

  email: "info@safirdugunsalonlari.com",
  emailHref: "mailto:info@safirdugunsalonlari.com",

  workingHours: "Her gün 09:00 – 20:00",
  workingHoursNote: "Pazar ve resmi tatillerde randevu ile görüşülür.",

  address: "Gümüşçeşme Mah. Gökdeniz Cad. 158. Sk. No: 12/A",
  district: "10040 Altıeylül / Balıkesir",

  /** Harita koordinatları (Google Maps) */
  mapQuery: "39.6497276,27.9150684",
  mapZoom: 16,
  /** Google Maps'te açmak için bağlantı */
  mapsUrl:
    "https://www.google.com/maps/place/Safir+K%C4%B1r+D%C3%BC%C4%9F%C3%BCn+Salonlar%C4%B1/@39.6497276,27.9124935,17z/data=!3m1!4b1!4m6!3m5!1s0x14b700956a67e009:0x15ebf9dba510306e!8m2!3d39.6497276!4d27.9150684!16s%2Fg%2F11bycg5qhf",
} as const;

/** Google Maps gömülü harita (iframe) adresi */
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  CONTACT_INFO.mapQuery,
)}&hl=tr&z=${CONTACT_INFO.mapZoom}&output=embed`;

/** Adresi tek satırda göstermek için */
export const FULL_ADDRESS = `${CONTACT_INFO.address}, ${CONTACT_INFO.district}`;
