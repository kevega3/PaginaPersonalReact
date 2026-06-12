'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const NavItems = [
    { id: 1, idnm: "home", navheading: "Inicio" },
    { id: 2, idnm: "about", navheading: "Sobre mí" },
    { id: 3, idnm: "skills", navheading: "Habilidades" },
    { id: 4, idnm: "projects", navheading: "Proyectos" },
    { id: 5, idnm: "certificates", navheading: "Certificados" },
    { id: 6, idnm: "contact", navheading: "Contacto" },
];

export default function Navbar({ navClass }: { navClass?: string }) {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const toggle = () => setIsOpenMenu(!isOpenMenu);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, idnm: string) => {
        e.preventDefault();
        
        const section = document.getElementById(idnm);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            
            if (isOpenMenu) {
                setIsOpenMenu(false);
            }
            
            window.history.pushState(null, '', `#${idnm}`);
            setActiveSection(idnm);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }

            for (const item of NavItems) {
                const section = document.getElementById(item.idnm);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom > 120) {
                        setActiveSection(item.idnm);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar-custom fixed top-0 left-0 right-0 w-full ${sticky ? "nav-sticky" : ""} ${navClass || ""}`} id="navbar">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <a className="logo uppercase flex items-center" href="/">
                        <Image 
                            src="/assets/images/NuevoLogo.png" 
                            alt="Logo" 
                            width={50} 
                            height={50} 
                            style={{objectFit: "contain"}} 
                            priority 
                        />
                    </a>

                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <button 
                            className="lg:hidden text-2xl"
                            type="button" 
                            onClick={toggle}
                            aria-label="Toggle navigation"
                        >
                            <i className="mdi mdi-menu"></i>
                        </button>
                    </div>

                    <div className={`${isOpenMenu ? "block" : "hidden"} lg:block lg:flex lg:items-center lg:mx-auto`}>
                        <ul className="flex flex-col lg:flex-row list-none" id="mySidenav">
                            {NavItems.map((item, key) => (
                                <li key={key} className={`nav-item ${activeSection === item.idnm ? "nav-item-active" : ""}`}>
                                    <a 
                                        href={`#${item.idnm}`} 
                                        className="nav-link block"
                                        onClick={(e) => handleNavClick(e, item.idnm)}
                                        aria-label={`Ir a la sección ${item.navheading}`}
                                    >
                                        {item.navheading}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
