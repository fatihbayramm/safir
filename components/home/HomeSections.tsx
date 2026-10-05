import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@/route";
import { CONTACT_INFO, SALONS } from "../../constants/data";
import { ArrowRightIcon, MapPinIcon, WhatsAppIcon } from "../common/icons";

const whatsappLink = `${CONTACT_INFO.whatsappHref}?text=${encodeURIComponent(
  CONTACT_INFO.whatsappMessage,
)}`;

/* -------------------------------------------------------------------------- */
/* İçerik                                                                       */
/* -------------------------------------------------------------------------- */

const HIGHLIGHTS = [
  {
    number: "01",
    title: "Doğayla İç İçe",
    description:
      "Ağaçların arasında, şehir gürültüsünden uzak geniş bir bahçe. Yaz düğünleri için en çok tercih edilen alanımız.",
  },
  {
    number: "02",
    title: "Ulaşım Kolaylığı",
    description:
      "Ücretsiz otopark, merkeze yakın konum ve misafirlerimiz için planlanmış ulaşım seçenekleri.",
  },
  {
    number: "03",
    title: "Tek Ekip, Tek Plan",
    description:
      "Süslemeden ikrama, seanstan müziğe kadar tüm detaylar aynı ekip tarafından planlanır ve uygulanır.",
  },
];

/**
 * TODO: Aşağıdaki yorumlar geçici örneklerdir. Gerçek müşteri görüşleriyle
 * değiştirilmelidir.
 */
const TESTIMONIALS = [
  {
    quote:
      "Bahçe salonunda düğünümüzü yaptık. Misafirlerimiz gün boyu nereye gittiklerini unutmayıp sürekli gezdiklerini söyledi. Ekibin ilgisi muhteşemdi.",
    name: "Düğün Çifti",
    detail: "Lal Salonu · Yaz Düğünü",
  },
  {
    quote:
      "Yağmurlu bir gün salonu değiştirdik, hiçbir şey değişmemiş gibiydi. Isıtma, ışık ve akşam programı sorunsuz işledi.",
    name: "Nişan & Düğün Çifti",
    detail: "İnci Salonu · Kış Düğünü",
  },
];

/* -------------------------------------------------------------------------- */
/* Bölümler                                                                    */
/* -------------------------------------------------------------------------- */

/** Kısa tanıtım */
function IntroSection() {
  return (
    <section className="bg-ivory py-16 lg:py-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-[0.72rem] font-medium tracking-[0.3em] text-gold-600 uppercase">
            Hakkımızda
          </p>

          <h2 className="mt-5 max-w-lg text-3xl leading-tight sm:text-4xl">
            Doğanın İçinde,
            <span className="block text-gold-700">Unutulmaz Bir Gün</span>
          </h2>

          <span
            className="mt-6 block h-px w-20 bg-gradient-to-r from-gold-500 to-transparent"
            aria-hidden="true"
          />

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft sm:text-base">
            <p>
              Safir Kır Düğün Salonları, Balıkesir Altıeylül&apos;de doğdu. Küçük
              bir aile işletmesi olarak başladık; amacımız büyük olmak değil,
              her çiftin gününü eksiksiz planlamaktı.
            </p>
            <p>
              Bugün açık bahçe ve kapalı salon seçeneklerimizle, yaz düğünlerinden
              kış düğünlerine kadar her mevsim için farklı organizasyon
              çözümleri sunuyoruz.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={ROUTES.kurumsal}
              className="inline-flex items-center gap-2.5 bg-gold-500 px-6 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] text-ink uppercase transition-colors duration-300 hover:bg-gold-600 hover:text-white"
            >
              Kurumsal
              <ArrowRightIcon className="size-4" />
            </Link>

            <Link
              href={ROUTES.salonlarimiz}
              className="inline-flex items-center gap-2.5 border border-gold-500 px-6 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] text-gold-700 uppercase transition-colors duration-300 hover:bg-gold-500 hover:text-white"
            >
              Salonlarımız
            </Link>
          </div>
        </div>

        <div className="relative">
          <span
            className="absolute -top-3 -right-3 h-24 w-24 border-t border-r border-gold-400/70 sm:h-36 sm:w-36"
            aria-hidden="true"
          />
          <span
            className="absolute -bottom-3 -left-3 h-24 w-24 border-b border-l border-gold-400/70 sm:h-36 sm:w-36"
            aria-hidden="true"
          />

          <div className="relative aspect-4/3 overflow-hidden border border-line bg-cream">
            <Image
              src="/images/safir_hero_3.jpeg"
              alt="Gece aydınlatılmış bahçe salonunda düğün masası düzeni ve dans pisti"
              fill
              sizes="(min-width: 1024px) 46rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Öne çıkan özellikler */
function HighlightsSection() {
  return (
    <section className="bg-cream py-16 lg:py-20">
      <div className="container-site">
        <div className="grid gap-8 sm:grid-cols-3 lg:gap-10">
          {HIGHLIGHTS.map((item) => (
            <div key={item.number} className="group">
              <span className="font-display text-3xl text-gold-400 transition-colors duration-300 group-hover:text-gold-600">
                {item.number}
              </span>

              <h3 className="mt-4 text-xl">{item.title}</h3>

              <span
                className="mt-3 block h-px w-10 bg-gold-400/70 transition-all duration-500 group-hover:w-16"
                aria-hidden="true"
              />

              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Salonlar önizleme */
function SalonsPreviewSection() {
  return (
    <section className="bg-ivory py-16 lg:py-24">
      <div className="container-site">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.72rem] font-medium tracking-[0.3em] text-gold-600 uppercase">
              Salonlarımız
            </p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              İki Salon, İki Farklı Deneyim
            </h2>
          </div>

          <Link
            href={ROUTES.salonlarimiz}
            className="inline-flex items-center gap-2.5 text-[0.72rem] font-semibold tracking-[0.18em] text-gold-700 uppercase transition-colors duration-300 hover:text-gold-600"
          >
            Tümünü Gör
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:gap-6">
          {SALONS.map((salon) => (
            <Link
              key={salon.id}
              href={salon.href}
              className="group relative isolate flex min-h-[22rem] flex-col justify-end overflow-hidden border border-line bg-ink p-7 sm:min-h-[26rem] sm:p-8"
            >
              <Image
                src={salon.image}
                alt={salon.alt}
                fill
                sizes="(min-width: 640px) 40rem, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/15 transition-opacity duration-700 group-hover:from-ink/85"
                aria-hidden="true"
              />

              <div className="relative">
                <p className="text-[0.62rem] font-medium tracking-[0.24em] text-gold-300 uppercase">
                  {salon.capacity}
                </p>

                <h3 className="mt-3 text-3xl font-semibold text-white">
                  {salon.name}
                </h3>

                <p className="mt-2 text-[0.68rem] font-medium tracking-[0.28em] text-gold-300/90 uppercase">
                  {salon.tagline}
                </p>

                <span className="mt-6 inline-flex items-center gap-2.5 border-b border-gold-400/60 pb-1 text-[0.7rem] font-semibold tracking-[0.2em] text-white uppercase transition-colors duration-300 group-hover:border-gold-300">
                  İncele
                  <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Müşteri yorumları */
function TestimonialsSection() {
  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="container-site">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl leading-tight sm:text-4xl">
            Misafirlerimiz Ne Diyor?
          </h2>
          <span
            className="block h-px w-20 bg-gradient-to-r from-gold-500 to-transparent"
            aria-hidden="true"
          />
        </div>

        <div className="mt-9 grid gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.name}
              className="flex h-full flex-col border border-line bg-white p-7 sm:p-9"
            >
              <span
                className="font-display text-5xl leading-none text-gold-300"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote className="mt-4 flex-1 font-display text-xl leading-relaxed text-ink sm:text-2xl">
                {item.quote}
              </blockquote>

              <figcaption className="mt-7 border-t border-line pt-5">
                <p className="text-sm font-semibold tracking-[0.1em] text-ink uppercase">
                  {item.name}
                </p>
                <p className="mt-1 text-xs text-ink-soft">{item.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Randevu CTA */
function AppointmentCta() {
  return (
    <section className="bg-ivory py-16 lg:py-24">
      <div className="container-site">
        <div className="relative overflow-hidden bg-ink px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
          <span
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600"
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[0.72rem] font-medium tracking-[0.3em] text-gold-300 uppercase">
                Randevu
              </p>
              <h2 className="mt-4 max-w-xl text-3xl leading-tight text-white sm:text-4xl">
                Bir Ön Görüşmeyle Başlayalım
              </h2>

              <p className="mt-4 flex items-center gap-2.5 text-sm text-white/70">
                <MapPinIcon className="size-4 shrink-0 text-gold-400" aria-hidden="true" />
                {CONTACT_INFO.address}, {CONTACT_INFO.district}
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href={ROUTES.iletisim}
                className="inline-flex items-center justify-center gap-2.5 bg-gold-500 px-7 py-4 text-[0.74rem] font-semibold tracking-[0.18em] text-ink uppercase transition-colors duration-300 hover:bg-gold-400"
              >
                Randevu Al
              </Link>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] px-7 py-4 text-[0.74rem] font-semibold tracking-[0.18em] text-white uppercase transition-colors duration-300 hover:bg-[#1EBE5A]"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeSections() {
  return (
    <>
      <IntroSection />
      <HighlightsSection />
      <SalonsPreviewSection />
      <TestimonialsSection />
      <AppointmentCta />
    </>
  );
}
