"use client";

import Background from "../background";

export default function Hero() {
  const handleScrollToFeatures = () => {
    const target = document.getElementById("features");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24">
      <Background />
      <div className="bg-white/70 backdrop-blur-md rounded-xl p-8 shadow-lg z-10">
        <h1 className="text-5xl font-bold mb-4">Bienvenido a Compilatte</h1>
        <p className="text-xl mb-6 text-gray-700">
          Potencia tu empresa con soluciones tecnológicas diseñadas para
          optimizar procesos y acelerar el crecimiento.
        </p>

        <button
          onClick={handleScrollToFeatures}
          className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-400 transition"
        >
          Empezar ahora
        </button>
      </div>
    </section>
  );
}
