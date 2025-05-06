"use client";

import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "about", label: "Sobre nosotros" },
    { href: "solutions", label: "Soluciones" },
    { href: "worked", label: "Trabajos" },
    { href: "contact", label: "Contacto" },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed top-2 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1200px] h-[60px]
                 flex items-center px-4 md:px-6 rounded-full bg-white shadow-md z-[1001] transition-all duration-300"
    >
      <div className="w-full flex justify-between items-center h-full">
        {/* Logo con scroll suave */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 focus:outline-none"
        >
          <Image
            src="/icono.png"
            alt="Logo"
            width={32}
            height={32}
            className="rounded-full"
            priority
          />
          <span className="text-lg font-bold text-gray-900"></span>
        </button>

        {/* Menú escritorio */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <button
                onClick={() => scrollToSection(href)}
                className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Botón móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 text-2xl focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white rounded-b-xl shadow-md p-4 md:hidden z-[1000]">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <button
                  onClick={() => {
                    scrollToSection(href);
                    setIsOpen(false);
                  }}
                  className="block font-medium text-gray-700 hover:text-blue-600"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
