import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class GetStarted extends Component {
    render() {
        return (
            <React.Fragment>
        <section className="section section-lg bg-get-start">
            <div className="bg-overlay"></div>
            <Container>
                <Row>
                    <Col lg={{size :8, offset:2}} className="text-center">
                        <h1 className="get-started-title text-white">Conectando con profesionales</h1>
                        <div className="section-title-border mt-4 bg-white"></div>
                        <p className="section-subtitle font-secondary text-white text-center pt-4">Aunque gran parte de mi trabajo está enfocado en proyectos privados, te invito a que visites mi perfil de LinkedIn. Estoy siempre abierto a nuevas oportunidades de colaboración y networking para crecer juntos profesionalmente.</p>
                        <br></br>
                        <p>¡Espero que podamos conectar pronto!</p> 

                        <Link to="https://www.linkedin.com/in/kevins-vega-quiroga-01a7b71ab/" target='_black' className="btn btn-light waves-effect mt-4">Linkedin <i className="mdi mdi-linkedin" style={{fontSize:'19px'}}></i> </Link>
                    </Col>
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}

export default GetStarted;