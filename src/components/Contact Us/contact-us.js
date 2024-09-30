import React from "react";
import { Container, Row, Col, Button, FormFeedback, Form, Input } from "reactstrap";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

//Import Section Title
import SectionTitle from "../common/section-title";

const ContactUs = () => {
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
        name: '',
        email: '',
        subject: '',
    },
    validationSchema: Yup.object({
        name: Yup.string().required("Porfavor ingresa tu Nombre"),
        email: Yup.string().required("Porfavor ingresa tu Email"),
        subject: Yup.string().required("Porfavor ingresa un asunto al correo"),
    }),
    onSubmit: (values) => {
        console.log("values",values);
    }
});
    return (
      <React.Fragment>
        <section className="section " id="contact">
          <Container>
            {/* Render section title */}
            <SectionTitle
              title="Contacto"
              description="Estamos aquí para ayudarte a llevar tus ideas al siguiente nivel. Si tienes preguntas, propuestas o simplemente deseas intercambiar ideas sobre desarrollo de software, no dudes en ponerte en contacto."
            />

            <Row>
              <Col lg="4">
                <div className="mt-4 pt-4">
                  <p className="mt-4">
                    <span className="h5">Celular:</span>
                    <br />{" "}
                    <span className="text-muted d-block mt-2">
                      +57 311 444 40 64
                    </span>
                  </p>
                  <p className="mt-4">
                    <span className="h5">Email:</span>
                    <br />{" "}
                    <span className="text-muted d-block mt-2">
                      antirap3@gmail.com
                    </span>
                  </p>
                  <p className="mt-4">
                    <span className="h5">Horario de Trabajo:</span>
                    <br />{" "}
                    <span className="text-muted d-block mt-2">
                      6:00AM a 6:00PM
                    </span>
                  </p>
                </div>
              </Col>
              <Col lg="8">
                <div className="custom-form mt-4 pt-4">
                <p id="error-msg"></p>
                  <div id="message"></div>
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                  }}>
                    <Row>
                      <Col lg="6 mt-2">
                      <Input
                          name="name"
                          className=""
                          placeholder="Nombre Completo*"
                          type="text"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.name || ""}
                          invalid={
                              validation.touched.name && validation.errors.name ? true : false
                          }
                      />
                      {validation.touched.name && validation.errors.name ? (
                          <FormFeedback type="invalid">{validation.errors.name}</FormFeedback>
                      ) : null}
                      </Col>
                      <Col lg="6 mt-2">
                      <Input
                            name="email"
                            className=""
                            placeholder="Email*"
                            type="email"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.email || ""}
                            invalid={
                                validation.touched.email && validation.errors.email ? true : false
                            }
                        />
                        {validation.touched.email && validation.errors.email ? (
                            <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                        ) : null}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12 mt-2">
                      <Input
                            name="subject"
                            className=""
                            placeholder="Tu Asunto.."
                            type="text"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.subject || ""}
                            invalid={
                                validation.touched.subject && validation.errors.subject ? true : false
                            }
                        />
                        {validation.touched.subject && validation.errors.subject ? (
                            <FormFeedback type="invalid">{validation.errors.subject}</FormFeedback>
                        ) : null}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12 mt-2">
                        <div className="form-group">
                          <textarea
                            name="comments"
                            id="comments"
                            rows="4"
                            className="form-control"
                            placeholder="Tu mensaje, puedes dejarme tu contactos tambien :D ..."
                          ></textarea>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12" className="text-end">
                        <Button className="submitBnt btn btn-primary">
                          Enviar
                        </Button>
                        <div id="simple-msg"></div>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
}

export default ContactUs;
