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
    <section className="w-full bg-[#F7F4ED]">
      <div
        className="
          w-full
          max-w-[1920px]
          mx-auto
          flex
          justify-center
          items-center
          overflow-hidden
        "
      >
        <img
          src="/dresscode.png"
          alt="Portada"
          className="
            w-full
            h-auto
            object-contain
            select-none
            pointer-events-none
          "
          draggable={false}
        />
      </div>
    </section>
  );
};

export default Vestimenta;