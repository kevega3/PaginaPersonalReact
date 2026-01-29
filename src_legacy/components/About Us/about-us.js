import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Team Box
import TeamBox from "./team-box";

class AboutUs extends Component {
  state = {
    members: [
      {
        id: 1,
        name: "Kevin's Vega Quiroga ",
        image: "assets/images/team/Foto_30_05.jpg",
        post: "Ingeniero de Software",
      }
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="section" id="about">
          <Container>
            <Row>
              <Col lg={{ size: 8, offset: 2 }}>
                <div className="about-title mx-auto text-center">
                  <h2 className="font-weight-light">
                    Sobre mí
                  </h2>
                  <p className="text-muted pt-4">
                  ¡Hola! mi nombre es <b> Kevin's Vega Quiroga  </b>soy <b>Ingeniero de Software certificado</b> por la <b> Fundación Compensar </b>y  <b>Tecnólogo certificado </b>  por el <b>SENA</b>, con una sólida formación en <b>desarrollo de software</b> y experiencia en la gestión de proyectos tecnológicos. Actualmente, trabajo en el área de Tecnología e Innovación, donde he adquirido habilidades técnicas clave en interoperabilidad, automatización y creación de software especializado. <br></br><br></br> <b>Estoy siempre abierto a nuevas oportunidades laborales </b>que me permitan continuar creciendo y enfrentar nuevos desafíos. Mi enfoque se centra en desarrollar soluciones eficientes y de alto impacto, tanto en términos tecnológicos como en resultados para los usuarios.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="mt-5" style={{justifyContent:"center"}}>
              
              {this.state.members.map((member, key) => (
                <TeamBox
                  key={key}
                  name={member.name}
                  image={member.image}
                  post={member.post}
                />
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default AboutUs;
