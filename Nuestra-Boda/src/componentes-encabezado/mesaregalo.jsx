import React from "react";
import { motion } from "framer-motion";

const MesaRegalos = () => {
  return (
    <section className="relative w-full bg-[#5E6650] px-5 py-16 sm:py-24 overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-[#F7F4ED]/10 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-52 h-52 bg-[#B89B5E]/10 rounded-tr-full" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="uppercase tracking-[0.35em] text-[#E7D7B1] text-xs sm:text-sm font-light">
            Un detalle para nuestro hogar
          </p>

          <h2 className="font-playfair text-4xl sm:text-6xl text-[#F7F4ED] mt-5">
            Mesa de Regalos
          </h2>

          <div className="w-24 h-px bg-[#B89B5E] mx-auto mt-6" />
        </motion.div>

        {/* Tarjeta */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            relative
            bg-[#F7F4ED]
            border
            border-[#B89B5E]/40
            shadow-[0_25px_80px_rgba(28,35,24,0.35)]
            overflow-hidden
            p-4
            sm:p-6
          "
        >
          {/* Marco */}
          <div className="absolute inset-4 border border-[#B89B5E]/20 pointer-events-none" />

          {/* Imagen */}
          <motion.img
            whileHover={{
              scale: 1.02,
            }}
            transition={{ duration: .4 }}
            src="/final2.png"
            alt="Mesa de regalos"
            className="
              relative
              z-10
              w-full
              h-auto
              object-contain
              rounded
            "
          />
        </motion.div>

      </div>
    </section>
  );
};

export default MesaRegalos;