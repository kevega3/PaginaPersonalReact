'use client';

import React from 'react';
import Image from 'next/image';
import { config } from '@/config';

export default function Section() {
  const handleDownloadCV = () => {
    window.open(config.urlHojaVida, "_blank", "noopener,noreferrer");
  };

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
    <section className="section-padding home-half relative" id="home" aria-label="Inicio">
      <div className="bg-overlay" aria-hidden="true"></div>
      <div className="absolute inset-0 -z-10">
        <Image 
            src="/assets/images/bg-home.jpg" 
            alt="" 
            fill
            style={{ objectFit: 'cover' }}
            priority
            aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-white text-center">
          <h4 className="home-small-title">Kevin's Vega Quiroga</h4>
          <h1 className="home-title">
            Ingeniero Desarrollador de Software
          </h1>
          
          <div className="mt-4 pt-2 flex flex-wrap justify-center gap-3">
            <button 
              onClick={handleDownloadCV}
              className="btn-primary-custom"
              aria-label="Descargar hoja de vida en PDF"
            >
              <i className="mdi mdi-download mr-2" aria-hidden="true"></i>
              Descargar CV
            </button>
            <a 
              href="#testi" 
              className="btn-primary-custom"
              onClick={(e) => handleSmoothScroll(e, 'testi')}
              aria-label="Ir a la sección de proyectos"
            >
              Ver Proyectos <i className="mdi mdi-arrow-down ml-1" aria-hidden="true"></i>
            </a>
            <a 
              href="#contact" 
              className="btn-light-custom"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              aria-label="Ir a la sección de contacto"
            >
              Contáctame
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
