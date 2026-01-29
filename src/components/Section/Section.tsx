'use client';

import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';

export default function Section() {
  return (
    <section className="section bg-home home-half" id="home" style={{ position: 'relative' }}>
      <div className="bg-overlay"></div>
       {/* Imagen de fondo optimizada con Next.js */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Image 
            src="/assets/images/bg-home.jpg" 
            alt="Fondo" 
            fill
            style={{ objectFit: 'cover' }}
            priority
        />
      </div>

      <div className="container">
        <div className="row">
          <div
            className="col-lg-8 offset-lg-2 text-white text-center"
          >
            <h4 className="home-small-title">Kevin's Vega Quiroga</h4>
            <h1 className="home-title">
            Ingeniero Desarrollador de Software
            </h1>
            <p className="pt-3 home-desc mx-auto">
            Con vasta experiencia en el desarrollo de software, me especializo en crear productos y soluciones tecnológicas que aporten valor y eficiencia a cada proyecto. Mi pasión es construir aplicaciones que sean tanto innovadoras como fáciles de usar, asegurándome de que cada detalle esté alineado con las necesidades del usuario.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
