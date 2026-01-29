import React from 'react';
import Link from 'next/link';

const GetStarted = () => {
    return (
        <section className="section section-lg bg-get-start">
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <h1 className="get-started-title text-white">Conectando con profesionales</h1>
                        <div className="section-title-border mt-4 bg-white"></div>
                        <p className="section-subtitle font-secondary text-white text-center pt-4">
                            Aunque gran parte de mi trabajo está enfocado en proyectos privados, te invito a que visites mi perfil de LinkedIn. Estoy siempre abierto a nuevas oportunidades de colaboración y networking para crecer juntos profesionalmente.
                        </p>
                        <br/>
                        <p className="text-white">¡Espero que podamos conectar pronto!</p> 

                        <Link 
                            href="https://www.linkedin.com/in/kevins-vega-quiroga-01a7b71ab/" 
                            target='_blank' 
                            className="btn btn-light waves-effect mt-4"
                        >
                            Linkedin <i className="mdi mdi-linkedin" style={{fontSize:'19px'}}></i> 
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default GetStarted;
