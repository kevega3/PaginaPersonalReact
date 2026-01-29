import React from 'react';

interface Props {
    title: string;
    icon: string;
    description: string;
}

export default function ServiceBox({ title, icon, description }: Props) {
  return (
    <div className="col-lg-4 mt-4">
      <div className="services-box">
        <div className="d-flex">
          <i className={`${icon} text-primary`}></i>
          <div className="ms-4">
            <h4>{title}</h4>
            <p className="pt-2 text-muted">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
