import React from 'react';
import SectionTitle from "../common/SectionTitle";
import CertificateBox from "./CertificateBox";

const Certificates = () => {
    const certificates = [
      {
        id: 1,
        topic: "SENA",
        title: "Tecnologo en Análisis y Desarrollo de Software",
        description: "Certificación como tecnólogo en desarrollo y análisis de software.",
        link: "/assets/images/certificados/Certificado_SENA.pdf",
      },
      {
        id: 2,
        topic: "HL7 GOV FHIR CAMP",
        title: "Formacion Estandar HL7",
        description: "Formación sobre el estándar de interoperabilidad HL7 FHIR.",
        link: "/assets/images/certificados/HL7.pdf",
      },
      {
        id: 3,
        topic: "Udemy",
        title: "Cero a Experto React",
        description: "Curso completo de React, desde nivel básico a experto.",
        link: "#",
      },
      {
        id: 4,
        topic: "Udemy",
        title: "Cero a Experto JavaScript",
        description: "Dominio de JavaScript, desde los fundamentos hasta nivel avanzado.",
        link: "#",
      },
      {
        id: 5,
        topic: "Udemy",
        title: "SQL Bootcamp with Mysql PHP",
        description: "Curso intensivo sobre MySQL y su integración con PHP.",
        link: "#",
      },
      {
        id: 6,
        topic: "EUROINNOVA",
        title: "Analista y calidad en .NET",
        description: "Certificación en análisis y aseguramiento de calidad en .NET.",
        link: "#",
      },
      {
        id: 7,
        topic: "Udemy",
        title: "Developer Node-Red",
        description: "Desarrollo de flujos y automatización con Node-Red.",
        link: "#",
      },
      {
        id: 8,
        topic: "ScrumStudy",
        title: "Certificado Scrum Fundamentals",
        description: "Fundamentos del marco de trabajo ágil Scrum.",
        link: "#",
      },
      {
        id: 9,
        topic: "Escuela de privacidad",
        title: "Protección de Datos Personales",
        description: "Formación en normativas de protección de datos personales.",
        link: "#",
      },
      {
        id: 10,
        topic: "Udemy",
        title: "Desarrollo Web - FrontEnd Web Developer!",
        description: "Curso completo sobre desarrollo web enfocado en FrontEnd.",
        link: "#",
      },
      {
        id: 11,
        topic: "AWS Academy",
        title: "AWS Academy Cloud Foundations",
        description: "Fundamentos de computación en la nube a través de AWS Academy.",
        link: "#",
      },
      {
        id: 12,
        topic: "Udemy",
        title: "Full Stack React/APl Net C#/SQLServer",
        description: "Fundamentos Desarrollo con C# y React.",
        link: "#",
      }
    ];

    return (
        <section className="section" id="blog" style={{backgroundColor: '#172330'}}>
            <div className="container">
                <SectionTitle 
                    title="Certificaciones" 
                    description="Aquí presento mis certificaciones obtenidas, que avalan mis conocimientos y habilidades en el desarrollo de software y tecnologías clave." 
                />
                <div className="row mt-4">
                    {certificates.map((cert, key) => (
                        <CertificateBox key={key} certificate={cert} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Certificates;
