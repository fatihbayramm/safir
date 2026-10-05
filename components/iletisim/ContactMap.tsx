import { CONTACT_INFO, MAP_EMBED_URL } from "../../constants/data";

/** Google Maps gömülü harita + yol tarifi bağlantısı */
export function ContactMap() {
  return (
    <div className="relative">
      {/* Altın çerçeve */}
      <div
        className="absolute -inset-px bg-gradient-to-br from-gold-400/60 via-gold-200 to-gold-500/40"
        aria-hidden="true"
      />

      <div className="relative bg-ivory">
        <iframe
          src={MAP_EMBED_URL}
          title="Safir Kır Düğün Salonları — Altıeylül / Balıkesir konumu"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="block h-[22rem] w-full border-0 sm:h-[26rem] lg:h-[32rem]"
        />
      </div>

      {/* Adres kartı */}
      <div className="relative border-x border-b border-line bg-white p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span
              className="grid size-11 shrink-0 place-items-center rounded-full bg-gold-100 text-gold-700"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-5">
                <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" strokeLinejoin="round" />
                <circle cx="12" cy="10" r="2.6" />
              </svg>
            </span>

            <div>
              <p className="text-[0.72rem] font-medium tracking-[0.22em] text-gold-600 uppercase">Adres</p>
              <address className="mt-2 text-sm leading-relaxed text-ink not-italic sm:text-base">
                {CONTACT_INFO.address}
                <br />
                {CONTACT_INFO.district}
              </address>
            </div>
          </div>

          <a
            href={CONTACT_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block shrink-0 border border-gold-500 px-6 py-3 text-center text-[0.72rem] font-semibold tracking-[0.2em] text-gold-700 uppercase transition-colors duration-300 hover:bg-gold-500 hover:text-white"
          >
            Yol Tarifi Al
          </a>
        </div>
      </div>
    </div>
  );
}
