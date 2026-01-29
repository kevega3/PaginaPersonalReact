import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Service Box
import ServiceBox from "./service-box";

class Services extends Component {
  state = {
    services: [
      {
        title: "React.js",
        icon: "pe-7s-science",
        description:
          "Utilizo React.js para desarrollar interfaces de usuario interactivas y dinámicas en el front-end, generando aplicaciones de alta disponibilidad que consumen APIs para su funcionalidad.",
      },
      {
        title: "Node.js",
        icon: "mdi mdi-nodejs",
        description:
          "Con Node.js, desarrollo aplicaciones del lado del servidor que manejan múltiples conexiones de manera eficiente, utilizando JavaScript para la creación de APIs RESTful y la gestión de la lógica de negocio.",
      },
      {
        title: "C# | .NET Core",
        icon: "pe-7s-global",
        description:
          "Uso Node-RED para la integración de servicios y la automatización de flujos de trabajo, permitiendo la conexión entre dispositivos IoT y APIs de una manera visual y fácil de manejar.",
      },
      {
        title: "Node-RED",
        icon: "pe-7s-rocket",
        description:
          "Uso Node-RED para la integración de servicios y la automatización de flujos de trabajo, permitiendo la conexión entre dispositivos IoT y APIs de una manera visual y fácil de manejar.",
      },
      {
        title: "JavaScript",
        icon: "pe-7s-light",
        description:
          "JavaScript es el lenguaje principal que utilizo para desarrollar tanto el front-end como el back-end de mis aplicaciones, permitiéndome crear interactividad y lógica del lado del cliente y del servidor.",
      },
      {
        title: "SQL",
        icon: "pe-7s-server",
        description:
          "Utilizo SQL para la gestión y manipulación de bases de datos relacionales, asegurando la integridad de los datos y optimizando las consultas para un rendimiento óptimo.",
      },
      {
        title: "Git | GitHub",
        icon: "mdi mdi-github",
        description:
          "Git y GitHub son mis herramientas esenciales para el control de versiones y la colaboración en proyectos, permitiéndome llevar un seguimiento eficaz de los cambios y trabajar en equipo de manera organizada.",
      },
      {
        title: "MongoDB",
        icon: "pe-7s-leaf",
        description:
          "Uso MongoDB como una solución de base de datos NoSQL para el almacenamiento y la gestión de datos en formato JSON, ideal para aplicaciones que requieren escalabilidad y flexibilidad en la estructura de datos.",
      },
      {
        title: "Linux",
        icon: "pe-7s-config",
        description:
          "Trabajo en entornos Linux para la administración de servidores y la implementación de aplicaciones, aprovechando su robustez y seguridad para la ejecución de servicios críticos.",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light " id="services">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="Mis Habilidades"
              description="Cuento con sólidas habilidades en el desarrollo de software y su mantenimiento, y siempre estoy en la búsqueda de adquirir nuevas competencias técnicas. Aquí te presento un detalle de cada una de ellas :"
            />

            <Row className="mt-5">
              {/* render service box */}
              {this.state.services.map((service, key) => (
                <ServiceBox
                  key={key}
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                />
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Services;
