import { CONTACT_INFO } from "../../constants/data";
import { WhatsAppIcon } from "./icons";

/**
 * Tüm sayfalarda görünen sabit (sticky) WhatsApp butonu.
 * Tıklandığında `CONTACT_INFO.whatsappHref` numarasına yönlendirir.
 */
export function WhatsAppButton() {
  const href = `${CONTACT_INFO.whatsappHref}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile bizimle iletişime geçin"
      className="group fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.9)] transition-transform duration-300 hover:scale-105 focus-visible:outline-offset-4 lg:right-8 lg:bottom-8 lg:size-16"
    >
      {/* nabız animasyonu */}
      <span
        className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-60 motion-safe:animate-[safir-pulse_2.4s_ease-out_infinite]"
        aria-hidden="true"
      />

      <WhatsAppIcon className="size-7 lg:size-8" />
    </a>
  );
}
