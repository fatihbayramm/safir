import type { Metadata } from "next";

import { SalonDetayContent } from "@/components/salonlarimiz/SalonDetayContent";
import { SALONS } from "@/constants/data";

const salon = SALONS[0];

export const metadata: Metadata = {
  title: `${salon.name} | Safir Kır Düğün Salonları`,
  description: `${salon.name}: ${salon.tagline}. ${salon.capacity}. ${salon.description}`,
};

export default function LalSalonuPage() {
  return <SalonDetayContent salon={salon} />;
}
