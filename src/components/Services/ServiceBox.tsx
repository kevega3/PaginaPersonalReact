import React from 'react';

interface Props {
    title: string;
    icon: string;
    description: string;
}

export default function ServiceBox({ title, icon, description }: Props) {
  return (
    <div className="mt-4">
      <div className="services-box">
        <div className="flex">
          <i className={`${icon} text-primary`}></i>
          <div className="ml-4">
            <h4>{title}</h4>
            <p className="pt-2 text-secondary-text-light">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
