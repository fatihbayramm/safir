"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const AUTO_ADVANCE_MS = 5000;

const SLIDES = [
  {
    src: "/images/safir_hero_1.jpeg",
    alt: "Kır düğünü için hazırlanmış dış mekân salonu",
    eyebrow: "Safir Kır Düğün Salonları",
    title: "Kırın Ortasında\nUnutulmaz Günler",
    description:
      "Doğayla iç içe salonlarımızda, hayalinizdeki günü bir yaşam törenine dönüştürüyoruz.",
  },
  {
    src: "/images/safir_hero_2.jpeg",
    alt: "Açık salon düğün dekorasyonu",
    eyebrow: "Açık Salon",
    title: "Gökyüzünün\nAltında Bir Şölen",
    description:
      "Yaz düğünleri için 700 kişilik açık salonumuz, misafirlerinizi ferah bir ortamda ağırlar.",
  },
  {
    src: "/images/safir_hero_3.jpeg",
    alt: "Kapalı salon davet dekorasyonu",
    eyebrow: "Kapalı Salon",
    title: "Her Mevsimde\nSıcak Bir Davet",
    description:
      "Yağmurlu günler için kapalı salonumuz, tüm konforuyla hazırlanmış şekilde sizi bekler.",
  },
  {
    src: "/images/safir_hero_4.jpg",
    alt: "Nişan ve düğün masası düzenlemesi",
    eyebrow: "Nişan & Düğün",
    title: "İki Özel Gün,\nTek Bir Plan",
    description:
      "Nişan ve düğününüzü aynı ekip, aynı titizlikle ve tek bir organizasyonla planlayalım.",
  },
  {
    src: "/images/safir_hero_5.jpg",
    alt: "Düğün salonu ışık ve çiçek süslemesi",
    eyebrow: "Süsleme & Organizasyon",
    title: "Her Detay\nSizin İçin",
    description:
      "Işıklar, çiçekler ve masa düzenleri gelinliğinize göre özel tasarlanır.",
  },
  {
    src: "/images/safir_hero_6.jpeg",
    alt: "Düğün salonunda misafir ağırlama",
    eyebrow: "Misafirperverlik",
    title: "Misafirleriniz\nÖnceliğimiz",
    description:
      "Ulaşım, otopark ve ikram hizmetleriyle misafirleriniz hiçbir şeyle uğraşmasın.",
  },
  {
    src: "/images/safir_hero_7.jpg",
    alt: "Düğün salonu ikram ve menü detayı",
    eyebrow: "Gastronomi",
    title: "Sofranın En Güzel\nHalini Paylaşın",
    description:
      "Günün tüm davetlilerine eşsiz bir ikram deneyimi sunmak için mutfağımız hazır.",
  },
  {
    src: "/images/safir_hero_8.jpeg",
    alt: "Düğün salonu genel görünüm",
    eyebrow: "Randevu",
    title: "Salon Turu ve\nTeklif Alın",
    description:
      "Salonlarımızı yerinde görün, ekibimizle birlikte gününüzü planlamaya başlayın.",
  },
] as const;

export function HeroContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = SLIDES.length;

  const next = useCallback(() => {
    setActiveIndex((current) => (current + 1) % totalSlides);
  }, [totalSlides]);

  const previous = useCallback(() => {
    setActiveIndex((current) => (current - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Otomatik geçiş — her 5 saniyede bir
  // Not: fare/odak üzerinde duraklatma yapılmıyor. Önceki denemede
  // `onMouseEnter`/`onFocus` ile `isPaused` true kalıp geri dönmüyordu ve
  // görseller hiç değişmiyordu.
  useEffect(() => {
    const timer = setTimeout(next, AUTO_ADVANCE_MS);
    return () => clearTimeout(timer);
  }, [activeIndex, next]);

  // Klavye desteği (sol / sağ ok)
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
    }
  };

  return (
    <section
      aria-label="Safir Kır Düğün Salonları tanıtım görselleri"
      aria-roledescription="carousel"
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      className="relative isolate flex min-h-[34rem] w-full flex-col justify-end overflow-hidden bg-ink lg:min-h-[42rem]"
    >
      {/* Görseller */}
      <div className="absolute inset-0 -z-10">
        {SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={slide.src}
              role="group"
              aria-roledescription="slayt"
              aria-label={`${index + 1} / ${totalSlides}`}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Yavaş yakınlaşma: transform geçişi her zaman açık olduğu için
                  slayt değişiminde ölçek "zıplaması" oluşmuyor. */}
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover transition-transform duration-[7000ms] ease-out motion-reduce:transition-none ${
                  isActive ? "scale-100" : "scale-105"
                }`}
              />
            </div>
          );
        })}

        {/* Okunabilirlik katmanları */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-ink/20"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/35"
          aria-hidden="true"
        />
      </div>

      {/* İçerik */}
      <div className="container-site relative pt-24 pb-10 lg:pt-32 lg:pb-14">
        <div
          key={activeIndex}
          className="max-w-2xl animate-[safir-fade-up_900ms_ease-out]"
        >
          <p className="flex items-center gap-3 text-[0.7rem] font-medium tracking-[0.34em] text-gold-300 uppercase sm:text-[0.78rem]">
            <span className="h-px w-8 bg-gold-400 sm:w-10" aria-hidden="true" />
            {SLIDES[activeIndex].eyebrow}
          </p>

          <h1 className="mt-6 text-4xl leading-[1.12] font-semibold text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {SLIDES[activeIndex].title.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            {SLIDES[activeIndex].description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/iletisim"
              className="inline-block bg-gold-500 px-8 py-4 text-center text-[0.74rem] font-semibold tracking-[0.2em] text-ink uppercase transition-colors duration-300 hover:bg-gold-400"
            >
              Randevu Al
            </Link>
            <Link
              href="/salonlarimiz"
              className="inline-block border border-white/45 px-8 py-4 text-center text-[0.74rem] font-semibold tracking-[0.2em] text-white uppercase transition-colors duration-300 hover:border-gold-300 hover:bg-gold-300 hover:text-ink"
            >
              Salonlarımız
            </Link>
          </div>
        </div>

        {/* Kontroller — yalnızca ileri / geri ok tuşları */}
        <div className="mt-12 flex items-end justify-end gap-3 lg:mt-16">
          <button
            type="button"
            onClick={previous}
            aria-label="Önceki görsel"
            className="grid size-12 cursor-pointer place-items-center rounded-full border border-white/35 text-white transition-colors duration-300 hover:border-gold-400 hover:bg-gold-400 hover:text-ink lg:size-14"
          >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
                className="size-5"
              >
                <path d="M15 5 8 12l7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Sonraki görsel"
            className="grid size-12 cursor-pointer place-items-center rounded-full border border-white/35 text-white transition-colors duration-300 hover:border-gold-400 hover:bg-gold-400 hover:text-ink lg:size-14"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
              className="size-5"
            >
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* İlerleme çubuğu */}
      <span
        key={activeIndex}
        aria-hidden="true"
        className="safir-hide-reduced absolute inset-x-0 bottom-0 h-1 origin-left bg-gold-400/90 [animation:safir-hero-progress_5s_linear_forwards]"
      />
    </section>
  );
}
