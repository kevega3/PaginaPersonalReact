import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import config from '../../config.json'

class Features extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="features">
          <Container>
            <Row className="align-items-center">
              <Col lg="5" className="order-2 order-lg-1">
                <div className="features-box mt-5 mt-lg-0">
                <h3>Yo Soy <span>Kevin's</span> Vega</h3>
                  <p className="text-muted web-desc">
                    Ingeniero Desarrollador de Software con mas de 2 años de experiencia abarcando el desarrollo de aplicaciones de gestión de información, diseño web personalizado, y análisis y gestión de bases de datos.Con una actitud proactiva y orientada a resultados, estoy siempre en búsqueda de nuevos retos profesionales que me permitan seguir creciendo y aportando valor a las organizaciones.
                  </p>

                  <ul className="text-muted list-unstyled mt-4 features-item-list">
                    <li className="">Desarrollador Full Stack</li>
                    <li className="">
                      Ingeniero de Software
                    </li>
                  
                  </ul>
                  <Link
                    to={config.urlHojaVida}
                    target={"_blank"}
                    className="btn btn-primary mt-4 waves-effect waves-light"
                  >
                    Descargar CV
                  </Link>
                </div>
              </Col>
              <Col lg={{ size: 7, order: 2 }} xs={{ order: 1 }}>
                <div className="features-img mx-auto me-lg-0">
                  <img
                    src="assets/images/growth-analytics.svg"
                    alt="macbook"
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Features;
