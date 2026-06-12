'use client';

import React from 'react';
import SectionTitle from "../common/SectionTitle";
import ProjectBox from "./ProjectBox";
import AnimatedGridItem from '../common/AnimatedGridItem';
import { Project } from '@/types';

interface ProjectsProps {
    data: Project[];
}

const Projects = ({ data }: ProjectsProps) => {
    return (
        <section className="section-padding bg-section" id="projects">
            <div className="container mx-auto px-4">
                <SectionTitle 
                    title="Proyectos destacados" 
                    description="Estos son algunos de los proyectos en los que he trabajado, abarcando desde desarrollos personales hasta soluciones empresariales." 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                    {data.map((project, key) => (
                        <AnimatedGridItem key={key} index={key}>
                            <ProjectBox project={project} />
                        </AnimatedGridItem>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Projects;
