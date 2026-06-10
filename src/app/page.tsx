import Navbar from "@/components/Navbar/Navbar";
import Section from "@/components/Section/Section";
import Services from "@/components/Services/Services";
import WebsiteDescription from "@/components/WebsiteDescription/WebsiteDescription";
import AboutUs from "@/components/AboutUs/AboutUs";
import GetStarted from "@/components/GetStarted/GetStarted";
import Projects from "@/components/Projects/Projects";
import Certificates from "@/components/Certificates/Certificates";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import { getPortfolioData } from "@/data/db-client";
import type { PortfolioData } from "@/types";

// Revalidar la página cada 1 hora (3600 segundos)
export const revalidate = 3600;

export default async function Home() {
  let data: PortfolioData;
  let hasError = false;

  try {
    data = await getPortfolioData();
  } catch (error) {
    console.error('Error al cargar datos del portafolio:', error);
    // Fallback: página sigue renderizando con secciones estáticas
    data = { services: [], projects: [], certificates: [] };
    hasError = true;
  }

  return (
    <main>
      {hasError && (
        <div className="alert alert-warning text-center mb-0 rounded-0" role="alert">
          <i className="mdi mdi-alert me-2"></i>
          Algunos contenidos no pudieron cargarse. Por favor intenta nuevamente más tarde.
        </div>
      )}
      <Navbar navClass="navbar-white" />
      <Section />
      <AboutUs />
      <WebsiteDescription />
      <Services data={data.services} />
      <GetStarted />
      <Projects data={data.projects} />
      <Certificates data={data.certificates} />
      <Contact />
      <Footer />
    </main>
  );
}
