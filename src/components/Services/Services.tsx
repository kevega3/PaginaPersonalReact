'use client';

import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ServiceBox from './ServiceBox';
import { Service } from '@/types';

interface ServicesProps {
    data: Service[];
}

export default function Services({ data }: ServicesProps) {
  return (
    <section className="section-padding bg-dark-card" id="services">
      <div className="container mx-auto px-4">
        <SectionTitle
            title="Habilidades"
            description="Aquí encontrarás un listado de mis habilidades técnicas, herramientas y tecnologías que domino para el desarrollo de soluciones de software eficientes y escalables."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {data.map((service, key) => (
                <ServiceBox
                    key={key}
                    title={service.title}
                    icon={service.icon}
                    description={service.description}
                />
            ))}
        </div>
      </div>
    </section>
  );
}
