import React, { Component } from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

//Import Testimonial Box
import TestimonialBox from "./testimonial-box";

class Testimonials extends Component {
  state = {
    testimonials: [
      {
        id: 1,
        name: "Interoperabilidad en Salud",
        cmpName: "Desarrollo Privado",
        message:
          "Desarrollé e implementé un proyecto de interoperabilidad a nivel nacional con las principales EPS en Colombia. Optimicé el intercambio de historias clínicas, reduciendo costos y esfuerzo humano significativamente.",
      },
      {
        id: 2,
        name: "Sinco-AYF",
        cmpName: "Desarrollo hobby ",
        message:
          "Este proyecto es una página web creada como hobby para gestionar y automatizar la venta de vehículos. Permite a los usuarios registrar sus ventas y generar reportes automáticos, simplificando el seguimiento de inventario y el análisis de ventas.",
        link: "https://front-sincoayf.vercel.app/",
      },
      {
        id: 3,

        name: "Micrositios Azure",
        cmpName: "Desarrollo Privado",
        message:
          "Creé dos aplicaciones para compartir información sensible de manera segura. Implementé un micrositio como explorador de archivos seguro y una plataforma de carga de información utilizando Azure BlobStorage.",
      },

      {
        id: 4,

        name: "Data Warehouse",
        cmpName: "Desarrollo Privado",
        message:
          "Desarrollé una bodega de datos en la nube para proporcionar acceso seguro y disponible a las bases de datos, agilizando el proceso de compartir tablas y bases de datos en SQL Server para todos los colaboradores de la empresa.",
      },
      {
        id: 5,
        name: "MovieSmart",
        cmpName: "Desarrollo hobby ",
        message:
          "Este proyecto es una página web creada como hobby, donde los usuarios pueden descubrir fácilmente trailers de películas recientes. Aprovechando las APIs de TMDB, la web muestra avances de títulos populares y próximos estrenos con información actualizada.",
        link: "https://moviesmart.vercel.app/",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="section " id="testi">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="Proyectos destacados"
              description="A lo largo de mi carrera he tenido la oportunidad de trabajar en una variedad de proyectos que me han permitido crecer tanto a nivel profesional como personal. De entre todos ellos, los siguientes desarrollos ocupan un lugar especial en mi trayectoria. No solo me desafiaron a mejorar mis habilidades en el área de tecnología, sino que también representan logros significativos en mi carrera. Cada uno de estos proyectos dejó una huella en mi camino, y me ayudó a convertirme en el profesional que soy hoy."
            />

            <Row className="mt-5">
              {/* render testimonials box */}
              {this.state.testimonials.map((testimonial, key) => (
                <TestimonialBox key={key} testimonial={testimonial} />
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Testimonials;
