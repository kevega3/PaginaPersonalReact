'use client';
import React, { useState, useRef } from 'react';
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
    const [submitError, setSubmitError] = useState<string | null>(null);

    // Ref para el contenedor de errores del formulario (accesibilidad)
    const formStatusRef = useRef<HTMLDivElement>(null);

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

        // Limpiar error de envío cuando el usuario empiece a escribir
        if (submitError) {
            setSubmitError(null);
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
        
        // Limpiar error previo
        setSubmitError(null);

        // Validar todos los campos
        if (!validateForm()) {
            // Enfocar el primer campo con error para accesibilidad
            const firstErrorField = document.querySelector('.is-invalid') as HTMLElement;
            if (firstErrorField) {
                firstErrorField.focus();
            }
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
                    // En vez de alert(), mostrar error inline accesible
                    setSubmitError(data.error || 'Error al enviar el mensaje. Por favor intenta nuevamente.');
                }
                return;
            }

            // Mostrar mensaje de éxito
            setShowSuccess(true);
            setFormData({ nombreCompleto: "", email: "", asunto: "", mensaje: "" });
            setErrors({});
            
            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
                setShowSuccess(false);
            }, 5000);

        } catch (error) {
            // En vez de alert(), mostrar error inline accesible
            setSubmitError('Error de conexión. Por favor verifica tu internet e intenta nuevamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="section" id="contact" aria-labelledby="contact-title">
            <div className="container">
                <SectionTitle 
                    title="Contáctame" 
                    description="¿Tienes alguna pregunta o propuesta? ¡Escríbeme!" 
                />
                
                {/* Región aria-live para anuncios de estado (accesibilidad) */}
                <div ref={formStatusRef} aria-live="polite" aria-atomic="true" className="visually-hidden">
                    {showSuccess && "Mensaje enviado correctamente. Gracias por contactarme."}
                    {submitError && `Error al enviar: ${submitError}`}
                    {isRateLimited && "Ya has enviado un mensaje recientemente. Por favor espera 24 horas."}
                </div>

                {/* Modal de éxito visible */}
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
                            <i className="mdi mdi-check-circle me-2" aria-hidden="true"></i>
                            ¡Mensaje Enviado!
                        </h5>
                        <p className="mb-0">Gracias por contactarme. Te responderé lo antes posible.</p>
                        <button 
                            type="button" 
                            className="btn-close" 
                            onClick={() => setShowSuccess(false)}
                            aria-label="Cerrar mensaje de éxito"
                        ></button>
                    </div>
                )}

                <div className="row">
                    {/* Información de contacto */}
                    <div className="col-lg-4">
                        <div className="mt-4 pt-4">
                            <p className="mt-4">
                                <span className="h5">Celular:</span>
                                <br/>
                                <a 
                                    href="tel:+573114444064" 
                                    className="text-muted d-block mt-2"
                                    aria-label="Llamar al celular +57 311 444 40 64"
                                >
                                    +57 311 444 40 64
                                </a>
                            </p>
                            <p className="mt-4">
                                <span className="h5">Email:</span>
                                <br/>
                                <a 
                                    href="mailto:kevinsvegaquiroga@gmail.com" 
                                    className="text-muted d-block mt-2"
                                    aria-label="Enviar email a kevinsvegaquiroga@gmail.com"
                                >
                                    kevinsvegaquiroga@gmail.com
                                </a>
                            </p>
                            <p className="mt-4">
                                <span className="h5">Horario de Trabajo:</span>
                                <br/>
                                <span className="text-muted d-block mt-2">6:00AM a 6:00PM</span>
                            </p>
                        </div>
                    </div>

                    {/* Formulario */}
                    <div className="col-lg-8">
                        <div className="custom-form mt-4 pt-4">
                           {isRateLimited ? (
                                <div className="text-center p-5" style={{
                                    backgroundColor: '#172330',
                                    borderRadius: '8px',
                                    border: '2px solid #17233',
                                    color: 'white'
                                }} role="status">
                                    <i className="mdi mdi-email-check" style={{ fontSize: '64px', color: '#ffc107' }} aria-hidden="true"></i>
                                    <h4 className="mt-3" style={{ color: 'white' }}>Gracias por tu mensaje</h4>
                                    <p className="mt-2" style={{ color: 'white' }}>
                                        Ya recibí tu consulta y te responderé lo antes posible.<br/>
                                        <strong>Por favor espera 24 horas antes de enviar otro mensaje.</strong>
                                    </p>
                                    <small style={{ color: '#ccc' }}>Esta medida nos ayuda a prevenir spam y dar mejor atención a todos.</small>
                                </div>
                            ) :(
                            <form 
                                onSubmit={handleSubmit} 
                                name="contact-form" 
                                id="contact-form" 
                                noValidate
                                aria-label="Formulario de contacto"
                            >
                                {/* Error de envío (reemplaza el alert) */}
                                {submitError && (
                                    <div 
                                        className="alert alert-danger" 
                                        role="alert"
                                        aria-live="assertive"
                                    >
                                        <i className="mdi mdi-alert-circle me-2" aria-hidden="true"></i>
                                        {submitError}
                                    </div>
                                )}

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group mt-2">
                                            <label htmlFor="name" className="form-label visually-hidden">
                                                Nombre completo
                                            </label>
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
                                                required
                                                aria-required="true"
                                                aria-invalid={errors.nombreCompleto ? "true" : "false"}
                                                aria-describedby={errors.nombreCompleto ? "name-error" : undefined}
                                                autoComplete="name"
                                            />
                                            {errors.nombreCompleto && (
                                                <div className="invalid-feedback d-block" id="name-error" role="alert">
                                                    <i className="mdi mdi-alert me-1" aria-hidden="true"></i>
                                                    {errors.nombreCompleto}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group mt-2">
                                            <label htmlFor="email" className="form-label visually-hidden">
                                                Correo electrónico
                                            </label>
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
                                                required
                                                aria-required="true"
                                                aria-invalid={errors.email ? "true" : "false"}
                                                aria-describedby={errors.email ? "email-error" : undefined}
                                                autoComplete="email"
                                            />
                                            {errors.email && (
                                                <div className="invalid-feedback d-block" id="email-error" role="alert">
                                                    <i className="mdi mdi-alert me-1" aria-hidden="true"></i>
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group mt-2">
                                            <label htmlFor="subject" className="form-label visually-hidden">
                                                Asunto
                                            </label>
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
                                                required
                                                aria-required="true"
                                                aria-invalid={errors.asunto ? "true" : "false"}
                                                aria-describedby={errors.asunto ? "subject-error" : undefined}
                                            />
                                            {errors.asunto && (
                                                <div className="invalid-feedback d-block" id="subject-error" role="alert">
                                                    <i className="mdi mdi-alert me-1" aria-hidden="true"></i>
                                                    {errors.asunto}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group mt-2">
                                            <label htmlFor="comments" className="form-label visually-hidden">
                                                Mensaje
                                            </label>
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
                                                required
                                                aria-required="true"
                                                aria-invalid={errors.mensaje ? "true" : "false"}
                                                aria-describedby={errors.mensaje ? "message-error" : undefined}
                                            ></textarea>
                                            {errors.mensaje && (
                                                <div className="invalid-feedback d-block" id="message-error" role="alert">
                                                    <i className="mdi mdi-alert me-1" aria-hidden="true"></i>
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
                                            aria-busy={isSubmitting}
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
