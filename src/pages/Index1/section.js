import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";


class Section extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.callModal.bind(this);
  }

  callModal = () => {
    this.refs.child.openModal();
  };

  render() {
    return (
      <React.Fragment>
        <section className="section bg-home home-half" id="home" data-image-src="images/bg-home.jpg"> 
          <div className="bg-overlay"></div>
          <Container>
            <Row>
              <Col
                lg={{ size: 8, offset: 2 }}
                className="text-white text-center"
              >
                <h4 className="home-small-title">Kevin's Vega Quiroga</h4>
                <h1 className="home-title">
                Desarrollador de Software
                </h1>
                <p className="pt-3 home-desc mx-auto">
                Con vasta experiencia en el desarrollo de software, me especializo en crear productos y soluciones tecnológicas que aporten valor y eficiencia a cada proyecto. Mi pasión es construir aplicaciones que sean tanto innovadoras como fáciles de usar, asegurándome de que cada detalle esté alineado con las necesidades del usuario.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
