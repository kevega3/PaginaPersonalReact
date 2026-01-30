import React from 'react';
import TeamBox from "./TeamBox";

const AboutUs = () => {
    const members = [
        {
            id: 1,
            name: "Kevin's Vega Quiroga",
            image: "/assets/images/team/Foto_30_05.jpg",
            post: "Ingeniero de Software | Full Stack Developer",
        }
    ];

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="about-title mx-auto text-center">
              <h2 className="font-weight-light">Sobre mí</h2>
              <p className="text-muted pt-4">
                Hola, soy <b>Kevin's Vega Quiroga</b>, <b>Ingeniero de Software</b> y <b>Tecnólogo SENA</b> con experiencia sólida en el ciclo completo de desarrollo, desde la arquitectura hasta el despliegue. Me especializo en la construcción de <b>soluciones interoperables</b> y sistemas de alta disponibilidad.
                <br/><br/>
                Actualmente lidero iniciativas de <b>Innovación Tecnológica</b>, enfocándome en automatización y arquitecturas modernas (Microservicios, Cloud, HL7 FHIR). Mi objetivo no es solo escribir código, sino diseñar sistemas escalables que resuelvan problemas complejos de negocio. Estoy listo para aportar mi experiencia técnica y visión estratégica a equipos de alto rendimiento.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-5" style={{justifyContent:"center"}}>
          {members.map((member, key) => (
            <TeamBox
              key={key}
              name={member.name}
              image={member.image}
              post={member.post}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
