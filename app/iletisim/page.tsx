import type { Metadata } from "next";

import { ContactContent } from "@/components/iletisim/ContactContent";
import { CONTACT_INFO } from "@/constants/data";

export const metadata: Metadata = {
  title: "İletişim | Safir Kır Düğün Salonları",
  description: `Safir Kır Düğün Salonları iletişim bilgileri, harita ve randevu talebi. Adres: ${CONTACT_INFO.address} ${CONTACT_INFO.district}. Telefon: ${CONTACT_INFO.phoneDisplay} · ${CONTACT_INFO.mobileDisplay}`,
};

export default function IletisimPage() {
  return <ContactContent />;
}
