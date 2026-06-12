import React from 'react';
import Link from 'next/link';
import type { Certificate } from '@/types';

interface CertificateBoxProps {
    certificate: Certificate;
}

const CertificateBox = ({ certificate }: CertificateBoxProps) => {
  return (
    <div>
      <div className="mt-4">
        <div>
          <h5 className="mt-4 text-secondary-text-light">{certificate.topic}</h5>
          <h4 className="mt-3">
            <Link href={certificate.link} className="blog-title" target="_blank">
              {certificate.title}
            </Link>
          </h4>
          <p className="text-secondary-text-light">{certificate.description}</p>
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
