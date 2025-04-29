"use client";

import React, { useState } from "react";
import Background from "../background";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    // Aca tenemos que usar fetch o axios para enviar los datos a tu API
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <Background />
      <section className="relative w-full max-w-2xl mx-auto py-16 px-6 bg-white/70 dark:bg-black/60 backdrop-blur-md rounded-xl shadow-xl z-10">
        <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
            className="w-full p-4 border border-gray-300 rounded-md"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Tu email"
            required
            className="w-full p-4 border border-gray-300 rounded-md"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tu mensaje"
            rows={5}
            required
            className="w-full p-4 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-3 rounded-md hover:bg-cyan-700 transition"
          >
            Enviar mensaje
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
