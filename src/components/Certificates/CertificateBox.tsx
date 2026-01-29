import React from 'react';
import Link from 'next/link';

interface Certificate {
    id: number;
    topic: string;
    title: string;
    description: string;
    link: string;
}

interface CertificateBoxProps {
    certificate: Certificate;
}

const CertificateBox = ({ certificate }: CertificateBoxProps) => {
  return (
    <div className="col-lg-4">
      <div className="blog-box mt-4">
        <div>
          <h5 className="mt-4 text-muted">{certificate.topic}</h5>
          <h4 className="mt-3">
            <Link href={certificate.link} className="blog-title" target="_blank">
              {certificate.title}
            </Link>
          </h4>
          <p className="text-muted">{certificate.description}</p>
          <div className="mt-3">
            <Link href={certificate.link} target="_blank" className="read-btn">
              Ver certificado <i className="mdi mdi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CertificateBox;
