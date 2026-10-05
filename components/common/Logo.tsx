type LogoProps = {
  /** Mobil menü gibi dar alanlarda alt yazıyı gizlemek için */
  compact?: boolean;
  /** Koyu zemin (footer) için açık renk varyantı */
  variant?: "light" | "dark";
};

/**
 * Logo bileşeni.
 *
 * NOT: Şu an geçici bir monogram + yazı gösterimi kullanıyor.
 * Logo görseli hazır olduğunda aşağıdaki bloğu açıp
 * `/public/images/logo.svg` (veya .png) dosyasını eklemek yeterli:
 *
 *   <Image
 *     src="/images/logo.svg"
 *     alt="Safir Kır Düğün Salonları"
 *     width={160}
 *     height={44}
 *     priority
 *     className="h-11 w-auto"
 *   />
 */
export function Logo({ compact = false, variant = "dark" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <span className="flex items-center gap-3">
      {/* Logo için ayrılmış alan */}
      <span
        className={`grid size-11 shrink-0 place-items-center rounded-full border shadow-[0_2px_10px_rgba(201,162,39,0.18)] sm:size-12 ${
          isLight
            ? "border-gold-400/45 bg-white/5"
            : "border-gold-400/70 bg-white"
        }`}
        aria-hidden="true"
      >
        <span
          className={`font-display text-2xl leading-none font-semibold ${
            isLight ? "text-gold-300" : "text-gold-600"
          }`}
        >
          S
        </span>
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.6rem] font-semibold tracking-[0.22em] sm:text-[1.75rem] ${
            isLight ? "text-white" : "text-ink"
          }`}
        >
          SAFİR
        </span>
        {!compact && (
          <span
            className={`mt-1.5 text-[0.62rem] font-medium tracking-[0.32em] uppercase sm:text-[0.66rem] ${
              isLight ? "text-gold-300" : "text-gold-600"
            }`}
          >
            Kır Düğün Salonları
          </span>
        )}
      </span>
    </span>
  );
}
