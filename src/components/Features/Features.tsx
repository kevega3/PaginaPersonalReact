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
              <h3>Yo Soy <span>Kevin''s</span> Vega</h3>
              <p className="text-muted web-desc">
                Ingeniero Desarrollador de Software con mas de 2 años de experiencia abarcando el desarrollo de aplicaciones de gestión de información, diseño web personalizado, y análisis y gestión de bases de datos.Con una actitud proactiva y orientada a resultados, estoy siempre en búsqueda de nuevos retos profesionales que me permitan seguir creciendo y aportando valor a las organizaciones.
              </p>

              <ul className="text-muted list-unstyled mt-4 features-item-list">
                <li style={{marginBottom: '10px'}}>Desarrollador Full Stack</li>
                <li>Ingeniero de Software</li>
              </ul>
              <Link
                href={config.urlHojaVida}
                target="_blank"
                className="btn btn-primary mt-4 waves-effect waves-light"
                style={{color: "white"}}
              >
                Mirar Hv
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
