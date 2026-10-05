type LogoProps = {
  /** Mobil menü gibi dar alanlarda alt yazıyı gizlemek için */
  compact?: boolean;
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
export function Logo({ compact = false }: LogoProps) {
  return (
    <span className="flex items-center gap-3">
      {/* Logo için ayrılmış alan */}
      <span
        className="grid size-11 shrink-0 place-items-center rounded-full border border-gold-400/70 bg-white shadow-[0_2px_10px_rgba(201,162,39,0.18)] sm:size-12"
        aria-hidden="true"
      >
        <span className="font-display text-2xl leading-none font-semibold text-gold-600">
          S
        </span>
      </span>

      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.6rem] font-semibold tracking-[0.22em] text-ink sm:text-[1.75rem]">
          SAFİR
        </span>
        {!compact && (
          <span className="mt-1.5 text-[0.62rem] font-medium tracking-[0.32em] text-gold-600 uppercase sm:text-[0.66rem]">
            Kır Düğün Salonları
          </span>
        )}
      </span>
    </span>
  );
}
