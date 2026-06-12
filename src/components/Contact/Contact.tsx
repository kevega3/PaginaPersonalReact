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

    const formStatusRef = useRef<HTMLDivElement>(null);

    const validateEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

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
        
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }

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
        
        if (isRateLimited) {
            return;
        }
        
        setSubmitError(null);

        if (!validateForm()) {
            const firstErrorField = document.querySelector('[aria-invalid="true"]') as HTMLElement;
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
                if (response.status === 429 || data.code === 'RATE_LIMIT_EXCEEDED') {
                    setIsRateLimited(true);
                    setFormData({ nombreCompleto: "", email: "", asunto: "", mensaje: "" });
                } else {
                    setSubmitError(data.error || 'Error al enviar el mensaje. Por favor intenta nuevamente.');
                }
                return;
            }

            setShowSuccess(true);
            setFormData({ nombreCompleto: "", email: "", asunto: "", mensaje: "" });
            setErrors({});
            
            setTimeout(() => {
                setShowSuccess(false);
            }, 5000);

        } catch (error) {
            setSubmitError('Error de conexión. Por favor verifica tu internet e intenta nuevamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="section-padding bg-section" id="contact" aria-labelledby="contact-title">
            <div className="container mx-auto px-4">
                <SectionTitle 
                    title="Contáctame" 
                    description="¿Tienes alguna pregunta o propuesta? ¡Escríbeme!" 
                />
                
                <div ref={formStatusRef} aria-live="polite" aria-atomic="true" className="sr-only">
                    {showSuccess && "Mensaje enviado correctamente. Gracias por contactarme."}
                    {submitError && `Error al enviar: ${submitError}`}
                    {isRateLimited && "Ya has enviado un mensaje recientemente. Por favor espera 24 horas."}
                </div>

                {showSuccess && (
                    <div className="fixed top-5 right-5 z-[9999] min-w-[300px] bg-green-600 text-white rounded-lg p-4 shadow-lg" role="alert">
                        <h5 className="font-semibold">
                            <i className="mdi mdi-check-circle mr-2" aria-hidden="true"></i>
                            ¡Mensaje Enviado!
                        </h5>
                        <p className="mt-1">Gracias por contactarme. Te responderé lo antes posible.</p>
                        <button 
                            type="button" 
                            className="absolute top-2 right-2 text-white hover:text-gray-200"
                            onClick={() => setShowSuccess(false)}
                            aria-label="Cerrar mensaje de éxito"
                        >
                            <i className="mdi mdi-close"></i>
                        </button>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4">
                        <div className="mt-4 pt-4">
                            <p className="mt-4">
                                <span className="text-lg font-semibold">Celular:</span>
                                <br/>
                                <a 
                                    href="tel:+573114444064" 
                                    className="text-body-text-secondary block mt-2"
                                    aria-label="Llamar al celular +57 311 444 40 64"
                                >
                                    +57 311 444 40 64
                                </a>
                            </p>
                            <p className="mt-4">
                                <span className="text-lg font-semibold">Email:</span>
                                <br/>
                                <a 
                                    href="mailto:kevinsvegaquiroga@gmail.com" 
                                    className="text-body-text-secondary block mt-2"
                                    aria-label="Enviar email a kevinsvegaquiroga@gmail.com"
                                >
                                    kevinsvegaquiroga@gmail.com
                                </a>
                            </p>
                            <p className="mt-4">
                                <span className="text-lg font-semibold">Horario de Trabajo:</span>
                                <br/>
                                <span className="text-body-text-secondary block mt-2">6:00AM a 6:00PM</span>
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="mt-4 pt-4">
                           {isRateLimited ? (
                                <div className="text-center p-8 rounded-lg border-2" style={{ backgroundColor: 'var(--bg-hard)', borderColor: 'var(--border-color)' }} role="status">
                                    <i className="mdi mdi-email-check text-6xl text-yellow-400" aria-hidden="true"></i>
                                    <h4 className="mt-3">Gracias por tu mensaje</h4>
                                    <p className="mt-2">
                                        Ya recibí tu consulta y te responderé lo antes posible.<br/>
                                        <strong>Por favor espera 24 horas antes de enviar otro mensaje.</strong>
                                    </p>
                                    <small className="text-body-text-secondary">Esta medida nos ayuda a prevenir spam y dar mejor atención a todos.</small>
                                </div>
                            ) :(
                            <form 
                                onSubmit={handleSubmit} 
                                name="contact-form" 
                                id="contact-form" 
                                noValidate
                                aria-label="Formulario de contacto"
                            >
                                {submitError && (
                                    <div 
                                        className="bg-red-500/20 text-red-300 rounded-lg p-4 mb-4"
                                        role="alert"
                                        aria-live="assertive"
                                    >
                                        <i className="mdi mdi-alert-circle mr-2" aria-hidden="true"></i>
                                        {submitError}
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="sr-only">
                                            Nombre completo
                                        </label>
                                        <input 
                                            name="nombreCompleto" 
                                            id="name" 
                                            type="text" 
                                            className={`form-input ${errors.nombreCompleto ? 'border-red-500' : ''}`}
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
                                            <div className="text-red-400 text-sm mt-1" id="name-error" role="alert">
                                                <i className="mdi mdi-alert mr-1" aria-hidden="true"></i>
                                                {errors.nombreCompleto}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="sr-only">
                                            Correo electrónico
                                        </label>
                                        <input 
                                            name="email" 
                                            id="email" 
                                            type="email" 
                                            className={`form-input ${errors.email ? 'border-red-500' : ''}`}
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
                                            <div className="text-red-400 text-sm mt-1" id="email-error" role="alert">
                                                <i className="mdi mdi-alert mr-1" aria-hidden="true"></i>
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="subject" className="sr-only">
                                        Asunto
                                    </label>
                                    <input 
                                        name="asunto" 
                                        id="subject" 
                                        type="text" 
                                        className={`form-input ${errors.asunto ? 'border-red-500' : ''}`}
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
                                        <div className="text-red-400 text-sm mt-1" id="subject-error" role="alert">
                                            <i className="mdi mdi-alert mr-1" aria-hidden="true"></i>
                                            {errors.asunto}
                                        </div>
                                    )}
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="comments" className="sr-only">
                                        Mensaje
                                    </label>
                                    <textarea 
                                        name="mensaje" 
                                        id="comments" 
                                        rows={4} 
                                        className={`form-textarea ${errors.mensaje ? 'border-red-500' : ''}`}
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
                                        <div className="text-red-400 text-sm mt-1" id="message-error" role="alert">
                                            <i className="mdi mdi-alert mr-1" aria-hidden="true"></i>
                                            {errors.mensaje}
                                        </div>
                                    )}
                                </div>
                                <div className="text-right mt-4">
                                    <button 
                                        type="submit" 
                                        id="submit" 
                                        name="send" 
                                        className="btn-primary-custom"
                                        disabled={isSubmitting}
                                        aria-busy={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="spinner mr-2" role="status" aria-hidden="true"></span>
                                                Enviando...
                                            </>
                                        ) : (
                                            'Enviar Mensaje'
                                        )}
                                    </button>
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
