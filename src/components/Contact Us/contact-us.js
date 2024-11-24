import React from "react";
import { PostMensaje } from "../../Services/contactoServices";
import { useAlert } from "../../context/alertasContext";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import {
  Container,
  Row,
  Col,
  Button,
  FormFeedback,
  Form,
  Input,
} from "reactstrap";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

//Import Section Title
import SectionTitle from "../common/section-title";

const ContactUs = () => {
  const { alertas } = useAlert();
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      nombreCompleto: "",
      email: "",
      asunto: "",
      mensaje: "",
    },
    validationSchema: Yup.object({
      nombreCompleto: Yup.string().required(
        "Porfavor ingresa tu Nombre Completo"
      ),
      email: Yup.string().required("Porfavor ingresa tu Email"),
      asunto: Yup.string().required("Porfavor ingresa un asunto al correo"),
      mensaje: Yup.string().required(
        "Porfavor agregar mensaje, puedes dejarme tu contactos tambien :D ..."
      ),
    }),
    onSubmit: async (values) => {
      console.log("API Token:", process.env.REACT_APP_APITOKEN);
      try {
        console.log(values);
        const { data: response } = await PostMensaje(values);

        alertas("success", response.data?.ayuda, "Proceso Exitoso!");
      } catch (error) {
        let errores = "";
        if (error.response?.data?.detalles) {
          errores = error.response.data.detalles.join(", ");
        } else {
          errores =
            error.response?.data?.ayuda ??
            error?.message ??
            "Error no Controlado";
        }

        alertas("error", (errores = errores.replace(/"/g, "")), "");
      }
    },
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
                  }}
                >
                  <Row>
                    <Col lg="6 mt-2">
                      <Input
                        name="nombreCompleto"
                        className=""
                        placeholder="Nombre Completo*"
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.nombreCompleto || ""}
                        invalid={
                          validation.touched.nombreCompleto &&
                          validation.errors.nombreCompleto
                            ? true
                            : false
                        }
                      />
                      {validation.touched.nombreCompleto &&
                      validation.errors.nombreCompleto ? (
                        <FormFeedback type="invalid">
                          {validation.errors.nombreCompleto}
                        </FormFeedback>
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
                          validation.touched.email && validation.errors.email
                            ? true
                            : false
                        }
                      />
                      {validation.touched.email && validation.errors.email ? (
                        <FormFeedback type="invalid">
                          {validation.errors.email}
                        </FormFeedback>
                      ) : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12 mt-2">
                      <Input
                        name="asunto"
                        className=""
                        placeholder="Tu Asunto.."
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.asunto || ""}
                        invalid={
                          validation.touched.asunto && validation.errors.asunto
                            ? true
                            : false
                        }
                      />
                      {validation.touched.asunto && validation.errors.asunto ? (
                        <FormFeedback type="invalid">
                          {validation.errors.asunto}
                        </FormFeedback>
                      ) : null}
                    </Col>
                  </Row>
                  <Row>
                    {/* <Col lg="12 mt-2">
                      <div className="form-group">
                        <textarea
                          name="mensaje"
                          id="comments"
                          rows="4"
                          className="form-control"
                          placeholder="Tu mensaje, puedes dejarme tu contactos tambien :D ..."
                        ></textarea>
                      </div>
                    </Col> */}
                    <Col lg="12 mt-2">
                      <div className="form-group">
                        <Input
                          type="textarea"
                          name="mensaje"
                          id="mensaje"
                          rows="4"
                          className="form-control"
                          placeholder="Tu mensaje, puedes dejarme tu contactos tambien :D ..."
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.mensaje || ""}
                          invalid={
                            validation.touched.mensaje &&
                            validation.errors.mensaje
                              ? true
                              : false
                          }
                        />
                        {validation.touched.mensaje &&
                        validation.errors.mensaje ? (
                          <FormFeedback type="invalid">
                            {validation.errors.mensaje}
                          </FormFeedback>
                        ) : null}
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
};

export default ContactUs;
