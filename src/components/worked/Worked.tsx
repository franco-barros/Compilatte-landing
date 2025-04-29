"use client";

import React from "react";
import WorkedSlider from "../workedslider";

const Worked = () => {
  return (
    <div className="w-full py-16 px-6 flex flex-col items-center text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Confían en nosotros</h2>
      <p className="text-lg max-w-2xl text-gray-600 mb-12">
        Empresas y proyectos que han trabajado junto a nosotros, impulsando su
        crecimiento a través de soluciones tecnológicas de calidad.
      </p>
      <WorkedSlider />
    </div>
  );
};

export default Worked;
