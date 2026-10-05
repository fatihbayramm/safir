/** Site genelinde kullanılan iletişim bilgileri (telefon, e-posta, adres) */
export const CONTACT_INFO = {
  phoneDisplay: "+90 216 000 00 00",
  phoneHref: "tel:+90216000000",
  email: "info@safirdugunsalonlari.com",
  emailHref: "mailto:info@safirdugunsalonlari.com",
  workingHours: "Her gün 09:00 – 20:00",
  // TODO: Gerçek adres bilgisi ile güncellenecek
  address: "Alteylül Mah. Zafer Cad. No: 12, Balıkesir",
  /** Sabit WhatsApp butonu — tıklanınca bu numaraya yönlendirir */
  whatsappNumber: "905357862018",
  whatsappHref: "https://wa.me/905357862018",
  whatsappMessage:
    "Merhaba, Safir Kır Düğün Salonları hakkında bilgi almak istiyorum.",
} as const;
