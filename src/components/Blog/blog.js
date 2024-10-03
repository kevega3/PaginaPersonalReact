import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Blog Box
import BlogBox from "./blog-box";

class Blog extends Component {
  state = {
    blogs: [
      {
        id: 1,
        topic: "SENA",
        title: "Tecnologo en Análisis y Desarrollo de Software",
        description: "Certificación como tecnólogo en desarrollo y análisis de software.",
        link: "assets/images/certificados/Certificado_SENA.pdf",
      },
      {
        id: 2,
        topic: "HL7 GOV FHIR CAMP",
        title: "Formacion Estandar HL7",
        description: "Formación sobre el estándar de interoperabilidad HL7 FHIR.",
        link: "assets/images/certificados/HL7.pdf",
      },
      {
        id: 3,
        topic: "Udemy",
        title: "Cero a Experto React",
        description: "Curso completo de React, desde nivel básico a experto.",
        link: "assets/images/certificados/CertificadoReact.pdf",
      },
      {
        id: 4,
        topic: "Udemy",
        title: "Cero a Experto JavaScript",
        description: "Dominio de JavaScript, desde los fundamentos hasta nivel avanzado.",
        link: "assets/images/certificados/JavaScrip.pdf",
      },
      {
        id: 5,
        topic: "Udemy",
        title: "SQL Bootcamp with Mysql PHP",
        description: "Curso intensivo sobre MySQL y su integración con PHP.",
        link: "assets/images/certificados/Bootcamp PHP.pdf",
      },
      {
        id: 6,
        topic: "EUROINNOVA",
        title: "Analista y calidad en .NET",
        description: "Certificación en análisis y aseguramiento de calidad en .NET.",
        link: "assets/images/certificados/Analista_NET.pdf",
      },
      {
        id: 7,
        topic: "Udemy",
        title: "Developer Node-Red",
        description: "Desarrollo de flujos y automatización con Node-Red.",
        link: "assets/images/certificados/NODE-RED.pdf",
      },
      {
        id: 8,
        topic: "ScrumStudy",
        title: "Certificado Scrum Fundamentals",
        description: "Fundamentos del marco de trabajo ágil Scrum.",
        link: "assets/images/certificados/Certificado Scrum Fundamentals.pdf",
      },
      {
        id: 9,
        topic: "Escuela de privacidad",
        title: "Protección de Datos Personales",
        description: "Formación en normativas de protección de datos personales.",
        link: "assets/images/certificados/Tratamiento de datos personales.pdf",
      },
      {
        id: 10,
        topic: "Udemy",
        title: "Desarrollo Web - FrontEnd Web Developer!",
        description: "Curso completo sobre desarrollo web enfocado en FrontEnd.",
        link: "assets/images/certificados/FrondEnd.pdf",
      },
      {
        id: 11,
        topic: "AWS Academy",
        title: "AWS Academy Cloud Foundations",
        description: "Fundamentos de computación en la nube a través de AWS Academy.",
        link: "assets/images/certificados/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20240517-8-b4b2cy (1).pdf",
      },
    ]
    
  };
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light active" id="blog">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="Certificaciones"
              description="A lo largo de mi carrera como desarrollador de software, he adquirido diversas certificaciones que respaldan mis habilidades y conocimientos técnicos. Estas certificaciones no solo demuestran mi dominio en áreas clave de la tecnología, sino también mi compromiso con el aprendizaje continuo y la mejora constante. A continuación, puedes ver las credenciales obtenidas en diferentes plataformas y tecnologías que me permiten crear soluciones eficientes y seguras."
            />

            <Row className="mt-4">
              {/* Render blog boxes */}
              {this.state.blogs.map((blog, key) => (
                <BlogBox key={key} blog={blog} />
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Blog;
