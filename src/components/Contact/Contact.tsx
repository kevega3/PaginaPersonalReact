'use client';
import React, { useState } from 'react';
import SectionTitle from "../common/SectionTitle";

interface FormErrors {
    nombreCompleto?: string;
    email?: string;
    asunto?: string;
    mensaje?: string;
}

const Contact = () => {
    const [formData, setFormData] = useState({
        nombreCompleto: "",
        email: "",
        asunto: "",
        mensaje: ""
    });
    
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [isRateLimited, setIsRateLimited] = useState(false);

    // Validación de email con regex
    const validateEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Validar campo individual
    const validateField = (name: string, value: string): string | undefined => {
        switch(name) {
            case 'nombreCompleto':
                if (!value.trim()) return 'El nombre es requerido';
                if (value.trim().length < 3) return 'El nombre debe tener al menos 3 caracteres';
                if (value.trim().length > 150) return 'El nombre es demasiado largo';
                break;
            case 'email':
                if (!value.trim()) return 'El email es requerido';
                if (!validateEmail(value)) return 'Por favor ingresa un email válido';
                break;
            case 'asunto':
                if (!value.trim()) return 'El asunto es requerido';
                if (value.trim().length < 5) return 'El asunto debe tener al menos 5 caracteres';
                if (value.trim().length > 200) return 'El asunto es demasiado largo';
                break;
            case 'mensaje':
                if (!value.trim()) return 'El mensaje es requerido';
                if (value.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres';
                if (value.trim().length > 1000) return 'El mensaje es demasiado largo';
                break;
        }
        return undefined;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Limpiar error del campo cuando el usuario empiece a escribir
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        if (error) {
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key as keyof typeof formData]);
            if (error) {
                newErrors[key as keyof FormErrors] = error;
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Si ya alcanzó el límite, no hacer nada
        if (isRateLimited) {
            return;
        }
        
        // Validar todos los campos
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                // Verificar si es error de rate limit
                if (response.status === 429 || data.code === 'RATE_LIMIT_EXCEEDED') {
                    setIsRateLimited(true);
                    setFormData({ nombreCompleto: "", email: "", asunto: "", mensaje: "" });
                } else {
                    throw new Error(data.error || 'Error al enviar el mensaje');
                }
                return;
            }

            // Mostrar mensaje de éxito
            setShowSuccess(true);
            setFormData({ nombreCompleto: "", email: "", asunto: "", mensaje: "" });
            
            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
                setShowSuccess(false);
            }, 5000);

        } catch (error) {
            alert(error instanceof Error ? error.message : 'Error al enviar el mensaje. Por favor intenta nuevamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="section" id="contact">
            <div className="container">
                <SectionTitle 
                    title="Contáctame" 
                    description="¿Tienes alguna pregunta o propuesta? ¡Escríbeme!" 
                />
                
                {/* Modal de éxito */}
                {showSuccess && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert" style={{
                        position: 'fixed',
                        top: '20px',
                        right: '20px',
                        zIndex: 9999,
                        minWidth: '300px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    }}>
                        <h5 className="alert-heading">
                            <i className="mdi mdi-check-circle me-2"></i>
                            ¡Mensaje Enviado!
                        </h5>
                        <p className="mb-0">Gracias por contactarme. Te responderé lo antes posible.</p>
                        <button 
                            type="button" 
                            className="btn-close" 
                            onClick={() => setShowSuccess(false)}
                            aria-label="Close"
                        ></button>
                    </div>
                )}

               

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
                           {isRateLimited ? (
                                <div className="text-center p-5" style={{
                                    backgroundColor: '#172330',
                                    borderRadius: '8px',
                                    border: '2px solid #17233',
                                    color: 'white'
                                }}>
                                    <i className="mdi mdi-email-check" style={{ fontSize: '64px', color: '#ffc107' }}></i>
                                    <h4 className="mt-3" style={{ color: 'white' }}>Gracias por tu mensaje</h4>
                                    <p className="mt-2" style={{ color: 'white' }}>
                                        Ya recibí tu consulta y te responderé lo antes posible.<br/>
                                        <strong>Por favor espera 24 horas antes de enviar otro mensaje.</strong>
                                    </p>
                                    <small style={{ color: '#ccc' }}>Esta medida nos ayuda a prevenir spam y dar mejor atención a todos.</small>
                                </div>
                            ) :(
                            <form onSubmit={handleSubmit} name="contact-form" id="contact-form" noValidate>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group mt-2">
                                            <input 
                                                name="nombreCompleto" 
                                                id="name" 
                                                type="text" 
                                                className={`form-control ${errors.nombreCompleto ? 'is-invalid' : ''}`}
                                                placeholder="Tu nombre*" 
                                                value={formData.nombreCompleto}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={isSubmitting}
                                            />
                                            {errors.nombreCompleto && (
                                                <div className="invalid-feedback d-block">
                                                    {errors.nombreCompleto}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group mt-2">
                                            <input 
                                                name="email" 
                                                id="email" 
                                                type="email" 
                                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                placeholder="Tu email*"
                                                value={formData.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={isSubmitting}
                                            />
                                            {errors.email && (
                                                <div className="invalid-feedback d-block">
                                                    {errors.email}
                                                </div>
                                            )}
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
                                                className={`form-control ${errors.asunto ? 'is-invalid' : ''}`}
                                                placeholder="Asunto*" 
                                                value={formData.asunto}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={isSubmitting}
                                            />
                                            {errors.asunto && (
                                                <div className="invalid-feedback d-block">
                                                    {errors.asunto}
                                                </div>
                                            )}
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
                                                className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
                                                placeholder="Tu mensaje..."
                                                value={formData.mensaje}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                disabled={isSubmitting}
                                            ></textarea>
                                            {errors.mensaje && (
                                                <div className="invalid-feedback d-block">
                                                    {errors.mensaje}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 text-end">
                                        <button 
                                            type="submit" 
                                            id="submit" 
                                            name="send" 
                                            className="submitBnt btn btn-custom"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    Enviando...
                                                </>
                                            ) : (
                                                'Enviar Mensaje'
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;
