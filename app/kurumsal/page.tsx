import type { Metadata } from "next";

import { KurumsalContent } from "@/components/kurumsal/KurumsalContent";

export const metadata: Metadata = {
  title: "Kurumsal | Safir Kır Düğün Salonları",
  description:
    "Safir Kır Düğün Salonları hakkında: hikâyemiz, değerlerimiz, salonlarımız ve düğün organizasyonu hizmetlerimiz.",
};

export default function KurumsalPage() {
  return <KurumsalContent />;
}
