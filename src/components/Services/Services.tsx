'use client';

import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ServiceBox from './ServiceBox';

const services = [
    {
      title: "React.js",
      icon: "pe-7s-science",
      description: "Utilizo React.js para desarrollar interfaces de usuario interactivas y dinámicas en el front-end.",
    },
    {
      title: "Node.js",
      icon: "mdi mdi-nodejs",
      description: "Con Node.js, desarrollo aplicaciones del lado del servidor que manejan múltiples conexiones de manera eficiente.",
    },
    {
      title: "C# | .NET Core",
      icon: "pe-7s-global",
      description: "Uso Framework .NET, permitiendo la conexión a base de datos como SQL Server para la gestión eficiente.",
    },
    {
      title: "Node-RED",
      icon: "pe-7s-rocket",
      description: "Uso Node-RED para la integración de servicios y la automatización de flujos de trabajo IoT.",
    },
    {
      title: "JavaScript",
      icon: "pe-7s-light",
      description: "JavaScript es el lenguaje principal que utilizo para desarrollar tanto el front-end como el back-end.",
    },
    {
      title: "SQL",
      icon: "pe-7s-server",
      description: "Utilizo SQL para la gestión y manipulación de bases de datos relacionales.",
    },
    {
      title: "Git | GitHub",
      icon: "mdi mdi-git",
      description: "Control de versiones y colaboración en proyectos de software mediante Git y GitHub.",
    },
    {
      title: "MongoDB",
      icon: "mdi mdi-database",
      description: "Manejo de bases de datos NoSQL para almacenamiento flexible y escalable de datos.",
    },
    {
      title: "Linux",
      icon: "mdi mdi-linux",
      description: "Administración de sistemas y despliegue de aplicaciones en entornos Linux.",
    }
];

export default function Services() {
  return (
    <section className="section" id="services" style={{backgroundColor: '#172330'}}>
      <div className="container">
        <SectionTitle
            title="Habilidades"
            description="Aquí encontrarás un listado de mis habilidades técnicas, herramientas y tecnologías que domino."
        />
        <div className="row mt-4">
            {services.map((service, key) => (
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
