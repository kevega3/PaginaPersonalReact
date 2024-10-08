import React, { Component } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

class TestimonialBox extends Component {
  render() {
    return (
      <React.Fragment>
        <Col lg="4">
          <div className="testimonial-box mt-4">
            <div className="testimonial-decs p-4">
              <div className="testi-icon">
              <i className="mdi mdi-check-decagram display-1"></i>
              </div>
              {/* <img
                src={this.props.testimonial.image}
                alt=""
                className="img-fluid mx-auto d-block img-thumbnail rounded-circle mb-4"
              /> */}
              <div className="p-1">
                <h5 className="text-center text-uppercase mb-3">
                  {this.props.testimonial.name} -{" "}
                  <span className="text-muted text-capitalize">
                    {this.props.testimonial.cmpName}
                  </span>
                </h5>
                <p className="text-muted text-justify mb-0" style={{ "text-align": "justify"}}>
                  {this.props.testimonial.message}
                </p>
                
                { 
                  this.props.testimonial.link && (
                    <Link to={this.props.testimonial.link} target="_blank" className="read-btn">
                      Visitar <i className="mdi mdi-arrow-right"></i>
                    </Link>
                  ) 
                }
                
              </div>
            </div>
          </div>
        </Col>
      </React.Fragment>
    );
  }
}

export default TestimonialBox;
