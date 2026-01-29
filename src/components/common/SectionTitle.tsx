import React from 'react';

interface Props {
    title: string;
    description: string;
}

export default function SectionTitle({ title, description }: Props) {
  return (
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <h1 className="section-title text-center">{title}</h1>
        <div className="section-title-border mt-3"></div>
        <p className="section-subtitle text-muted text-center pt-4 font-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}
