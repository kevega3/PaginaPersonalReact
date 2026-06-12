import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="section-padding bg-section" id="about">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-light">Sobre mí</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div>
              <h3 className="mb-3">Kevin's Vega Quiroga</h3>
              <h5 className="text-primary mb-4">Ingeniero de Software | Full Stack Developer</h5>
              <p className="text-body-text-secondary">
                Hola, soy <b>Kevin's Vega Quiroga</b>, <b>Ingeniero de Software</b> con más de <b>4 años de experiencia</b>, enfocado en la transformación digital del <b>sector salud (HealthTech)</b>. Poseo una sólida experiencia diseñando soluciones de <b>interoperabilidad clínica</b>, orquestando integraciones complejas bajo estándares como <b>HL7 FHIR</b> y arquitecturas distribuidas.
              </p>
              <p className="text-body-text-secondary mt-4">
                Como apasionado por la <b>Innovación Tecnológica</b>, no solo construyo software, sino ecosistemas escalables de alta disponibilidad. Mi objetivo es resolver desafíos críticos de negocio mediante tecnología robusta, asegurando que la información vital fluya de manera segura y eficiente entre instituciones.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="text-center">
              <div className="relative inline-block">
                <Image
                  src="/assets/images/team/Foto_30_05.jpg"
                  alt="Kevin's Vega Quiroga"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg max-w-full h-auto"
                  style={{ objectFit: 'cover' }}
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
