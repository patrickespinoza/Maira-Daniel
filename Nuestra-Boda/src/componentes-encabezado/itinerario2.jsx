import React from "react";
import { motion } from "framer-motion";

const Itinerario2 = () => {
  const eventos = [
    {
      titulo: "Entrada de Novios",
      imagen: "/arco-de-la-boda.png",
      hora: "8:10 pm",
    },
    {
      titulo: "Cena",
      imagen: "/cena-romantica.png",
      hora: "9:00 pm",
    },
    {
      titulo: "Baile",
      imagen: "/baile.png",
      hora: "10:00 pm",
    },
    {
      titulo: "Show Party",
      imagen: "/bola-de-disco.png",
      hora: "10:00 pm",
    },
  ];

  return (
    <section className="relative w-full bg-[#5E6650] px-5 py-16 sm:py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#F7F4ED]/10 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-52 h-52 bg-[#B89B5E]/10 rounded-tr-full" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="uppercase tracking-[0.38em] text-[#E7D7B1] text-xs sm:text-sm font-light">
            Nuestro Día
          </p>

          <h1 className="font-playfair text-4xl sm:text-6xl text-[#F7F4ED] mt-5">
            Itinerario
          </h1>

          <div className="w-20 h-px bg-[#B89B5E] mx-auto mt-6" />
        </motion.div>

        {/* AGENDA */}
        <div className="relative bg-[#F7F4ED] border border-[#B89B5E]/40 shadow-[0_25px_80px_rgba(28,35,24,0.35)] px-5 sm:px-10 py-10 sm:py-14">
          <div className="absolute inset-3 border border-[#B89B5E]/20 pointer-events-none" />

          <div className="relative z-10 space-y-2">
            {eventos.map((evento, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="
                  relative
                  grid
                  grid-cols-[72px_1fr]
                  sm:grid-cols-[90px_1fr]
                  gap-5
                  py-6
                  border-b
                  border-[#B89B5E]/25
                  last:border-b-0
                "
              >
                {/* HORA */}
                <div className="flex flex-col items-center">
                  <p className="font-playfair text-[#5E6650] text-xl sm:text-2xl leading-none">
                    {evento.hora.split("-")[0].trim()}
                  </p>

                  <div className="w-px h-10 bg-[#B89B5E]/50 my-3" />

                  <div
  className="
    w-20
    h-20
    sm:w-24
    sm:h-24
    rounded-full
    bg-[#5E6650]
    border-2
    border-[#B89B5E]
    shadow-[0_10px_30px_rgba(94,102,80,0.28)]
    flex
    items-center
    justify-center
    transition
    duration-300
    hover:scale-105
  "
>
  <img
    src={evento.imagen}
    alt={evento.titulo}
    className="
      w-11
      h-11
      sm:w-14
      sm:h-14
      object-contain
      invert
      opacity-95
    "
    style={{
    filter:
      "brightness(0) saturate(100%) invert(100%)"
  }}
  />
</div>
                </div>

                {/* INFO */}
                <div className="flex flex-col justify-center">
                  <p className="uppercase tracking-[0.25em] text-[10px] text-[#B89B5E] mb-2">
                    Evento {String(index + 1).padStart(2, "0")}
                  </p>

                  <h2 className="font-playfair text-2xl sm:text-3xl text-[#5E6650] leading-tight">
                    {evento.titulo}
                  </h2>

                  <p className="font-cursiveDancing text-xl sm:text-2xl text-[#3F433A]/80 mt-2">
                    {evento.hora}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerario2;