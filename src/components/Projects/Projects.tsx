import React from 'react';
import SectionTitle from "../common/SectionTitle";
import ProjectBox from "./ProjectBox";
import { Project } from '@/types';

interface ProjectsProps {
    data: Project[];
}

const Projects = ({ data }: ProjectsProps) => {
    return (
        <section className="section bg-light" id="testi">
            <div className="container">
                <SectionTitle 
                    title="Proyectos destacados" 
                    description="Estos son algunos de los proyectos en los que he trabajado, abarcando desde desarrollos personales hasta soluciones empresariales." 
                />
                <div className="row mt-5">
                    {data.map((project, key) => (
                        <ProjectBox key={key} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Projects;
