import { CONTACT_INFO } from "./contact";

/**
 * Tüm sayfalarda görünen sabit (sticky) WhatsApp butonu.
 * Tıklandığında `CONTACT_INFO.whatsappHref` numarasına yönlendirir.
 */
export function WhatsAppButton() {
  const href = `${CONTACT_INFO.whatsappHref}?text=${encodeURIComponent(
    CONTACT_INFO.whatsappMessage,
  )}`;

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

      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="size-7 lg:size-8"
      >
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.25-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.07.14.2 2.09 3.2 5.07 4.49.71.3 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.34M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.22-3.74.99 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.43 9.89-9.89 9.89M20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65c1.81.93 3.86 1.42 5.94 1.43h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.4Z" />
      </svg>
    </a>
  );
}
