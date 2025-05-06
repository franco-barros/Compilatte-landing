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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Mensaje enviado con éxito.");
        setForm({ name: "", email: "", message: "" });
      } else {
        const { error } = await res.json();
        alert("Error al enviar mensaje: " + (error || "Intenta más tarde."));
      }
    } catch (err) {
      alert("Error de red. Intenta más tarde.");
      console.error("Error al enviar mensaje:", err);
    }
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
            className="w-full p-4 border border-green-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Tu email"
            required
            className="w-full p-4 border border-green-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tu mensaje"
            rows={5}
            required
            className="w-full p-4 border border-green-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition font-semibold shadow-md"
          >
            Enviar mensaje
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
