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
                Hola, soy <b>Kevin's Vega Quiroga</b>, <b>Ingeniero de Software </b>con mas de<b> 4 años de experiencia</b>, enfocado en la transformación digital del <b>sector salud (HealthTech)</b>. Poseo una sólida experiencia diseñando soluciones de <b>interoperabilidad clínica</b>, orquestando integraciones complejas bajo estándares como <b>HL7 FHIR</b> y arquitecturas distribuidas.
                <br/><br/>
                Como apasionado por la <b>Innovación Tecnológica</b>, no solo construyo software, sino ecosistemas escalables de alta disponibilidad. Mi objetivo es resolver desafíos críticos de negocio mediante tecnología robusta, asegurando que la información vital fluya de manera segura y eficiente entre instituciones.
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
