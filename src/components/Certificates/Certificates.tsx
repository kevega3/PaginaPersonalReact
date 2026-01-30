import React from 'react';
import SectionTitle from "../common/SectionTitle";
import CertificateBox from "./CertificateBox";
import { Certificate } from '@/types';

interface CertificatesProps {
    data: Certificate[];
}

const Certificates = ({ data }: CertificatesProps) => {
    return (
        <section className="section" id="blog">
            <div className="container">
                <SectionTitle 
                    title="Certificaciones" 
                    description="Aquí presento mis certificaciones obtenidas, que avalan mis conocimientos y habilidades en el desarrollo de software y tecnologías clave." 
                />
                <div className="row mt-4">
                    {data.map((cert, key) => (
                        <CertificateBox key={key} certificate={cert} />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Certificates;
