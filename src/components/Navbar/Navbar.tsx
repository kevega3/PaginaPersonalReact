'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

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
    const [isScrolling, setIsScrolling] = useState(false);

    const toggle = () => setIsOpenMenu(!isOpenMenu);

    const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, idnm: string) => {
        e.preventDefault();
        
        if (isScrolling) return;
        
        const section = document.getElementById(idnm);
        if (section) {
            setIsScrolling(true);
            
            const offset = section.offsetTop - 70;
            window.scrollTo({
                top: offset,
                behavior: 'smooth',
            });
            
            if (isOpenMenu) {
                setIsOpenMenu(false);
            }
            
            window.history.pushState(null, '', `#${idnm}`);
            
            setTimeout(() => {
                setIsScrolling(false);
            }, 800);
        }
    }, [isScrolling, isOpenMenu]);

    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout;
        
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }

            if (!isScrolling) {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    const scrollPosition = window.scrollY + 100;
                    
                    for (const item of NavItems) {
                        const section = document.getElementById(item.idnm);
                        if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                            setActiveSection(item.idnm);
                        }
                    }
                }, 100);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, [isScrolling]);

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
