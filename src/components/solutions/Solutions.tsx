"use client";

import React from "react";
import TechnologiesCarousel from "../technologiescarousel";

const Solutions = () => {
  return (
    <div className="w-full py-16 px-6 flex flex-col items-center text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Nuestras Soluciones</h2>
      <p className="text-lg max-w-2xl text-gray-600 mb-12">
        Ofrecemos un abanico de servicios adaptados a tus necesidades:
        desarrollo web, apps móviles, automatización de procesos, consultoría
        tecnológica y más.
      </p>
      <TechnologiesCarousel />
    </div>
  );
};

export default Solutions;
