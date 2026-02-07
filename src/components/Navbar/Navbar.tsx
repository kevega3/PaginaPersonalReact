'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const NavItems = [
    { id: 1, idnm: "home", navheading: "Inicio" },
    { id: 4, idnm: "about", navheading: "Sobre mí" },
    { id: 3, idnm: "services", navheading: "Habilidades" },
    
    { id: 5, idnm: "testi", navheading: "Proyectos" },
    { id: 6, idnm: "blog", navheading: "Certificados" },
    { id: 7, idnm: "contact", navheading: "Contacto" },
];

export default function Navbar({ navClass }: { navClass?: string }) {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const toggle = () => setIsOpenMenu(!isOpenMenu);

    useEffect(() => {
        const handleScroll = () => {
             if (window.scrollY >= 50) {
                setSticky(true);
             } else {
                setSticky(false);
             }

             const scrollPosition = window.scrollY + 100;
             
             for (const item of NavItems) {
                 const section = document.getElementById(item.idnm);
                 if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                     setActiveSection(item.idnm);
                 }
             }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark ${sticky ? "nav-sticky" : ""} ${navClass || ""}`} id="navbar">
            <div className="container">
                {/* Navbar Brand */}
                <a className="navbar-brand logo text-uppercase" href="/">
                    <Image 
                        src="/assets/images/NuevoLogo.png" 
                        alt="Logo" 
                        width={50} 
                        height={50} 
                        style={{objectFit: "contain"}} 
                        priority 
                    />
                </a>

                {/* Navbar Toggler */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={toggle}
                    aria-label="Toggle navigation"
                >
                    <i className="mdi mdi-menu"></i>
                </button>

                {/* Navbar Collapse */}
                <div className={`collapse navbar-collapse ${isOpenMenu ? "show" : ""}`} id="navbarCollapse">
                    <ul className="navbar-nav mx-auto" id="mySidenav">
                        {NavItems.map((item, key) => (
                            <li key={key} className={`nav-item ${activeSection === item.idnm ? "active" : ""}`}>
                                <a href={`#${item.idnm}`} className="nav-link">
                                    {item.navheading}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
