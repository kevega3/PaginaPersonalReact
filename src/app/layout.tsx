import { Sarabun, Rubik } from "next/font/google"; // Importamos las fuentes de Google optimizadas por Next.js
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

export const metadata = {
  title: "Kevins Vega",
  description: "Portafolio Personal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${sarabun.variable} ${rubik.variable}`}>
      <head>
        {/* Cargamos los estilos legacy desde public/assets por ahora para mantener fidelidad visual */}
        <link rel="stylesheet" type="text/css" href="/assets/css/pe-icon-7-stroke.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/materialdesignicons.min.css" />
        {/* <link rel="stylesheet" type="text/css" href="/assets/css/waves.css" /> */}
        <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />
        {/* <link rel="stylesheet" type="text/css" href="/assets/css/magnific-popup.css" /> */}
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
        {/* Tema por defecto */}
        <link rel="stylesheet" id="colorTheme" type="text/css" href="/assets/colors/cyan.css" />
      </head>
      <body data-bs-theme="dark" suppressHydrationWarning={true}>
        <VisitTracker />
        {children}
      </body>
    </html>
  );
}
