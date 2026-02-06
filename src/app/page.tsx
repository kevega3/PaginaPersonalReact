import Navbar from "@/components/Navbar/Navbar";
import Section from "@/components/Section/Section";
import Clients from "@/components/Clients/Clients";
import Features from "@/components/Features/Features";
import Services from "@/components/Services/Services";
import WebsiteDescription from "@/components/WebsiteDescription/WebsiteDescription";
import AboutUs from "@/components/AboutUs/AboutUs";
import GetStarted from "@/components/GetStarted/GetStarted";
import Projects from "@/components/Projects/Projects";
import Certificates from "@/components/Certificates/Certificates";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import { getPortfolioData } from "@/data/db-client";

export default async function Home() {
  const data = await getPortfolioData();

  return (
    <main>
      <Navbar navClass="navbar-white" />
      <Section />
      <Clients />
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
