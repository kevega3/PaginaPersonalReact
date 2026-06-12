'use client';

import React from 'react';
import Link from 'next/link';

export default function WebsiteDescription() {
  return (
    <section className="section-padding relative" style={{ backgroundColor: 'var(--bg-hard)' }}>
      <div className="bg-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-white">Desarrollando todos los días</h2>
          <p className="pt-3 text-white/70 max-w-xl mx-auto">
            Gran parte de mis proyectos se encuentran en repositorios privados, pero te invito a que le eches un vistazo a mi GitHub. Estoy emocionado por la posibilidad de colaborar y desarrollar juntos en el futuro. 
            <br></br>
            <br></br>
            ¡Espero que encuentres algo interesante!
          </p>
          <Link
            href="https://github.com/kevega3?tab=repositories"
            className="btn-light-custom mt-10 inline-flex"
            target="_blank"
          >
            GitHub  <i className="mdi mdi-github ml-2" style={{fontSize:'19px'}}></i> 
          </Link>
        </div>
      </div>
    </section>
  );
}
