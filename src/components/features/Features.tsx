"use client";

import CardFeature from "../cardfeature";

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">
          Características principales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <CardFeature
            title="Fácil de usar"
            description="Nuestra plataforma es intuitiva y rápida."
            letter="A"
          />
          <CardFeature
            title="Diseño responsivo"
            description="Funciona perfectamente en móviles y computadoras."
            letter="B"
          />
          <CardFeature
            title="Soporte 24/7"
            description="Estamos aquí para ayudarte en todo momento."
            letter="C"
          />
        </div>
      </div>
    </section>
  );
}
