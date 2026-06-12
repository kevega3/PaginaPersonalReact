import React from 'react';

interface Props {
    title: string;
    description: string;
}

export default function SectionTitle({ title, description }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="section-title text-center">{title}</h1>
      <div className="section-title-border"></div>
      <p className="section-subtitle text-secondary-text-light text-center pt-4">
        {description}
      </p>
    </div>
  );
}
