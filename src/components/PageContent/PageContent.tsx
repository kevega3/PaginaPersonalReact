'use client';

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
import { AnimatedSection } from "@/components/common/AnimatedSection";
import type { PortfolioData } from "@/types";

interface PageContentProps {
  data: PortfolioData;
  hasError: boolean;
}

export default function PageContent({ data, hasError }: PageContentProps) {
  return (
    <main>
      {hasError && (
        <div className="bg-yellow-500/20 text-yellow-200 text-center py-2 px-4" role="alert">
          <i className="mdi mdi-alert mr-2"></i>
          Algunos contenidos no pudieron cargarse. Por favor intenta nuevamente más tarde.
        </div>
      )}
      <Navbar navClass="navbar-white" />
      <Section />
      <AnimatedSection>
        <AboutUs />
      </AnimatedSection>
      <AnimatedSection>
        <WebsiteDescription />
      </AnimatedSection>
      <AnimatedSection>
        <Services data={data.services} />
      </AnimatedSection>
      <AnimatedSection>
        <GetStarted />
      </AnimatedSection>
      <AnimatedSection>
        <Projects data={data.projects} />
      </AnimatedSection>
      <AnimatedSection>
        <Certificates data={data.certificates} />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
