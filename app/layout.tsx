import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";

import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";

import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const sansFont = Jost({
  variable: "--font-jost",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Safir Kır Düğün Salonları",
  description:
    "Safir Kır Düğün Salonları — unutulmaz gününüz için zarafetle hazırlanmış salonlar, kurumsal hizmet ve salon turu.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${displayFont.variable} ${sansFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
