import Image from "next/image";
import Link from "next/link";

import { CONTACT_INFO } from "../../constants/data";
import { ArrowRightIcon, MapPinIcon, WhatsAppIcon } from "../common/icons";
import { ROUTES } from "@/route";

/* -------------------------------------------------------------------------- */
/* İçerik                                                                       */
/* -------------------------------------------------------------------------- */

const whatsappLink = `${CONTACT_INFO.whatsappHref}?text=${encodeURIComponent(
  CONTACT_INFO.whatsappMessage,
)}`;

/** TODO: Bu rakamlar kurumsal verilerle doğrulandıktan sonra güncellenmelidir. */
const STATS = [
  { value: "25+", label: "Yıllık Tecrübe" },
  { value: "3", label: "Farklı Salon" },
  { value: "1500", label: "Kişiye Kadar Kapasite" },
  { value: "1000+", label: "Düğün Organizasyonu" },
];

const VALUES = [
  {
    number: "01",
    title: "Zarafet",
    description:
      "Işık, çiçek ve masa düzenleri gelinliğinize göre özel tasarlanır; her detay gününüzle uyum içinde olur.",
  },
  {
    number: "02",
    title: "Güven",
    description:
      "Sözleşmeden menüye kadar tüm detaylar yazılı ve şeffaf. Sürprizle karşılaşmazsınız.",
  },
  {
    number: "03",
    title: "Misafirperverlik",
    description:
      "Ulaşım, otopark ve ikram hizmetleriyle misafirleriniz günün tek işi sizinle kutlamak olsun.",
  },
  {
    number: "04",
    title: "Doğa",
    description:
      "Kır düğünü geleneğini modern salonlarla buluşturan açık ve kapalı mekan seçenekleri.",
  },
];

const FEATURES = [
  "Açık salon ve kapalı salon seçenekleri",
  "100 – 1500 kişiye kadar esnek kapasite",
  "Ücretsiz otopark ve misafir ulaşımı",
  "Nişan, düğün ve özel davet organizasyonu",
  "Profesyonel süsleme, ışık ve ses hizmetleri",
  "Gastronomi ekibi ve özel menü seçenekleri",
  "Nişan ve düğün aynı gün planlaması",
  "Canlı müzik, DJ ve dans pisti düzenlemesi",
];

/* -------------------------------------------------------------------------- */
/* Yardımcı bölümler                                                           */
/* -------------------------------------------------------------------------- */

/** Sayfa üst banner */
function AboutBanner() {
  return (
    <section className="relative isolate flex min-h-[24rem] items-end overflow-hidden bg-ink sm:min-h-[28rem] lg:min-h-[32rem]">
      <Image
        src="/images/safir_hero_8.jpeg"
        alt="Beyaz tül ve çiçeklerle süslenmiş düğün giriş yolu"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/55 to-ink/25"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/35"
        aria-hidden="true"
      />

      <div className="container-site relative py-12 lg:py-16">
        <p className="flex items-center gap-3 text-[0.7rem] font-medium tracking-[0.34em] text-gold-300 uppercase">
          <span className="h-px w-8 bg-gold-400 sm:w-10" aria-hidden="true" />
          Kurumsal
        </p>

        <h1 className="mt-6 max-w-3xl text-4xl leading-tight font-semibold text-white sm:text-5xl lg:text-6xl">
          Kır Düğününün
          <span className="block text-gold-200">En Güzel Adresi</span>
        </h1>

        <span
          className="mt-7 block h-px w-24 bg-gradient-to-r from-gold-400 to-transparent"
          aria-hidden="true"
        />

        <p className="mt-7 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
          Doğanın ortasında, gelenekle modernliği buluşturan bir organizasyon
          anlayışıyla çalışıyoruz. Amacımız tek bir şey: gününüzü sizin için
          sorunsuz ve unutulmaz kılmak.
        </p>
      </div>

      {/* Altın çerçeve */}
      <span
        className="absolute inset-3 border border-gold-400/25 sm:inset-5"
        aria-hidden="true"
      />
    </section>
  );
}

/** Hikâyemiz */
function StorySection() {
  return (
    <section className="bg-ivory py-16 lg:py-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-[0.72rem] font-medium tracking-[0.3em] text-gold-600 uppercase">
            Hikâyemiz
          </p>

          <h2 className="mt-5 text-3xl leading-tight sm:text-4xl">
            Güvenle Başlayan,
            <span className="block text-gold-700">Güzel Kapanan Günler</span>
          </h2>

          <span
            className="mt-6 block h-px w-20 bg-gradient-to-r from-gold-500 to-transparent"
            aria-hidden="true"
          />

          <div className="mt-6 space-y-5 text-sm leading-relaxed text-ink-soft sm:text-base">
            <p>
              Safir Kır Düğün Salonları, Balıkesir Altıeylül&apos;de doğdu. Küçük
              bir aile işletmesi olarak başladık; amacımız büyük olmak değil,
              her çiftin gününü eksiksiz planlamaktı.
            </p>
            <p>
              Bugün açık salon, kapalı salon ve geniş bahçe alanlarımızla yaz
              düğünlerinden kış düğünlerine kadar her mevsim için farklı
              organizasyon seçenekleri sunuyoruz. Süsleme, ses, ışık ve ikram
              ekiplerimiz aynı çatı altında çalışır.
            </p>
            <p>
              İlk görüşmeden son güne kadar tek bir ekip sizinle ilgilenir. Salon
              turu, menü seçimi ve masa planı gibi detayları birlikte
              değerlendirir, bütçenize uygun en iyi çözümü birlikte
              belirleriz.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={ROUTES.salonlarimiz}
              className="inline-flex items-center gap-2.5 border border-gold-500 px-6 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] text-gold-700 uppercase transition-colors duration-300 hover:bg-gold-500 hover:text-white"
            >
              Salonlarımız
              <ArrowRightIcon className="size-4" />
            </Link>

            <Link
              href={ROUTES.iletisim}
              className="inline-flex items-center gap-2.5 bg-gold-500 px-6 py-3.5 text-[0.72rem] font-semibold tracking-[0.18em] text-ink uppercase transition-colors duration-300 hover:bg-gold-600 hover:text-white"
            >
              Randevu Al
            </Link>
          </div>
        </div>

        {/* Görsel + altın çerçeve */}
        <div className="relative">
          <span
            className="absolute -top-3 -right-3 h-28 w-28 border-t border-r border-gold-400/70 sm:h-40 sm:w-40"
            aria-hidden="true"
          />
          <span
            className="absolute -bottom-3 -left-3 h-28 w-28 border-b border-l border-gold-400/70 sm:h-40 sm:w-40"
            aria-hidden="true"
          />

          <div className="relative aspect-4/3 overflow-hidden border border-line bg-cream">
            <Image
              src="/images/safir_hero_2.jpeg"
              alt="Çiçeklerle bezeli düğün takı alanı ve avlu dekorasyonu"
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

/** Rakamlar */
function StatsSection() {
  return (
    <section className="bg-cream py-14 lg:py-16">
      <div className="container-site">
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center lg:px-6 ${
                index !== 0 ? "lg:border-l lg:border-gold-300/60" : ""
              }`}
            >
              <p className="font-display text-4xl font-semibold text-gold-600 lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-[0.7rem] font-medium tracking-[0.22em] text-ink-soft uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Değerlerimiz */
function ValuesSection() {
  return (
    <section className="bg-ivory py-16 lg:py-24">
      <div className="container-site">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.72rem] font-medium tracking-[0.3em] text-gold-600 uppercase">
              Değerlerimiz
            </p>
            <h2 className="mt-4 max-w-xl text-3xl leading-tight sm:text-4xl">
              Bir Düğünden Beklenen Her Şey
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
            Dört temel ilkemiz, her etkinliğimizde aynı titizlikle uygulanır.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {VALUES.map((value) => (
            <div
              key={value.number}
              className="group border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-[0_22px_45px_-32px_rgba(34,30,25,0.5)]"
            >
              <span className="font-display text-3xl text-gold-400 transition-colors duration-300 group-hover:text-gold-600">
                {value.number}
              </span>

              <h3 className="mt-5 text-xl">{value.title}</h3>

              <span
                className="mt-4 block h-px w-10 bg-gold-400/70 transition-all duration-500 group-hover:w-16"
                aria-hidden="true"
              />

              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Neden biz / hizmetler */
function FeaturesSection() {
  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <p className="text-[0.72rem] font-medium tracking-[0.3em] text-gold-600 uppercase">
            Neden Biz
          </p>

          <h2 className="mt-4 max-w-lg text-3xl leading-tight sm:text-4xl">
            Güngünüzü Size Bırakın, Planlamayı Bize Bırakın
          </h2>

          <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span
                  className="mt-2 size-1.5 shrink-0 rotate-45 bg-gold-500"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-ink-soft">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative aspect-4/3 overflow-hidden border border-line bg-ivory">
            <Image
              src="/images/safir_hero_5.jpg"
              alt="Çim bahçede yuvarlak masalarla kurulmuş açık salon düğünü"
              fill
              sizes="(min-width: 1024px) 40rem, 100vw"
              className="object-cover"
            />
          </div>

          {/* Konum etiketi */}
          <div className="absolute -bottom-5 left-5 flex items-center gap-3 bg-white px-5 py-3.5 shadow-[0_18px_40px_-24px_rgba(34,30,25,0.6)] sm:left-8">
            <MapPinIcon className="size-5 shrink-0 text-gold-600" aria-hidden="true" />
            <span className="text-xs leading-tight text-ink">
              {CONTACT_INFO.address}
              <span className="mt-0.5 block text-ink-soft">
                {CONTACT_INFO.district}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Randevu CTA */
function AboutCta() {
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
                Salonlarımızı Yerinde Görün
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70">
                Size uygun tarihi birlikte planlayalım. İlk görüşme ve salon turu
                için bizimle iletişime geçin.
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

export function KurumsalContent() {
  return (
    <>
      <AboutBanner />
      <StorySection />
      <StatsSection />
      <ValuesSection />
      <FeaturesSection />
      <AboutCta />
    </>
  );
}
