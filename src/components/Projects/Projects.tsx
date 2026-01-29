import React from 'react';
import SectionTitle from "../common/SectionTitle";
import ProjectBox from "./ProjectBox";

const Projects = () => {
    const projects = [
      {
        id: 1,
        name: "Interoperabilidad en Salud",
        cmpName: "Desarrollo Privado",
        message: "Desarrollé e implementé un proyecto de interoperabilidad a nivel nacional con las principales EPS en Colombia. Optimicé el intercambio de historias clínicas, reduciendo costos y esfuerzo humano significativamente.",
      },
      {
        id: 2,
        name: "Sinco-AYF",
        cmpName: "Desarrollo hobby ",
        message: "Este proyecto es una página web creada como hobby para gestionar y automatizar la venta de vehículos. Permite a los usuarios registrar sus ventas y generar reportes automáticos, simplificando el seguimiento de inventario y el análisis de ventas.",
        link: "https://front-sincoayf.vercel.app/",
      },
      {
        id: 3,
        name: "Micrositios Azure",
        cmpName: "Desarrollo Privado",
        message: "Creé dos aplicaciones para compartir información sensible de manera segura. Implementé un micrositio como explorador de archivos seguro y una plataforma de carga de información utilizando Azure BlobStorage.",
      },
      {
        id: 4,
        name: "Data Warehouse",
        cmpName: "Desarrollo Privado",
        message: "Desarrollé una bodega de datos en la nube para proporcionar acceso seguro y disponible a las bases de datos, agilizando el proceso de compartir tablas y bases de datos en SQL Server para todos los colaboradores de la empresa.",
      },
      {
        id: 5,
        name: "MovieSmart",
        cmpName: "Desarrollo hobby",
        message: "Este proyecto es una página web creada como hobby, donde los usuarios pueden descubrir fácilmente trailers de películas recientes. Aprovechando las APIs de TMDB, la web muestra avances de títulos populares y próximos estrenos con información actualizada.",
      }
    ];

    return (
        <section className="section bg-light" id="testi">
            <div className="container">
                <SectionTitle 
                    title="Proyectos destacados" 
                    description="Estos son algunos de los proyectos en los que he trabajado, abarcando desde desarrollos personales hasta soluciones empresariales." 
                />
                <div className="row mt-5">
                    {projects.map((project, key) => (
                        <ProjectBox key={key} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Projects;
