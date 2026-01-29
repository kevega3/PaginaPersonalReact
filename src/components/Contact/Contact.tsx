'use client';
import React, { useState } from 'react';
import SectionTitle from "../common/SectionTitle";

const Contact = () => {
    // Basic form state
    const [formData, setFormData] = useState({
        nombreCompleto: "",
        email: "",
        asunto: "",
        mensaje: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Validation logic
        if(!formData.nombreCompleto || !formData.email || !formData.asunto || !formData.mensaje) {
            alert("Por favor completa todos los campos");
            return;
        }
        console.log("Submit form", formData);
        alert("¡Mensaje enviado correctamente! (Simulación)");
        setFormData({ nombreCompleto: "", email: "", asunto: "", mensaje: "" });
    };

    return (
        <section className="section" id="contact">
            <div className="container">
                <SectionTitle 
                    title="Contáctame" 
                    description="¿Tienes alguna pregunta o propuesta? ¡Escríbeme!" 
                />
                <div className="row">
                    <div className="col-lg-4">
                        <div className="mt-4 pt-4">
                            <p className="mt-4"><span className="h5">Celular:</span> <br/> <span className="text-muted d-block mt-2">+57 311 444 40 64</span></p>
                            <p className="mt-4"><span className="h5">Email:</span> <br/> <span className="text-muted d-block mt-2">kevinsvegaquiroga@gmail.com</span></p>
                            <p className="mt-4"><span className="h5">Horario de Trabajo:</span> <br/> <span className="text-muted d-block mt-2">6:00AM a 6:00PM</span></p>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="custom-form mt-4 pt-4">
                            <div id="message"></div>
                            <form onSubmit={handleSubmit} name="contact-form" id="contact-form">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group mt-2">
                                            <input 
                                                name="nombreCompleto" 
                                                id="name" 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Tu nombre*" 
                                                value={formData.nombreCompleto}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group mt-2">
                                            <input 
                                                name="email" 
                                                id="email" 
                                                type="email" 
                                                className="form-control" 
                                                placeholder="Tu email*"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group mt-2">
                                            <input 
                                                name="asunto" 
                                                id="subject" 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Asunto*" 
                                                value={formData.asunto}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group mt-2">
                                            <textarea 
                                                name="mensaje" 
                                                id="comments" 
                                                rows={4} 
                                                className="form-control" 
                                                placeholder="Tu mensaje..."
                                                value={formData.mensaje}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 text-end">
                                        <button type="submit" id="submit" name="send" className="submitBnt btn btn-custom">
                                            Enviar Mensaje
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;
