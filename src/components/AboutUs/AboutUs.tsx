import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        {/* Título de la sección */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="font-weight-light">Sobre mí</h2>
          </div>
        </div>

        {/* Contenido en dos columnas */}
        <div className="row align-items-center">
          {/* Columna de texto */}
          <div className="col-lg-7 col-md-6 mb-4 mb-md-0">
            <div className="about-content">
              <h3 className="mb-3">Kevin's Vega Quiroga</h3>
              <h5 className="text-primary mb-4">Ingeniero de Software | Full Stack Developer</h5>
              <p className="text-muted">
                Hola, soy <b>Kevin's Vega Quiroga</b>, <b>Ingeniero de Software</b> con más de <b>4 años de experiencia</b>, enfocado en la transformación digital del <b>sector salud (HealthTech)</b>. Poseo una sólida experiencia diseñando soluciones de <b>interoperabilidad clínica</b>, orquestando integraciones complejas bajo estándares como <b>HL7 FHIR</b> y arquitecturas distribuidas.
              </p>
              <p className="text-muted">
                Como apasionado por la <b>Innovación Tecnológica</b>, no solo construyo software, sino ecosistemas escalables de alta disponibilidad. Mi objetivo es resolver desafíos críticos de negocio mediante tecnología robusta, asegurando que la información vital fluya de manera segura y eficiente entre instituciones.
              </p>
            </div>
          </div>

          {/* Columna de imagen */}
          <div className="col-lg-5 col-md-6">
            <div className="about-image text-center">
              <div className="position-relative d-inline-block">
                <Image
                  src="/assets/images/team/Foto_30_05.jpg"
                  alt="Kevin's Vega Quiroga"
                  width={400}
                  height={400}
                  className="img-fluid rounded shadow-lg"
                  style={{ objectFit: 'cover', maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
