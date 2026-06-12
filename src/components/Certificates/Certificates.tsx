'use client';

import React from 'react';
import SectionTitle from "../common/SectionTitle";
import CertificateBox from "./CertificateBox";
import AnimatedGridItem from '../common/AnimatedGridItem';
import { Certificate } from '@/types';

interface CertificatesProps {
    data: Certificate[];
}

const Certificates = ({ data }: CertificatesProps) => {
    return (
        <section className="section-padding bg-section-alt" id="certificates">
            <div className="container mx-auto px-4">
                <SectionTitle 
                    title="Certificaciones" 
                    description="Aquí presento mis certificaciones obtenidas, que avalan mis conocimientos y habilidades en el desarrollo de software y tecnologías clave." 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {data.map((cert, key) => (
                        <AnimatedGridItem key={key} index={key}>
                            <CertificateBox certificate={cert} />
                        </AnimatedGridItem>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Certificates;
