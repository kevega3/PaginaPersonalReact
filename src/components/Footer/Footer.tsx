'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    <div>
                        <Link className="footer-logo" href="/">
                            <i className="pe-7s-gleam"></i>
                            <span className="ml-1">S M A R T</span>
                        </Link>
                        <div className="mt-4">
                            <ul className="footer-list">
                                <li><Link href="/">Inicio</Link></li>
                                <li><Link href="#skills">Habilidades</Link></li>
                                <li><Link href="#about">Sobre Mí</Link></li>
                                <li><Link href="#certificates">Certificados</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h4>Informacion de contacto</h4>
                        <div className="mt-4">
                            <ul className="footer-list">
                                <li><Link href="#">Celular: +57 311 444 40 64</Link></li>
                                <li><Link href="#">Email: kevinsvegaquiroga@gmail.com</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h4>Términos y condiciones</h4>
                        <div className="mt-4">
                            <p className="text-secondary-text-light">Todos los derechos del contenido de esta página web pertenecen a Smart y están protegidos por las leyes de propiedad intelectual.</p>
                        </div>
                        <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <input placeholder="Email" className="form-input pr-12" required />
                                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 border-none bg-transparent">
                                    <i className="pe-7s-paper-plane text-body-text-light font-bold"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}
