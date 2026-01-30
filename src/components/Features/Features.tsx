'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { config } from '@/config';

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 order-2 order-lg-1">
            <div className="features-box mt-5 mt-lg-0">
              <h3>Perfil <span>Profesional</span></h3>
              <p className="text-muted web-desc">
                Ingeniero de Software especializado en la arquitectura y desarrollo de sistemas de información escalables. Cuento con mas de 4 años de experiencia y una trayectoria sólida integrando tecnologías modernas (React/Next.js) con ecosistemas empresariales (.NET/Azure), enfocándome no solo en la escritura de código, sino en la entrega de valor tangible mediante la optimización de procesos y la interoperabilidad de datos.
              </p>

              <ul className="text-muted list-unstyled mt-4 features-item-list">
                <li style={{marginBottom: '10px'}}>Arquitectura de Software & Cloud</li>
                <li style={{marginBottom: '10px'}}>Interoperabilidad Clínica (HL7 FHIR)</li>
                <li>Desarrollo Full Stack Multiplataforma</li>
              </ul>
              <Link
                href={config.urlHojaVida}
                target="_blank"
                className="btn btn-primary mt-4 waves-effect waves-light"
                style={{color: "white"}}
              >
                Descargar CV 
              </Link>
            </div>
          </div>
          <div className="col-lg-7 order-1 order-lg-2">
            <div className="features-img mx-auto me-lg-0">
              <Image
                src="/assets/images/growth-analytics.svg"
                alt="macbook"
                className="img-fluid"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
