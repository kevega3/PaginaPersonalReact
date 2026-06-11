'use client';

import React from 'react';
import Image from 'next/image';
import { config } from '@/config';

export default function Section() {
  const handleDownloadCV = () => {
    window.open(config.urlHojaVida, "_blank", "noopener,noreferrer");
  };

  // Smooth scroll para anchors internos
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      const offset = section.offsetTop - 70;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <section className="section bg-home home-half" id="home" style={{ position: 'relative' }} aria-label="Inicio">
      <div className="bg-overlay" aria-hidden="true"></div>
       {/* Imagen de fondo optimizada con Next.js */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Image 
            src="/assets/images/bg-home.jpg" 
            alt="" 
            fill
            style={{ objectFit: 'cover' }}
            priority
            aria-hidden="true"
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
                aria-label="Descargar hoja de vida en PDF"
              >
                <i className="mdi mdi-download me-2" aria-hidden="true"></i>
                Descargar CV
              </button>
              <a 
                href="#testi" 
                className="btn btn-primary btn-rounded me-3 mb-2"
                onClick={(e) => handleSmoothScroll(e, 'testi')}
                aria-label="Ir a la sección de proyectos"
              >
                Ver Proyectos <i className="mdi mdi-arrow-down ps-1" aria-hidden="true"></i>
              </a>
              <a 
                href="#contact" 
                className="btn btn-light btn-rounded mb-2"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                aria-label="Ir a la sección de contacto"
              >
                Contáctame
              </a>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}
