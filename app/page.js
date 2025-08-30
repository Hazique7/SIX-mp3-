import styles from "./page.module.css";
import HomePage from "./components/Home/page";

// ✅ SEO metadata
export const metadata = {
  title: "SIX(mp3) - Free YouTube to MP3 Converter",
  description:
    "Convert YouTube videos to high-quality MP3 in seconds with SIX(mp3). Free, fast, and reliable YouTube to MP3 conversion with no registration required.",
  keywords: [
    "YouTube to MP3",
    "Free YouTube MP3 Converter",
    "MP3 Downloader",
    "High Quality MP3",
    "Online YouTube Converter"
  ],
  authors: [{ name: "Hazique Ahmed Khaan" }],
  openGraph: {
    title: "SIX(mp3) - Free YouTube to MP3 Converter",
    description:
      "Transform YouTube videos into high-quality MP3 instantly. Fast, free, and no sign-up needed.",
    url: "https://six-mp3.vercel.app",
    siteName: "SIX(mp3)",
    images: [
      {
        url: "https://six-mp3.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "SIX(mp3) YouTube to MP3 Converter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIX(mp3) - Free YouTube to MP3 Converter",
    description:
      "Convert YouTube videos to MP3 in seconds. Free, reliable, and no account needed.",
    images: ["https://six-mp3.vercel.app/og-image.png"],
  },
};

export default function Home() {
  // ✅ JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "SIX(mp3)",
        url: "https://six-mp3.vercel.app",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "All",
        description:
          "Convert YouTube videos to high-quality MP3 in seconds with SIX(mp3). Free, fast, and reliable YouTube to MP3 conversion with no registration required.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        author: {
          "@type": "Person",
          name: "Hazique Ahmed Khaan",
        },
      },
      {
        "@type": "Organization",
        name: "SIX(mp3)",
        url: "https://six-mp3.vercel.app",
        logo: "https://six-mp3.vercel.app/og-image.png",
        sameAs: [
          "https://github.com/Hazique7",
          "https://www.linkedin.com/in/hazique-ahmed-khaan-9a9aa6271/"
        ],
        founder: {
          "@type": "Person",
          name: "Hazique Ahmed Khaan",
        }
      }
    ]
  };

  return (
    <div className={styles.page}>
      {/* ✅ Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </div>
  );
}
