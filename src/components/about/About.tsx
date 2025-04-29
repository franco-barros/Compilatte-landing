"use client";

import React from "react";
import Background from "../background";

const About = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24">
      <Background />
      <div className="bg-white/70 backdrop-blur-md rounded-xl p-8 shadow-lg z-10 max-w-2xl">
        <h2 className="text-4xl font-bold mb-6">Sobre Compilatte</h2>
        <p className="text-lg text-gray-700">
          En Compilatte, creemos en el poder de la tecnología para transformar
          ideas en realidades. Nuestro equipo está comprometido a brindar
          soluciones innovadoras que potencien tu crecimiento y desarrollo.
        </p>
      </div>
    </section>
  );
};

export default About;
