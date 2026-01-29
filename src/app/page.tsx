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

export default function Home() {
  return (
    <main>
      <Navbar navClass="navbar-white" />
      <Section />
      <Clients />
      <Features />
      <Services />
      <WebsiteDescription />
      <AboutUs />
      <GetStarted />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
