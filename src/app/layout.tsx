import type { Metadata } from "next";
import { Sarabun, Rubik } from "next/font/google";
import "./globals.css"; 
import VisitTracker from "@/components/VisitTracker/VisitTracker";

// Configuramos las fuentes
const sarabun = Sarabun({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sarabun",
  display: "swap",
});

const rubik = Rubik({
    weight: ["300", "400", "500"],
    subsets: ["latin"],
    variable: "--font-rubik",
    display: "swap",
});

// IMPORTANTE: Reemplaza con tu dominio real cuando lo deployes
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kevinsvega.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kevin's Vega Quiroga | Ingeniero de Software Full Stack",
    template: "%s | Kevin's Vega Quiroga",
  },
  description:
    "Ingeniero de Software con +4 años de experiencia especializado en HealthTech, interoperabilidad clínica (HL7 FHIR) y desarrollo Full Stack. Portafolio profesional de proyectos y certificaciones.",
  keywords: [
    "Ingeniero de Software",
    "Full Stack Developer",
    "HealthTech",
    "HL7 FHIR",
    "React",
    "Next.js",
    ".NET",
    "Azure",
    "Portafolio",
    "Kevin's Vega",
  ],
  authors: [{ name: "Kevin's Vega Quiroga", url: "https://www.linkedin.com/in/kevins-vega-quiroga-01a7b71ab/" }],
  creator: "Kevin's Vega Quiroga",
  publisher: "Kevin's Vega Quiroga",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Kevin's Vega Quiroga - Portafolio",
    title: "Kevin's Vega Quiroga | Ingeniero de Software Full Stack",
    description:
      "Ingeniero de Software especializado en HealthTech, interoperabilidad clínica y desarrollo Full Stack. +4 años de experiencia en soluciones escalables.",
    images: [
      {
        url: "/assets/images/NuevoLogo.png",
        width: 1200,
        height: 630,
        alt: "Kevin's Vega Quiroga - Portafolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin's Vega Quiroga | Ingeniero de Software Full Stack",
    description:
      "Ingeniero de Software especializado en HealthTech, interoperabilidad clínica y desarrollo Full Stack.",
    images: ["/assets/images/NuevoLogo.png"],
    creator: "@kevinsvega", // Reemplaza con tu usuario de Twitter si tienes
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${sarabun.variable} ${rubik.variable}`}>
      <head>
        {/* JSON-LD Structured Data para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kevin's Vega Quiroga",
              jobTitle: "Ingeniero de Software Full Stack",
              description: "Ingeniero de Software con +4 años de experiencia especializado en HealthTech, interoperabilidad clínica (HL7 FHIR) y desarrollo Full Stack.",
              url: SITE_URL,
              image: `${SITE_URL}/assets/images/team/Foto_30_05.jpg`,
              sameAs: [
                "https://www.linkedin.com/in/kevins-vega-quiroga-01a7b71ab/",
                "https://github.com/kevega3",
              ],
              knowsAbout: [
                "Software Engineering",
                "HealthTech",
                "HL7 FHIR",
                "React",
                "Next.js",
                ".NET",
                "Azure",
                "Full Stack Development",
                "Interoperabilidad Clínica",
              ],
              email: "mailto:kevinsvegaquiroga@gmail.com",
              telephone: "+573114444064",
            }),
          }}
        />
        {/* 
          Icon fonts: se mantienen como <link> porque referencian archivos 
          de fuentes en public/assets/fonts/ con rutas relativas.
          Bootstrap, template styles y color theme ahora se cargan via 
          globals.css (pipeline de Next.js, optimizado y sin render-blocking).
        */}
        <link rel="stylesheet" type="text/css" href="/assets/css/pe-icon-7-stroke.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/materialdesignicons.min.css" />
      </head>
      <body className="dark bg-dark-bg text-body-text-light" suppressHydrationWarning={true}>
        {/* Skip-to-content link para accesibilidad (navegación por teclado) */}
        <a 
          href="#main-content" 
          className="skip-link"
        >
          Saltar al contenido principal
        </a>
        <VisitTracker />
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
