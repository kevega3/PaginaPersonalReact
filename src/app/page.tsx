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
import db from "@/data/db.json"; // Simulating fetching from the API locally for SSG efficiency

// Function to fetch data (simulated for now, can be replaced with actual fetch)
async function getPortfolioData() {
  // In a real scenario with an external API:
  // const res = await fetch("http://localhost:3000/api/portfolio", { cache: "no-store" });
  // if (!res.ok) throw new Error("Failed to fetch data");
  // return res.json();
  
  // For internal data in Server Components, importing directly is faster and safer during build
  return db;
}

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
