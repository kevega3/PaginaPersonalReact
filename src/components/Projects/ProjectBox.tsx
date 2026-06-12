import React from 'react';
import Link from 'next/link';
import type { Project } from '@/types';

interface ProjectBoxProps {
    project: Project;
}

const ProjectBox = ({ project }: ProjectBoxProps) => {
  return (
    <div>
      <div className="mt-4">
        <div className="testimonial-decs p-4 relative">
          <div className="testi-icon">
            <i className="mdi mdi-check-decagram text-5xl"></i>
          </div>
          <div className="p-1">
            <h5 className="text-center uppercase mb-3">
              {project.name} -{" "}
              <span className="text-secondary-text-light capitalize">
                {project.cmpName}
              </span>
            </h5>
            <p className="text-secondary-text-light text-justify mb-0">
              {project.message}
            </p>
            {project.link && (
                <div className="text-center mt-4">
                    <Link href={project.link} target="_blank" className="btn-primary-custom inline-flex">
                        Visitar <i className="mdi mdi-arrow-right ml-2"></i>
                    </Link>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectBox;
