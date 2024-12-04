"use client";

import Image from 'next/image';
import NavLink from './NavLink';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const smoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [navLinks]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-cat-surface0 bg-opacity-70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <a className="navbar-brand fs-4" href="#home" onClick={smoothScroll}>
            <Image src="/icons/logoerlanrangel.webp" alt="logo" width={60} height={60} />
          </a>
        </div>

        {/* Botón de menú hamburguesa */}
        <button
          className="md:hidden text-cat-text focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Menú */}
        <ul className={`flex-col md:flex-row md:flex md:items-center ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
          {navLinks.map(({ href, label }) => (
            <NavLink key={href} onClick={smoothScroll} href={href} isActive={activeSection === href.slice(1)}>
              {label}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
