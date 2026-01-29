import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class WebsiteDescription extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-web-desc">
          <div className="bg-overlay"></div>
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="text-white">Desarrollando todos los días</h2>
                <p className="pt-3 home-desc mx-auto">
                Gran parte de mis proyectos se encuentran en repositorios privados, pero te invito a que le eches un vistazo a mi GitHub. Estoy emocionado por la posibilidad de colaborar y desarrollar juntos en el futuro. 
                <br></br>
                <br></br>

                ¡Espero que encuentres algo interesante!
                </p>
                <Link
                  to="https://github.com/kevega3?tab=repositories"
                  className="btn btn-light mt-5 waves-effect waves-light"
                  target="_black"
                >
                  GitHub  <i className="mdi mdi-github" style={{fontSize:'19px'}}></i> 
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default WebsiteDescription;
