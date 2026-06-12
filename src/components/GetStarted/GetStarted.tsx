import React from 'react';
import Link from 'next/link';

const GetStarted = () => {
    return (
        <section className="section-padding-lg relative" style={{ backgroundColor: 'var(--bg-hard)' }}>
            <div className="bg-overlay"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="get-started-title text-white">Conectando con profesionales</h1>
                    <div className="section-title-border mt-4 !bg-white"></div>
                    <p className="section-subtitle text-white text-center pt-4">
                        Aunque gran parte de mi trabajo está enfocado en proyectos privados, te invito a que visites mi perfil de LinkedIn. Estoy siempre abierto a nuevas oportunidades de colaboración y networking para crecer juntos profesionalmente.
                    </p>
                    <br/>
                    <p className="text-white">¡Espero que podamos conectar pronto!</p> 

                    <Link 
                        href="https://www.linkedin.com/in/kevins-vega-quiroga-01a7b71ab/" 
                        target='_blank' 
                        className="btn-light-custom mt-4 inline-flex"
                    >
                        Linkedin <i className="mdi mdi-linkedin ml-2" style={{fontSize:'19px'}}></i> 
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default GetStarted;
