import type { Metadata } from "next";

import { SalonlarimizContent } from "@/components/salonlarimiz/SalonlarimizContent";

export const metadata: Metadata = {
  title: "Salonlarımız | Safir Kır Düğün Salonları",
  description:
    "Lal Salonu ve İnci Salonu: açık hava bahçe salonu ve kapalı kışlık salon. Kapasiteler, hizmetler ve randevu bilgileri.",
};

export default function SalonlarimizPage() {
  return <SalonlarimizContent />;
}
