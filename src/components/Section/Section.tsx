'use client';

import React from 'react';
import Image from 'next/image';
import { config } from '@/config';

export default function Section() {
  const handleDownloadCV = () => {
    window.open(config.urlHojaVida, "_blank");
  };

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
            
            <div className="mt-4 pt-2">
              <button 
                onClick={handleDownloadCV}
                className="btn btn-primary btn-rounded me-3 mb-2"
                
              >
                <i className="mdi mdi-download me-2"></i>
                Descargar CV
              </button>
              <a href="#testi" className="btn btn-primary btn-rounded me-3 mb-2">
                Ver Proyectos <i className="mdi mdi-arrow-down ps-1"></i>
              </a>
              <a href="#contact" className="btn btn-light btn-rounded mb-2">
                Contáctame
              </a>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}
