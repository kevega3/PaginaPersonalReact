import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Clients extends Component {
  state = {
    clients: [
      { id: 1, img: "assets/images/clients/smart.png" },
      { id: 3, img: "assets/images/clients/3.png" },
   
    ],
  };
  render() {
    return (
      <React.Fragment>
        <section className="section-sm bg-light">
          <Container>
            <Row style={{justifyContent:"center"}}> 
              {this.state.clients.map((client, key) => (
                <Col md="3" key={key}>
                  <div className="client-images my-3 my-md-0">
                    <img
                      src={client.img}
                      alt="logo-img"
                      className="mx-auto img-fluid d-block"
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Clients;
