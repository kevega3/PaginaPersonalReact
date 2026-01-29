import React from 'react';
import Link from 'next/link';

interface Project {
    id: number;
    name: string;
    cmpName: string;
    message: string;
    link?: string;
}

interface ProjectBoxProps {
    project: Project;
}

const ProjectBox = ({ project }: ProjectBoxProps) => {
  return (
    <div className="col-lg-4">
      <div className="testimonial-box mt-4">
        <div className="testimonial-decs p-4">
          <div className="testi-icon">
            <i className="mdi mdi-check-decagram display-1"></i>
          </div>
          <div className="p-1">
            <h5 className="text-center text-uppercase mb-3">
              {project.name} -{" "}
              <span className="text-muted text-capitalize">
                {project.cmpName}
              </span>
            </h5>
            <p className="text-muted text-justify mb-0" style={{ textAlign: "justify"}}>
              {project.message}
            </p>
            {project.link && (
                <div className="text-center mt-4">
                    <Link href={project.link} target="_blank" className="btn btn-custom waves-effect waves-light">
                        Visitar <i className="mdi mdi-arrow-right"></i>
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
