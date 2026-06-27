import React, { useState } from "react";
import { motion } from "framer-motion";

const ConfirmacionWhatsapp = () => {
  const telefonoWhatsApp = "528136666022"; // Cambia por el número real con lada

  const [nombre, setNombre] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("1");
  const [mensaje, setMensaje] = useState("");

  const enviarWhatsapp = () => {
    if (!nombre.trim() || !asistencia) {
      alert("Por favor escribe tu nombre y selecciona tu asistencia.");
      return;
    }

    const texto = `
Hola, soy ${nombre}.
Confirmo mi asistencia: ${asistencia}.
Número de personas: ${invitados}.
${mensaje ? `Mensaje: ${mensaje}` : ""}
    `.trim();

    const url = `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative w-full bg-[#5E6650] px-4 py-16 sm:py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-44 h-44 bg-[#F7F4ED]/10 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-52 h-52 bg-[#B89B5E]/10 rounded-tr-full" />

      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="
          relative
          z-10
          max-w-3xl
          mx-auto
          bg-[#F7F4ED]
          border
          border-[#B89B5E]/40
          shadow-[0_30px_90px_rgba(28,35,24,0.35)]
          px-6
          py-12
          sm:px-12
          sm:py-16
          text-center
          overflow-hidden
        "
      >
        <div className="absolute inset-4 border border-[#B89B5E]/25 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#5E6650]/10 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#B89B5E]/10 rounded-tr-full" />

        <div className="relative z-10">
          <p className="uppercase tracking-[0.35em] text-[#B89B5E] text-xs sm:text-sm font-light">
            RSVP
          </p>

          <h2 className="font-playfair text-4xl sm:text-6xl text-[#5E6650] mt-5 leading-tight">
            Confirmación
          </h2>

          <div className="w-24 h-px bg-[#B89B5E] mx-auto mt-7 mb-8" />

          <p className="font-cursiveDancing text-2xl sm:text-3xl text-[#3F433A]/80 leading-relaxed max-w-xl mx-auto">
            Tu presencia hará de este día un recuerdo aún más especial.
          </p>

          <div className="mt-10 space-y-5 text-left">
            <div>
              <label className="block text-[#5E6650] text-xs uppercase tracking-[0.22em] mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Escribe tu nombre"
                className="
                  w-full
                  bg-[#FFFDF8]
                  border
                  border-[#B89B5E]/35
                  px-5
                  py-4
                  text-[#3F433A]
                  outline-none
                  focus:border-[#5E6650]
                  transition
                "
              />
            </div>

            <div>
              <label className="block text-[#5E6650] text-xs uppercase tracking-[0.22em] mb-2">
                ¿Asistirás?
              </label>
              <select
                value={asistencia}
                onChange={(e) => setAsistencia(e.target.value)}
                className="
                  w-full
                  bg-[#FFFDF8]
                  border
                  border-[#B89B5E]/35
                  px-5
                  py-4
                  text-[#3F433A]
                  outline-none
                  focus:border-[#5E6650]
                  transition
                "
              >
                <option value="">Selecciona una opción</option>
                <option value="Sí asistiré">Sí asistiré</option>
                <option value="No podré asistir">No podré asistir</option>
              </select>
            </div>

            <div>
  <label className="block text-[#5E6650] text-xs uppercase tracking-[0.22em] mb-2">
    Número de personas
  </label>

  <input
    type="number"
    min="1"
    placeholder="Ej. 2"
    value={invitados}
    onChange={(e) => setInvitados(e.target.value)}
    className="
      w-full
      bg-[#FFFDF8]
      border
      border-[#B89B5E]/35
      px-5
      py-4
      text-[#3F433A]
      outline-none
      focus:border-[#5E6650]
      transition
    "
  />
</div>

            <div>
              <label className="block text-[#5E6650] text-xs uppercase tracking-[0.22em] mb-2">
                Mensaje opcional
              </label>
              <textarea
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Escribe un mensaje para los novios"
                rows="4"
                className="
                  w-full
                  bg-[#FFFDF8]
                  border
                  border-[#B89B5E]/35
                  px-5
                  py-4
                  text-[#3F433A]
                  outline-none
                  resize-none
                  focus:border-[#5E6650]
                  transition
                "
              />
            </div>
          </div>

          <button
            onClick={enviarWhatsapp}
            className="
              mt-9
              w-full
              sm:w-auto
              bg-[#5E6650]
              hover:bg-[#B89B5E]
              text-[#F7F4ED]
              px-10
              py-4
              rounded-full
              uppercase
              tracking-[0.22em]
              text-xs
              shadow-[0_14px_35px_rgba(94,102,80,0.28)]
              transition
              duration-300
              hover:scale-105
            "
          >
            Confirmar por WhatsApp
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default ConfirmacionWhatsapp;