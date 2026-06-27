import React from "react";
import { motion } from "framer-motion";

const Celebracion = ({
  dia,
  fecha,
  mesAnio,
  hora,
  lugar,
  direccion,
  ubicacion,
  titulo,
}) => {
  return (
    <section className="relative w-full bg-[#F7F4ED] px-4 py-16 sm:py-24 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[42%] bg-[#5E6650]" />
      <div className="absolute top-10 right-8 w-40 h-40 rounded-full border border-[#B89B5E]/30" />
      <div className="absolute bottom-10 left-10 w-28 h-28 rounded-full border border-[#B89B5E]/25" />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center">
        
        {/* FECHA */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-left text-[#F7F4ED] px-4"
        >
          <p className="uppercase tracking-[0.45em] text-xs sm:text-sm text-[#E7D7B1] mb-5">
            {dia}
          </p>

          <h1 className="font-playfair text-[7rem] sm:text-[9rem] md:text-[10rem] leading-none">
            {fecha}
          </h1>

          <p className="font-playfair uppercase tracking-[0.25em] text-xl sm:text-2xl text-[#E7D7B1] mt-4">
            {mesAnio}
          </p>

          <div className="w-24 h-px bg-[#B89B5E] mx-auto md:mx-0 mt-8" />
        </motion.div>

        {/* TARJETA */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
          className="
            relative
            bg-[#FFFDF8]
            border border-[#B89B5E]/40
            shadow-[0_30px_80px_rgba(63,67,58,0.2)]
            px-7 py-12 sm:px-14 sm:py-16
            rounded-[2.5rem]
            overflow-hidden
          "
        >
          <div className="absolute top-0 right-0 w-36 h-36 bg-[#5E6650]/10 rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#B89B5E]/10 rounded-tr-full" />

          <div className="relative z-10">
            <p className="uppercase tracking-[0.38em] text-xs text-[#B89B5E] mb-4">
              Celebración
            </p>

            <h2 className="font-playfair text-4xl sm:text-5xl text-[#3F433A] leading-tight">
              {titulo}
            </h2>

            <div className="w-20 h-px bg-[#B89B5E] my-8" />

            <div className="space-y-8">
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-[#B89B5E] mb-2">
                  Hora
                </p>
                <p className="font-playfair text-3xl text-[#3F433A]">
                  {hora}
                </p>
              </div>

              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-[#B89B5E] mb-2">
                  Lugar
                </p>
                <p className="font-playfair text-2xl sm:text-3xl text-[#3F433A] leading-snug">
                  {lugar}
                </p>
                <p className="text-[#7A7468] mt-4 leading-relaxed text-sm sm:text-base max-w-lg">
                  {direccion}
                </p>
              </div>

              <a
                href={ubicacion}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-[#5E6650]
                  text-[#F7F4ED]
                  px-9 py-3.5
                  rounded-full
                  uppercase
                  tracking-[0.22em]
                  text-xs
                  shadow-[0_12px_30px_rgba(94,102,80,0.35)]
                  transition
                  duration-300
                  hover:bg-[#B89B5E]
                  hover:scale-105
                "
              >
                Ver Ubicación
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Celebracion;