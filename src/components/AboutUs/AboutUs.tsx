import React from 'react';
import TeamBox from "./TeamBox";

const AboutUs = () => {
    const members = [
        {
            id: 1,
            name: "Kevin''s Vega Quiroga",
            image: "/assets/images/team/Foto_30_05.jpg",
            post: "Ingeniero de Software",
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
                ¡Hola! mi nombre es <b> Kevin''s Vega Quiroga </b>soy <b>Ingeniero de Software certificado</b> por la <b> Fundación Compensar </b>y <b>Tecnólogo certificado </b> por el <b>SENA</b>, con una sólida formación en <b>desarrollo de software</b> y experiencia en la gestión de proyectos tecnológicos. Actualmente, trabajo en el área de Tecnología e Innovación, donde he adquirido habilidades técnicas clave en interoperabilidad, automatización y creación de software especializado. 
                <br/><br/> 
                <b>Estoy siempre abierto a nuevas oportunidades laborales </b>que me permitan continuar creciendo y enfrentar nuevos desafíos. Mi enfoque se centra en desarrollar soluciones eficientes y de alto impacto, tanto en términos tecnológicos como en resultados para los usuarios.
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
