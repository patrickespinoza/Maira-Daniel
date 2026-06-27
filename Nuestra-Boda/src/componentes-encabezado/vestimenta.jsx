import React from "react";
import { motion } from "framer-motion";

const Vestimenta = () => {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section className="w-full bg-[#5E6650] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 flex items-center justify-center overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          relative
          max-w-7xl
          w-full
          bg-[#F7F4ED]
          border
          border-[#B89B5E]/40
          shadow-[0_30px_90px_rgba(28,35,24,0.35)]
          overflow-hidden
          grid
          grid-cols-1
          lg:grid-cols-2
        "
      >
        {/* Marco interior */}
        <div className="absolute inset-4 border border-[#B89B5E]/25 pointer-events-none z-20" />

        {/* IMAGEN */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            relative
            bg-[#F7F4ED]
            flex
            items-center
            justify-center
            h-[520px]
            sm:h-[650px]
            md:h-[760px]
            lg:h-auto
            lg:min-h-[760px]
            overflow-hidden
          "
        >
          <img
            src="/dresscode2.png"
            alt="Vestimenta"
            className="
              w-full
              h-full
              object-contain
              object-center
              scale-[1.15]
              sm:scale-[1.12]
              md:scale-[1.08]
              lg:scale-[1.08]
              transition-transform
              duration-500
              drop-shadow-[0_20px_35px_rgba(94,102,80,0.18)]
            "
          />

          <div className="absolute inset-0 bg-[#5E6650]/5 pointer-events-none" />
        </motion.div>

        {/* TEXTO */}
        <div
          className="
            relative
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-8
            py-14
            sm:p-14
            lg:px-12
            lg:py-16
            bg-[#F7F4ED]
          "
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#5E6650]/10 rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#B89B5E]/10 rounded-tr-full" />

          <div className="relative z-10 max-w-md">
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.22em" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="
                uppercase
                text-[11px]
                sm:text-sm
                tracking-[0.22em]
                text-[#B89B5E]
                font-light
              "
            >
              Código de Vestimenta
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                font-playfair
                text-[#5E6650]
                mt-6
                leading-tight
              "
            >
              Vestimenta Formal
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="h-px bg-[#B89B5E] mt-7 mx-auto"
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="
                mt-8
                text-base
                sm:text-lg
                md:text-xl
                text-[#3F433A]/80
                leading-relaxed
                font-cursiveDancing
              "
            >
              Queremos compartir contigo una noche elegante y especial.
              Te invitamos a asistir con vestimenta formal para celebrar
              juntos este momento inolvidable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="
                mt-9
                text-[#B89B5E]
                text-xs
                sm:text-sm
                tracking-[0.22em]
                text-center
                uppercase
              "
            >
              ✦ Elegancia • Glamour • Celebración ✦
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Vestimenta;