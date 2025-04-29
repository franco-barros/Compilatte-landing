"use client";

import { FC } from "react";

interface CardFeatureProps {
  title: string;
  description: string;
  letter: string;
}

const CardFeature: FC<CardFeatureProps> = ({ title, description, letter }) => {
  return (
    <div
      className="flex flex-col items-center p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition duration-300 h-96 justify-between"
      style={{ backgroundColor: "#93e29a" }}
    >
      {/* Círculo de la imagen/letra */}
      <div className="w-28 h-28 rounded-full border-4 border-cyan-500 flex items-center justify-center mb-6 bg-white">
        <span className="text-4xl font-bold text-cyan-600">{letter}</span>
      </div>

      {/* Título */}
      <h3 className="text-3xl font-semibold mb-4 text-cyan-800">{title}</h3>

      {/* Descripción */}
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  );
};

export default CardFeature;
