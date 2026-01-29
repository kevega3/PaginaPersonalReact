'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer bg-dark">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 mt-4">
                        <Link className="footer-logo text-uppercase" href="/">
                            <i className="pe-7s-gleam"></i>
                            <span className="ms-1">S M A R T</span>
                        </Link>
                        <div className="text-muted mt-4">
                            <ul className="list-unstyled footer-list">
                                <li><Link href="/">Inicio</Link></li>
                                <li><Link href="#features">Resumen</Link></li>
                                <li><Link href="#services">Habilidades</Link></li>
                                <li><Link href="#about">Sobre Mí</Link></li>
                                <li><Link href="#blog">Certificados</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 mt-4">
                        <h4>Informacion de contacto</h4>
                        <div className="text-muted mt-4">
                            <ul className="list-unstyled footer-list">
                                <li><Link href="#">Celular: +57 311 444 40 64</Link></li>
                                <li><Link href="#">Email: kevinsvegaquiroga@gmail.com</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 mt-4">
                        <h4>Términos y condiciones</h4>
                        <div className="text-muted mt-4">
                            <p>Todos los derechos del contenido de esta página web pertenecen a Smart y están protegidos por las leyes de propiedad intelectual.</p>
                        </div>
                        <form className="form subscribe" onSubmit={(e) => e.preventDefault()}>
                            <div className="position-relative">
                                <input placeholder="Email" className="form-control" required />
                                <button type="submit" className="submit-btn" style={{position:'absolute', right:10, top:5, border:'none', background:'transparent'}}>
                                    <i className="pe-7s-paper-plane text-dark font-weight-bold"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}
